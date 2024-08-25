<template>
  <div id="login">
    <v-container>
      <v-row>
        <v-col cols="12" sm="11" md="8" lg="6" xl="6" class="mx-auto">
          <v-card class="login-box mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <v-text-field
              density="compact"
              placeholder="ادخل الايميل"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              v-model="loginData.email"
            ></v-text-field>

            <!-- <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">  
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            نسيت كلمة المرور</a>
        </div> -->

            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="ادخل كلمة المرور"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
              v-model="loginData.password"
            ></v-text-field>

            <v-btn
              indeterminate
              :loading="loading"
              :disabled="loading"
              color="primary"
              loading-color="primary"
              loading-size="32"
              @click="login"
              prepend-icon="mdi-login"
              class="mb-8"
              :size="32"
              variant="tonal"
              block
            >
              <span> تسجيل الدخول </span>
            </v-btn>

            <v-card-text class="text-center">
              <a class="text-blue text-decoration-none" href="/register" rel="noopener noreferrer">
                انشأ حساب الان <v-icon icon="mdi-account-plus"> </v-icon>
              </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const visible = ref(false);
const loading = ref(false);
const loginData = ref({});
const router = useRouter();
import { toast } from 'vue3-toastify';
onMounted(() => {
  userStore.loadengApi = false;
  if (localStorage.token) {
    userStore.isLoader = false;
  }
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
function login() {
  loading.value = true;
  axios
    .post('login', loginData.value)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      userStore.isAuth = true;
      userStore.setAuthHeaderNew(res.data.token, router);
      userStore.fetchUser().then(() => {
        notifySuccess('تم تسجل الدخول بنجاح');
        router.push({ name: '/' });
      });
    })
    .catch(e => {
      loading.value = false;
      if (e.response.data) {
        // console.log(e.response.data);
        loading.value = true;
        notifyError(e.response.data.message);
        return;
      }
      notifyError('هناك خطا ما حاول مره اخري');
    });
}
</script>
<style>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}
</style>
