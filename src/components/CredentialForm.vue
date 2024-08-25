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
              <v-text-field v-model="name.ar" label=" الاسم "></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="name.en" label="Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="issuer.ar" label=" اسم المنظمة "></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="issuer.en" label="Issuer"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="description.ar" label=" الوصف "></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="description.en" label="Description"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="item.credential_id" label="الرقم التعريفي"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field type="date" v-model="item.issue_date" label="تاريخ الإصدار  "></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field type="date" v-model="item.expiry_date" label="تاريخ الانتهاء"></v-text-field>
            </v-col>
            <imageInput ref="imageInputRef" @saveCompressedImages="save" />
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
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemForm = ref(false);
const item = ref({});
const name = ref({});
const issuer = ref({});
const description = ref({});
function closeDialog() {
  name.value = { ar: '', en: '' };
  issuer.value = { ar: '', en: '' };
  description.value = { ar: '', en: '' };
  item.value = {
    credential_id: '',
    issue_date: '',
    expiry_date: false,
    id: null,
  };
  dialogItemForm.value = false;
  emits('runItems');
}

function save(compressedImages) {
  const formData = new FormData();
  formData.append('name', JSON.stringify(name.value));
  formData.append('issuer', JSON.stringify(issuer.value));
  formData.append('description', JSON.stringify(description.value));
  formData.append('credential_id', item.value.credential_id);
  formData.append('issue_date', item.value.issue_date);
  formData.append('expiry_date', item.value.expiry_date || '');
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
  saveItems('credentials', formData, item.value.id).then((res) => {
    item.value = res.data;
    emits('runItems');
    closeDialog();
  });
}

const imageInputRef = ref(null);
const runCompressImages = () => {
  // Validate required fields
  if (!name.value.ar && !name.value.en) {
    notifyError(`حقل الاسم مطلوب عربي او انجليزي`);
    return;
  }
  if (!issuer.value.ar && !issuer.value.en) {
    notifyError(`حقل اسم المنظمة مطلوب عربي او انجليزي`);
    return;
  }
  if (!item.value.issue_date) {
    notifyError(`حقل تاريخ الاصدار مطلوب `);
    return;
  }
  if (imageInputRef.value) {
    imageInputRef.value.compressImages();
  }
};

const addNew = (data = {}) => {
  if (Object.keys(data).length !== 0) {
    name.value = data.name;
    issuer.value = data.issuer;
    description.value = data.description;
  }
  dialogItemForm.value = true;
  item.value = data;
};

defineExpose({
  addNew,
});
</script>
