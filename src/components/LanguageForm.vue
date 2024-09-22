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
              <v-text-field v-model="name.ar" label="الاسم"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="name.en" label="Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="level.ar" label="المستوي"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="level.en" label="Level"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <template v-slot:actions>
          <v-btn @click="closeDialog"> اغلاق </v-btn>
          <v-btn @click="save"> موافق </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { useDisplay } from 'vuetify';
const { xs } = useDisplay();
import { notifyError } from '@/Service/notifyService';
import { saveItems } from '@/Service/apiService';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemForm = ref(false);
const item = ref({});
const name = ref({});
const level = ref({});

function closeDialog() {
  name.value = { ar: '', en: '' };
  level.value = { ar: '', en: '' };
  dialogItemForm.value = false;
  item.value = '';
  emits('runItems');
}

function save() {
  if (!name.value.ar && !name.value.en) {
    notifyError(`حقل الاسم مطلوب عربي او انجليزي`);
    return;
  }
  if (!level.value.ar && !level.value.en) {
    notifyError(`حقل المستوي مطلوب عربي او انجليزي`);
    return;
  }
  userStore.loadengApi = true;
  const formData = new FormData();
  formData.append('name', JSON.stringify(name.value));
  formData.append('level', JSON.stringify(level.value));
  formData.append('user_id', userStore.user.id);

  if (item.value.id) {
    formData.append('_method', 'put');
  }

  saveItems('languages', formData, item.value.id).then(res => {
    item.value = res.data;
    emits('runItems');
    closeDialog();
  });
}

const addNew = (data = {}) => {
  if (Object.keys(data).length !== 0) {
    name.value = data.name;
    level.value = data.level;
  }
  dialogItemForm.value = true;
  item.value = data;
};

// تصدير الوظيفة
defineExpose({
  addNew,
});
</script>
