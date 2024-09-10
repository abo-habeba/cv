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
              <v-text-field v-model="langName.ar" label="الاسم"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="langName.en" label="name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea v-model="lanlDescription.ar" label="الوصف"></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea v-model="lanlDescription.en" label="description"></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="item.level"
                type="number"
                label="المستوي"
                :rules="[v => (v >= 1 && v <= 100) || 'يجب أن يكون الرقم بين 1 الي 100']"
              ></v-text-field>
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
import axios from 'axios';
import { notifyError } from '@/Service/notifyService';
import { saveItems } from '@/Service/apiService';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const dialogItemForm = ref(false);
const item = ref({});
const langName = ref({});
const lanlDescription = ref({});
const emits = defineEmits(['runItems']);

function closeDialog() {
  langName.value = { ar: '', en: '' };
  lanlDescription.value = { ar: '', en: '' };
  item.value.level = '';
  item.value.id = '';
  dialogItemForm.value = false;
  emits('runItems');
}
function save(compressedImages) {
  const formData = new FormData();
  formData.append('name', JSON.stringify(langName.value));
  formData.append('description', JSON.stringify(lanlDescription.value));
  if (item.value.level) {
    formData.append('level', item.value.level);
  }
  console.log('item.value.level', item.value.level || null);
  formData.append('user_id', userStore.user.id);
  console.log('userStore.user.id', userStore.user.id);

  // Add compressed images to formData
  if (compressedImages.length) {
    compressedImages.forEach(file => {
      formData.append('photos[]', file, file.name);
    });
  }
  if (item.value.id) {
    formData.append('_method', 'put');
  }
  saveItems('skills', formData, item.value.id).then(res => {
    item.value = res.data;
    emits('runItems');
    closeDialog();
  });
}

const imageInputRef = ref(null);
const runCompressImages = () => {
  // Validate required fields
  if (!langName.value.ar && !langName.value.en) {
    notifyError(`حقل الاسم مطلوب عربي او انجليزي`);
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
    langName.value = data.name;
    lanlDescription.value = data.description;
  }
  dialogItemForm.value = true;
  item.value = data;
};

// تصدير الوظيفة
defineExpose({
  addNew,
});
</script>
