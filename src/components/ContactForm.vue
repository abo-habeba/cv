<template>
  <div>
    <v-col cols="auto">
      <v-btn @click="addNew()" icon="mdi-plus" color="success" size="small" to=""></v-btn>
    </v-col>
    <v-dialog :fullscreen="xs" class="text-center" v-model="dialogItemForm" max-width="900">
      <v-card class="pa-5">
        <h2 class="ma-5">
          {{ item.id ? 'تعديل' : 'إضافة' }}
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
              <v-text-field v-model="item.email" label="البريد الإلكتروني"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="item.phone" label="رقم الهاتف"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="subject.ar" label="الموضوع"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="subject.en" label="Subject"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="message.ar" label="الرسالة"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="message.en" label="Message"></v-textarea>
            </v-col>
          </v-row>
        </v-form>
        <template v-slot:actions>
          <v-btn @click="closeDialog"> إغلاق </v-btn>
          <v-btn @click="save"> موافق </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify';
const { xs } = useDisplay();
import axios from 'axios';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemForm = ref(false);
const item = ref({});
const name = ref({});
const subject = ref({});
const message = ref({});

const notifySuccess = message => {
  toast.success(message, {
    theme: 'colored',
    position: toast.POSITION.TOP_LEFT,
  });
};

const notifyError = message => {
  toast.error(message, {
    theme: 'colored',
    position: toast.POSITION.TOP_LEFT,
  });
};

function closeDialog() {
  dialogItemForm.value = false;
  emits('runItems');
}

function save() {
  userStore.loadengApi = true;
  item.value.name = JSON.stringify(name.value);
  item.value.subject = JSON.stringify(subject.value);
  item.value.message = JSON.stringify(message.value);
  item.value.user_id = userStore.user.id;

  axios
    .post(`contacts`, item.value)
    .then(res => {
      emits('runItems');
      closeDialog();
      userStore.loadengApi = false;
      notifySuccess(`تم التعديل ${res.data.data.name}`);
    })
    .catch(error => {
      userStore.loadengApi = false;
      notifyError(error.response.data.message);
    });
}

const addNew = (data = {}) => {
  if (Object.keys(data).length !== 0) {
    name.value = data.name;
    subject.value = data.subject;
    message.value = data.message;
  }
  dialogItemForm.value = true;
  item.value = data;
};

// تصدير الوظيفة
defineExpose({
  addNew,
});
</script>
