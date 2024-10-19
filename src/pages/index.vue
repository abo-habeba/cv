<template>
  <v-dialog v-model="sendDialog">
    <v-card class="ma-4 pa-4">
      <v-card-title class="text-center"> تم ارسال الرسالة </v-card-title>
      <br class="ma-4 w-75" />
      <v-btn @click="sendDialog = false"> موافق </v-btn>
    </v-card>
  </v-dialog>
  <!-- ***** Header Area Start ***** -->
  <v-layout>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title> سيفيهك </v-toolbar-title>

      <!-- الروابط (تظهر فقط في الشاشات الكبيرة) -->
      <v-spacer />
      <v-btn text class="d-none d-md-flex" href="#features">المميزات</v-btn>
      <v-btn text class="d-none d-md-flex" href="#contact-us">تواصل معنا</v-btn>
      <router-link to="/register" class="v-btn d-none d-md-flex" style="text-decoration: none">
        <v-btn text>إنشاء حساب</v-btn>
      </router-link>
      <router-link to="/login" class="v-btn d-none d-md-flex" style="text-decoration: none">
        <v-btn text>تسجيل دخول</v-btn>
      </router-link>

      <!-- زر القائمة (يظهر في الشاشات الصغيرة) -->
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer" />
    </v-app-bar>

    <!-- القائمة الجانبية (للهواتف) -->
    <v-navigation-drawer v-model="drawer" location="right" app temporary>
      <v-list class="text-center" dense>
        <v-list-item link href="#features">
          <v-list-item-title>المميزات</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#contact-us">
          <v-list-item-title>تواصل معنا</v-list-item-title>
        </v-list-item>
        <router-link to="/register" style="text-decoration: none">
          <v-list-item>
            <v-list-item-title>إنشاء حساب</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/login" style="text-decoration: none">
          <v-list-item>
            <v-list-item-title>تسجيل دخول</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </v-layout>

  <!-- ***** Header Area End ***** -->

  <!-- ***** Welcome Area Start ***** -->
  <div class="welcome-area" id="welcome">
    <!-- ***** Header Text Start ***** -->
    <div class="header-text">
      <h1>اصنع موقعك الشخصي بسهولة و مجانًا</h1>
      <p>
        <span>مهما كانت اهتماماتك أو مجالك المهني</span>
        <br />
        <span>مع خطوات بسيطة، يمكنك الحصول على موقعك الشخصي الخاص بك</span>
      </p>
      <router-link to="/register" class="main-button-slider">ابدأ الآن</router-link>
      <div>
        <!-- <img src="@/assets/images/slider-icon.png" class="rounded img-fluid d-block mx-auto" alt="First Vector Graphic" /> -->
      </div>
    </div>

    <!-- ***** Header Text End ***** -->
  </div>
  <!-- ***** Welcome Area End ***** -->

  <v-row id="features" justify="center" class="my-10 py-10">
    <v-col cols="12" class="text-center">
      <h2 class="text-h4 font-weight-bold">مميزات الخدمة</h2>
      <p class="text-subtitle-1 mt-2">اكتشف كيف يمكن لخدمتنا مساعدتك في إنشاء موقعك الشخصي بسهولة واحترافية.</p>
    </v-col>
  </v-row>

  <!-- بطاقات المميزات -->
  <v-row justify="center" class="text-center" align="center" dense>
    <v-col cols="12" md="4">
      <v-card class="pa-4" outlined>
        <v-icon color="primary" class="mb-2" size="48">mdi-palette</v-icon>
        <h3 class="text-h6">تصميم احترافي</h3>
        <p>قم بتخصيص الالوان والاحجام بالشكل الذي تناسبك</p>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card class="pa-4" outlined>
        <v-icon color="primary" class="mb-2" size="48">mdi-share-variant</v-icon>
        <h3 class="text-h6">مشاركة سريعة</h3>
        <p>احصل على رابط خاص بك وشاركه فورًا مع الآخرين</p>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card class="pa-4" outlined>
        <v-icon color="primary" class="mb-2" size="48">mdi-progress-check</v-icon>
        <h3 class="text-h6">سهولة الاستخدام</h3>
        <p>خطوات بسيطة لإنشاء الموقع في دقائق معدودة</p>
      </v-card>
    </v-col>
  </v-row>

  <v-card class="my-10 py-10">
    <v-row id="features" justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold">اتصل بنا</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="w-100 h-100 pa-3">
          <div class="h-feature h-feature-sm animate-box fadeInLeft animated">
            <v-card-text>
              <v-icon size="25" icon="mdi-email"></v-icon>
              <p>
                <a href="mailto:hesham.mohamed.abdalmabud@gmail.com"> hesham.mohamed.abdalmabud@gmail.com</a>
              </p>
            </v-card-text>
          </div>
          <div class="h-feature h-feature-sm animate-box fadeInLeft animated">
            <v-card-text>
              <v-icon size="25" icon="mdi-phone"></v-icon>
              <p>
                <a href="tel:01007888009">01007888009</a>
              </p>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <V-card class="w-100 h-100 pa-3">
          <v-form ref="form" v-model="valid">
            <!-- Name Input with Skeleton Loader -->
            <v-skeleton-loader height="56px" width="100%" :loading="loading" type="text">
              <v-responsive>
                <v-text-field v-model="name.ar" label="الاسم" required :rules="nameRules"></v-text-field>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Phone Input with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="text" height="56px" width="100%">
              <v-responsive>
                <v-text-field v-model="item.phone" label="رقم الهاتف" required :rules="phoneRules" type="number"></v-text-field>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Email Input with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="text" height="56px" width="100%">
              <v-responsive>
                <v-text-field v-model="item.email" label="الايميل" required :rules="emailRules" type="email"></v-text-field>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Subject Input with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="text" height="56px" width="100%">
              <v-responsive>
                <v-text-field v-model="subject.ar" label="الموضوع" required :rules="subjectRules"></v-text-field>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Message Textarea with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="text" height="112px" width="100%">
              <v-responsive>
                <v-textarea v-model="message.ar" label="الرسالة" rows="7" required :rules="messageRules"></v-textarea>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Send Button with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="button" height="56px" width="100%">
              <v-responsive>
                <v-btn @click="sendItems" color="primary" :disabled="!valid || loading"> ارسال رسالة </v-btn>
              </v-responsive>
            </v-skeleton-loader>
          </v-form>
        </V-card>
      </v-col>
    </v-row>
  </v-card>

  <div class="mt-9">
    <div class="Copy-right text-center">
      <div>&copy;Made with Heart ❤️</div>
      <i class="icon-heart" aria-hidden="true"> by <a href="https://h.com" target="_blank"> Hesham Mohamed </a> </i>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
const drawer = ref(false);
const valid = ref(false);
const item = ref({});
const name = ref({});
const subject = ref({});
const message = ref({});
const userStore = useUserStore();
const loading = ref(false);
const sendDialog = ref(false);
const lang = 'ee';
onMounted(() => {
  userStore.loadengApi = false;
});

// قواعد التحقق لكل حقل
const nameRules = [v => !!v || (lang === 'en' ? 'Name is required' : 'الاسم مطلوب')];
const phoneRules = [
  v => !!v || (lang === 'en' ? 'Phone is required' : 'رقم الهاتف مطلوب'),
  v => (v && v.length === 11) || (lang === 'en' ? 'Phone must be 11 digits' : 'يجب أن يحتوي رقم الهاتف على 11 رقم'),
];
const emailRules = [
  v => !!v || (lang === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'),
  v => /.+@.+\..+/.test(v) || (lang === 'en' ? 'Email must be valid' : 'يجب أن يكون البريد الإلكتروني صالحًا'),
];
const subjectRules = [v => !!v || (lang === 'en' ? 'Subject is required' : 'الموضوع مطلوب')];
const messageRules = [v => !!v || (lang === 'en' ? 'Message is required' : 'الرسالة مطلوبة')];

function sendItems() {
  const form = ref(null);
  if (valid.value) {
    item.value.name = JSON.stringify(name.value);
    item.value.subject = JSON.stringify(subject.value);
    item.value.message = JSON.stringify(message.value);
    item.value.user_id = '17';
    console.log(userStore.loadengApi);
    loading.value = true;
    console.log(userStore.loadengApi);
    axios
      .post(`contacts`, item.value)
      .then(() => {
        loading.value = false;
        item.value = '';
        name.value = '';
        subject.value = '';
        message.value = '';
        sendDialog.value = true;
      })
      .catch(() => {
        loading.value = false;
        notifyError('هناك خطا ما حاول مره اخري');
      });
  }
}

const menuTrigge = ref(false);
function menuTrigger() {
  menuTrigge.value = !menuTrigge.value;
}
definePage({
  meta: {
    title: ' الرئيسية ',
  },
});
</script>
<route lang="yaml">
meta:
  layout: pure
</route>

<style lang="scss">
.nav-app {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 5px;
    color: white;
  }
}

.welcome-area {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00afca;
  height: 100vh;
  margin-bottom: 30px;
  .header-text {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px 6px;
    p {
      font-size: 25px;
      margin: 15px 0px;
    }
    a {
      background-color: #01a401;
      color: white;
      font-weight: bold;
      font-size: 20px;
      padding: 10px 25px;
      border-radius: 20px;
    }
  }
}
</style>
