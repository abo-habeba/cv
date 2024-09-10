<template>
  <div>
    <v-col cols="auto">
      <v-btn @click="addNew()" icon="mdi-plus" color="success" size="small" to=""></v-btn>
    </v-col>
    <v-dialog class="text-center" v-model="dialogItemForm" max-width="900" persistent>
      <v-card class="pa-5">
        <h2 class="ma-5">
          {{ item.id ? `تعديل ` : ` اضافة ` }}
        </h2>
        <v-form>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="title.ar" label="العنوان"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="title.en" label="Title"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="company.ar" label="الشركة"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="company.en" label="Company"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="description.ar" label="الوصف"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="description.en" label="Description"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="responsibilities.ar" label="المسؤوليات"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="responsibilities.en" label="Responsibilities"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="achievements.ar" label="الإنجازات"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="achievements.en" label="Achievements"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="employment_type.ar" label="نوع الوظيفه"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="employment_type.en" label="Employment Type"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="industry.ar" label="المجال"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="industry.en" label="Industry"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="location.ar" label="الموقع"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="location.en" label="Location"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field type="date" v-model="item.start_date" label="تاريخ البدء"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-checkbox v-model="item.is_current" label="حتي الان"></v-checkbox>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field type="date" v-model="item.end_date" label="تاريخ الانتهاء"></v-text-field>
            </v-col>
            <imageInput ref="imageInputRef" />
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
import { notifyError } from '@/Service/notifyService';
import { saveItems } from '@/Service/apiService';
// import axios from 'axios';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemForm = ref(false);
const item = ref({});
const title = ref({});
const company = ref({});
const description = ref({});
const responsibilities = ref({});
const achievements = ref({});
const employment_type = ref({});
const industry = ref({});
const location = ref({});
function closeDialog() {
  title.value = { ar: '', en: '' };
  company.value = { ar: '', en: '' };
  description.value = { ar: '', en: '' };
  responsibilities.value = { ar: '', en: '' };
  achievements.value = { ar: '', en: '' };
  employment_type.value = { ar: '', en: '' };
  industry.value = { ar: '', en: '' };
  location.value = { ar: '', en: '' };
  item.value = {
    start_date: '',
    end_date: '',
    is_current: false,
    id: null,
  };
  dialogItemForm.value = false;
  if (item.value.id) {
    emits('runItems');
  }
}
function save(compressedImages) {
  const formData = new FormData();
  formData.append('title', JSON.stringify(title.value));
  formData.append('company', JSON.stringify(company.value));
  formData.append('description', JSON.stringify(description.value));
  formData.append('responsibilities', JSON.stringify(responsibilities.value));
  formData.append('achievements', JSON.stringify(achievements.value));
  formData.append('employment_type', JSON.stringify(employment_type.value));
  formData.append('industry', JSON.stringify(industry.value));
  formData.append('location', JSON.stringify(location.value));
  formData.append('user_id', userStore.user.id);
  formData.append('is_current', item.value.is_current ? 1 : 0);
  formData.append('end_date', item.value.end_date || '');
  formData.append('start_date', item.value.start_date);
  // Add compressed images to formData
  if (compressedImages.length) {
    compressedImages.forEach(file => {
      formData.append('photos[]', file, file.name);
    });
  }
  if (item.value.id) {
    formData.append('_method', 'put');
  }
  saveItems('experiences', formData, item.value.id).then(res => {
    item.value = res.data;
    emits('runItems');
    closeDialog();
  });
}

const imageInputRef = ref(null);
const runCompressImages = () => {
  // Validate required fields
  if (!title.value.ar && !title.value.en) {
    notifyError(`حقل العنوان مطلوب عربي او انجليزي`);
    return;
  }
  if (!company.value.ar && !company.value.en) {
    notifyError(`حقل الشركة مطلوب عربي او انجليزي`);
    return;
  }
  if (!item.value.start_date) {
    notifyError(`حقل تاريخ البدء مطلوب `);
    return;
  }
  if (!item.value.end_date && !item.value.is_current) {
    notifyError(`ادخل تاريخ الانتهاء او اختر حتي الان `);
    return;
  }
  if (imageInputRef.value) {
    imageInputRef.value.compressImages().then(res => {
      save(res);
    });
  }
};

const addNew = (data = {}) => {
  if (Object.keys(data).length !== 0) {
    title.value = data.title;
    company.value = data.company;
    description.value = data.description;
    responsibilities.value = data.responsibilities;
    achievements.value = data.achievements;
    employment_type.value = data.employment_type;
    industry.value = data.industry;
    location.value = data.location;
    item.value = data;
    if (data.end_date.en === '1' || data.end_date.en === '0') {
      item.value.is_current = data.end_date.en === '1';
      item.value.end_date = '';
    } else {
      item.value.end_date = data.end_date.en;
    }
  }
  dialogItemForm.value = true;
};

defineExpose({
  addNew,
});
</script>
