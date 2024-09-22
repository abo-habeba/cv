<template>
  <div>
    <v-icon @click="addNew()" color="info" size="35" icon="mdi-plus-outline"></v-icon>
    <v-dialog :fullscreen="xs" class="text-center" v-model="dialogItemForm" max-width="900">
      <v-card class="pa-5">
        <h2 class="ma-5">
          {{ item.id ? `تعديل ` : ` اضافة ` }}
        </h2>
        <v-form>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="institution.ar" label="المؤسسة التعليمية"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="institution.en" label="institution"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="degree.ar" label="الدرجه العلمية"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="degree.en" label="degree"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="grade.ar" label="التقدير"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="grade.en" label="Score"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="field_of_study.ar" label="مجال الدراسة"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="field_of_study.en" label="field_of_study"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field type="date" v-model="item.start_date" label="تاريخ البدء"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field type="date" v-model="item.end_date" label="تاريخ الانتهاء"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="description.ar" label="الوصف"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="description.en" label="description"></v-text-field>
            </v-col>
            <imageInput ref="imageInputRef" :isMultiple="true" />
          </v-row>
        </v-form>
        <template v-slot:actions>
          <v-btn @click="closeDialog"> اغلاق </v-btn>
          <v-btn @click="runCompressImages"> موافق </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { useDisplay } from 'vuetify';
const { xs } = useDisplay();
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { saveItems } from '@/Service/apiService';
import { notifyError } from '@/Service/notifyService';
const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemForm = ref(false);
const item = ref({});
const institution = ref({ ar: '', en: '' });
const degree = ref({});
const grade = ref({});
const field_of_study = ref({});
const description = ref({});

function closeDialog() {
  dialogItemForm.value = false;
  emits('runItems');
}

function save(compressedImages) {
  const formData = new FormData();
  formData.append('institution', JSON.stringify(institution.value));
  formData.append('field_of_study', JSON.stringify(field_of_study.value));
  formData.append('description', JSON.stringify(description.value));
  formData.append('degree', JSON.stringify(degree.value));
  formData.append('grade', JSON.stringify(grade.value));
  formData.append('end_date', item.value.end_date || '');
  formData.append('start_date', item.value.start_date);
  formData.append('user_id', userStore.user.id);

  // Add compressed images to formData
  if (compressedImages.length) {
    compressedImages.forEach(file => {
      formData.append('photos[]', file, file.name);
    });
  }
  if (item.value.id) {
    formData.append('_method', 'put');
  }

  saveItems('academics', formData, item.value.id).then(() => {
    emits('runItems');
    closeDialog();
  });
}

const addNew = (data = {}) => {
  if (Object.keys(data).length !== 0) {
    institution.value = data.institution;
    degree.value = data.degree;
    grade.value = data.grade;
    field_of_study.value = data.field_of_study;
    description.value = data.description;
  }
  dialogItemForm.value = true;
  item.value = data;
};

const imageInputRef = ref(null);
const runCompressImages = () => {
  // Validate required fields
  console.log('runCompressImages');
  if (!institution.value.ar && !institution.value.en) {
    notifyError(`حقل المؤسسة التعليمية مطلوب عربي او انجليزي`);
    return;
  }
  if (!degree.value.ar && !degree.value.en) {
    notifyError(`حقل الدرجة العلمية مطلوب عربي او انجليزي`);
    return;
  }
  if (!field_of_study.value.ar && !field_of_study.value.en) {
    notifyError(`حقل مجال الدراسة مطلوب عربي او انجليزي`);
    return;
  }
  if (!item.value.start_date) {
    notifyError(`حقل تاريخ البدء مطلوب `);
    return;
  }

  if (imageInputRef.value) {
    imageInputRef.value.compressImages().then(res => {
      save(res);
    });
  }
};

defineExpose({
  addNew,
});
</script>
