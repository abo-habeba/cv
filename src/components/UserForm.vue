<template>
  <div>
    <v-col cols="auto">
      <v-btn class="ma-1" color="success"> تعديل البيانات <v-icon icon="mdi-square-edit-outline" end></v-icon></v-btn>
    </v-col>
    <v-dialog class="text-center" v-model="dialogItemForm" max-width="900" persistent>
      <v-card class="pa-5">
        <h2 class="ma-5">
          {{ `تعديل ` }}
        </h2>
        <v-form>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.first_name.ar" label=" الاسم الاول "></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.first_name.en" label="First Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.last_name.ar" label=" الاسم الاخير "></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.last_name.en" label=" Last Name"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="user.address.ar" label=" العنوان "></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.address.en" label=" Address"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.position.ar" label=" الوظيفة "></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.position.en" label=" Position"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-textarea
                dir="rtl"
                style="direction: rtl; text-align: right; unicode-bidi: bidi-override"
                v-model="user.bio_ar"
                label=" نبذه عنك "
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea v-model="user.bio_en" label=" Bio"></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea
                dir="rtl"
                style="direction: rtl; text-align: right; unicode-bidi: bidi-override"
                v-model="user.about_ar"
                label="  عني "
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea v-model="user.about_en" label=" About Me"></v-textarea>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="user.email" label=" Email"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.phone" label=" Phone"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-file-input
                v-model="profileImage"
                label=" الصورة الشخصيه "
                accept="image/*"
                prepend-icon="mdi-camera"
                @change="previewImage"
              ></v-file-input>
            </v-col>
            <v-col cols="12" md="6">
              <v-img style="margin: auto" v-if="preview" :src="preview" max-width="200"></v-img>
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
import axios from 'axios';
import { onMounted, ref, defineExpose } from 'vue';
import { toast } from 'vue3-toastify';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemForm = ref(false);
const profileImage = ref(null);
const user = ref({});
const preview = ref(null);
onMounted(() => {
  user.value = userStore.user;
  preview.value = userStore.user.profile_image;
});
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
}

const previewImage = () => {
  const file = profileImage.value;
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    preview.value = null;
  }
};

function save() {
  userStore.loadengApi = true;
  // إعداد FormData
  const formData = new FormData();
  formData.append('first_name', JSON.stringify(user.value.first_name));
  formData.append('last_name', JSON.stringify(user.value.last_name));
  formData.append('address', JSON.stringify(user.value.address));
  formData.append('bio_ar', user.value.bio_ar);
  formData.append('bio_en', user.value.bio_en);
  formData.append('about_ar', user.value.about_ar);
  formData.append('about_en', user.value.about_en);
  formData.append('position', JSON.stringify(user.value.position));
  formData.append('email', user.value.email);
  formData.append('phone', user.value.phone);
  if (profileImage.value) {
    formData.append('profile_image', profileImage.value);
  }
  formData.append('_method', 'put');
  axios
    .post(`users/${user.value.id}`, formData)
    .then(res => {
      userStore.fetchUser().then(() => {
        userStore.loadengApi = false;
      });
    })
    .catch(error => {
      userStore.loadengApi = false;
      notifyError('هناك خطا ما حاول مره اخري');
    });
}

const dialogForm = () => {
  dialogItemForm.value = true;
};

defineExpose({
  dialogForm,
});
</script>
<style scoped></style>
