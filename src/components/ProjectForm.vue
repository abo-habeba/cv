<template>
  <div>
    <v-icon @click="addNew()" color="info" size="35" icon="mdi-plus-outline"></v-icon>
    <v-dialog class="text-center" v-model="dialogItemForm" max-width="900" :fullscreen="xs">
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
              <v-text-field v-model="title.en" label="title"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="description.ar" label="الوصف"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="description.en" label="description"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="item.url" label="URL"></v-text-field>
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
import { notifyError } from '@/Service/notifyService';
import { saveItems } from '@/Service/apiService';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemForm = ref(false);
const item = ref({});
const title = ref({});
const description = ref({});

function closeDialog() {
  title.value = { ar: '', en: '' };
  description.value = { ar: '', en: '' };
  item.value.id = '';
  dialogItemForm.value = false;
  emits('runItems');
}
function ensureHttps(url) {
  if (!url.startsWith('https://')) {
    return 'https://' + url;
  }

  return url;
}

function save(compressedImages) {
  const formData = new FormData();
  formData.append('title', JSON.stringify(title.value));
  formData.append('description', JSON.stringify(description.value));
  formData.append('url', ensureHttps(item.value.url));
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
  saveItems('projects', formData, item.value.id).then(res => {
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

  if (imageInputRef.value) {
    imageInputRef.value.compressImages().then(res => {
      console.log(res);
      save(res);
    });
  }
};
const addNew = (data = {}) => {
  if (Object.keys(data).length !== 0) {
    title.value = data.title;
    description.value = data.description;
  }
  dialogItemForm.value = true;
  item.value = data;
};

// تصدير الوظيفة
defineExpose({
  addNew,
});
</script>
