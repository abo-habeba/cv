<template>
  <div id="register">
    <v-container>
      <v-row>
        <v-col cols="12" sm="11" md="8" lg="6" xl="6" class="mx-auto">
          <v-card class="register-box mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <v-alert class="mb-3" type="warning" variant="outlined"> هذا الاسم يستخدم في رابط المتصفح </v-alert>
            <v-text-field
              density="compact"
              label=" اسم المستخدم "
              :prefix="windowurld"
              prepend-inner-icon="mdi-web"
              variant="outlined"
              v-model="registerData.username"
              :rules="usernameRules"
            ></v-text-field>
            <v-alert v-if="usernameAlready === true" class="mb-3" type="error" variant="outlined"> الاسم مستخدم من قبل </v-alert>

            <v-text-field
              density="compact"
              placeholder="ادخل الايميل"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              v-model="registerData.email"
            ></v-text-field>

            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="ادخل كلمة المرور"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
              v-model="registerData.password"
            ></v-text-field>
            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder=" اعد كتابة كلمة المرور"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
              :rules="[v => v === registerData.password || 'كلمة المرور غير متطابقتان']"
            ></v-text-field>

            <v-text-field
              density="compact"
              label=" رقم الهاتف "
              type="number"
              prepend-inner-icon="mdi-phone-outline"
              variant="outlined"
              v-model="registerData.phone"
            ></v-text-field>

            <v-btn @click="register" class="mb-8" color="blue" size="large" variant="tonal" block> انشاء حساب </v-btn>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
              <a class="text-caption text-decoration-none text-blue" href="/login" rel="noopener noreferrer"> اذا كان لديك حساب ادخل من هنا</a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { toast } from 'vue3-toastify';
const userStore = useUserStore();
const visible = ref(false);
const registerData = ref({});
const usernameAlready = ref(false);
const windowurld = ref(`${window.location.origin}/`);
const usernameRules = [
  v => !!v || 'يرجى إدخال اسم المستخدم',
  v => !v.includes(' ') || 'يجب ألا يحتوي اسم المستخدم على مسافات ',
  v => v === v.toLowerCase() || 'يجب أن تكون جميع الحروف صغيرة ',
  v => !/[{}|\\^[\]`"<>#/?]/.test(v) || 'يجب ألا يحتوي اسم المستخدم على العلامات التالية: { } | \\ ^ [ ] ` " < > # / ؟',
  v => /^[a-zA-Z]+$/.test(v) || 'يجب أن يحتوي اسم المستخدم على أحرف انجليزية فقط',
];
// console.log(windowurld.value);
const notifyError = message => {
  toast.error(message, {
    theme: 'colored',
    position: toast.POSITION.TOP_LEFT,
  });
};
onMounted(() => {
  userStore.loadengApi = false;
});
function register() {
  usernameAlready.value = false;
  userStore.loadengApi = true;
  // console.log(registerData.value);
  axios
    .post('register', registerData.value)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      userStore.loadengApi = false;
      location.reload();
    })
    .catch(e => {
      userStore.loadengApi = false;
      console.log(e.response.data.errors);
      if (e.response.data.errors.username) {
        if (e.response.data.errors.username[0] === 'The username has already been taken.') {
          usernameAlready.value = true;
          notifyError('اسم المستخدم غير متاح استخدامة');
        }
        return;
      }
    });
}
</script>
<style>
#register {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}
</style>
