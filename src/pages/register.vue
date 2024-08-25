<template>
  <div id="register">
    <v-container>
      <v-row>
        <v-col cols="12" sm="11" md="8" lg="6" xl="6" class="mx-auto">
          <v-card
            class="register-box mx-auto pa-12 pb-8"
            elevation="8"
            max-width="448"
            rounded="lg"
          >
            <v-text-field
              density="compact"
              label=" الاسم الاول "
              prepend-inner-icon="mdi-account-outline"
              variant="outlined"
              v-model="registerData.first_name"
            ></v-text-field>

            <v-text-field
              density="compact"
              label=" الاسم الثاني "
              prepend-inner-icon="mdi-account-outline"
              variant="outlined"
              v-model="registerData.last_name"
            ></v-text-field>

            <v-alert class="mb-3" type="warning" variant="outlined">
              هذا الاسم يستخدم في رابط المتصفح لابد ان يكون باللغة الانجليزية
            </v-alert>

            <v-text-field
              density="compact"
              label=" اسم المستخدم "
              :prefix="windowurld"
              prepend-inner-icon="mdi-web"
              variant="outlined"
              v-model="registerData.username"
            ></v-text-field>

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
              density="compact"
              label=" رقم الهاتف "
              type="number"
              prepend-inner-icon="mdi-phone-outline"
              variant="outlined"
              v-model="registerData.phone"
            ></v-text-field>

            <v-btn
              @click="register"
              class="mb-8"
              color="blue"
              size="large"
              variant="tonal"
              block
            >
              انشاء حساب
            </v-btn>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              <a
                class="text-caption text-decoration-none text-blue"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                اذا كان لديك حساب ادخل من هنا</a
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const visible = ref(false);
const registerData = ref({});

  const windowurld = ref(`${window.location.origin}/`);
  // console.log(windowurld.value);

function register() {
  userStore.loadengApi = true;
  // console.log(registerData.value);
  axios
    .post("register", registerData.value)
    .then((res) => {
      // console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      userStore.loadengApi = false;
      location.reload();
      // router.push('/other-page');
      // console.log(res.data.user);
      // console.log(res.data.token);
      // store.setAuthHeaderNew(res.data.token);
    })
    .catch((e) => {
      // console.log(e.response);
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
