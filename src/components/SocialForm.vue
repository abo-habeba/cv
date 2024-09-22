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
              <v-select
                v-model="selectedSocial"
                :items="socials"
                item-title="name"
                @update:modelValue="changeNameEN(selectedSocial)"
                :prepend-icon="selectedSocial.icon"
                item-value="icon"
                label="Select Social"
                single-line
                return-object
                prepend-item
              >
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="name.ar" label="الاسم"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="name.en" label="name"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="item.url" label="URL"></v-text-field>
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
import axios from 'axios';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemForm = ref(false);
const item = ref({});
const name = ref({});
const icon = ref({});

const selectedSocial = ref({ name: 'اختر موقع تواصل', icon: 'mdi-web' });

const socials = [
  { name: 'Facebook', icon: 'mdi-facebook', color: '#1877F2', namear: 'فيس بوك' }, // Blue
  { name: 'Twitter', icon: 'mdi-twitter', color: '#1DA1F2', namear: 'تويتر' }, // Light blue
  { name: 'Instagram', icon: 'mdi-instagram', color: '#E4405F', namear: 'انستجرام' }, // Pink
  { name: 'Linked In', icon: 'mdi-linkedin', color: '#0077B5', namear: 'لينكيد ان' }, // Blue
  { name: 'YouTube', icon: 'mdi-youtube', color: '#FF0000', namear: 'يوتيوب' }, // Red
  { name: 'Web Site', icon: 'mdi-web', color: '#000000', namear: 'موقع شخصي' }, // Black
];

function changeNameEN(social) {
  name.value.en = social.name;
  name.value.ar = social.namear;
  // item.value.icon = social.icon;
  icon.value.icon = social.icon;
  icon.value.color = social.color;
}

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

function ensureHttps(url) {
  if (!url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
}

function save() {
  userStore.loadengApi = true;
  item.value.name = JSON.stringify(name.value);
  item.value.icon = JSON.stringify(icon.value);
  item.value.user_id = userStore.user.id;
  item.value.url = ensureHttps(item.value.url);
  if (item.value.id) {
    axios
      .put(`socials/${item.value.id}`, item.value)
      .then(res => {
        emits('runItems');
        closeDialog();
        userStore.loadengApi = false;
        notifySuccess(` تم التعديل `);
      })
      .catch(error => {
        userStore.loadengApi = false;
        notifyError(error.response.data.message);
      });
  } else {
    axios
      .post(`socials`, item.value)
      .then(res => {
        emits('runItems');
        closeDialog();
        userStore.loadengApi = false;
        notifySuccess(` تم الحفظ `);
      })
      .catch(error => {
        userStore.loadengApi = false;
        notifyError(error.response.data.message);
      });
  }
}

const addNew = (data = {}) => {
  if (Object.keys(data).length !== 0) {
    name.value = data.name;
  }
  dialogItemForm.value = true;
  item.value = data;
};

// تصدير الوظيفة
defineExpose({
  addNew,
});
</script>
