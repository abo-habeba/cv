<template>
  <V-card class="w-100 pa-4 my-4">
    <v-dialog v-model="sendDialog">
      <v-card class="ma-4 pa-4">
        <v-card-title> تم ارسال الرسالة </v-card-title>
        <br class="ma-4 w-75" />
        <v-btn @click="sendDialog = false"> موافق </v-btn>
      </v-card>
    </v-dialog>
    <div class="title-section">
      <h2 v-if="userStore.userAll.user.theme?.hero?.sectionTitle.enabled" :style="userStore.userAll.user.theme?.hero?.sectionTitle.style">
        {{ lang == 'en' ? 'Content' : ' اتصل بنا ' }}
      </h2>
      <div class="top"></div>
      <div class="center"></div>
      <div class="bottom"></div>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="w-100 h-100 pa-3">
          <div class="h-feature h-feature-sm animate-box fadeInLeft animated">
            <v-card-text>
              <v-icon size="25" icon="mdi-email"></v-icon>
              <p>
                <a :href="'mailto:' + userStore.userAll.user.email">{{ userStore.userAll.user.email }}</a>
              </p>
            </v-card-text>
          </div>
          <div class="h-feature h-feature-sm animate-box fadeInLeft animated">
            <v-card-text>
              <v-icon size="25" icon="mdi-map-marker"></v-icon>
              <p>
                {{ userStore.userAll.user.address[lang] }}
              </p>
            </v-card-text>
          </div>
          <div class="h-feature h-feature-sm animate-box fadeInLeft animated">
            <v-card-text>
              <v-icon size="25" icon="mdi-phone"></v-icon>
              <p>
                <a :href="'tel:' + userStore.userAll.user.phone">{{ userStore.userAll.user.phone }}</a>
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
                <v-text-field v-model="name[lang]" :label="lang === 'en' ? 'Name' : 'الاسم'" required :rules="nameRules"></v-text-field>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Phone Input with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="text" height="56px" width="100%">
              <v-responsive>
                <v-text-field
                  v-model="item.phone"
                  :label="lang === 'en' ? 'Phone' : 'رقم الهاتف'"
                  required
                  type="number"
                  :rules="phoneRules"
                ></v-text-field>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Email Input with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="text" height="56px" width="100%">
              <v-responsive>
                <v-text-field
                  v-model="item.email"
                  :label="lang === 'en' ? 'Email' : 'الايميل'"
                  required
                  type="email"
                  :rules="emailRules"
                ></v-text-field>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Subject Input with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="text" height="56px" width="100%">
              <v-responsive>
                <v-text-field v-model="subject[lang]" :label="lang === 'en' ? 'Subject' : 'الموضوع'" required :rules="subjectRules"></v-text-field>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Message Textarea with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="text" height="112px" width="100%">
              <v-responsive>
                <v-textarea
                  v-model="message[lang]"
                  :label="lang === 'en' ? 'Message' : 'الرسالة'"
                  rows="7"
                  required
                  :rules="messageRules"
                ></v-textarea>
              </v-responsive>
            </v-skeleton-loader>

            <!-- Send Button with Skeleton Loader -->
            <v-skeleton-loader :loading="loading" type="button" height="56px" width="100%">
              <v-responsive>
                <v-btn @click="sendItems" color="primary" :disabled="!valid || loading">
                  {{ lang === 'en' ? 'Send Message' : 'ارسال رسالة' }}
                </v-btn>
              </v-responsive>
            </v-skeleton-loader>
          </v-form>
        </V-card>
      </v-col>
    </v-row>
  </V-card>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
const loading = ref(false);

import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const route = useRoute();
const lang = route.params.lang;
const item = ref({});
const name = ref({});
const subject = ref({});
const message = ref({});
const valid = ref(false);
const sendDialog = ref(false);
// قواعد التحقق لكل حقل
const nameRules = [v => !!v || (lang.value === 'en' ? 'Name is required' : 'الاسم مطلوب')];
const phoneRules = [
  v => !!v || (lang.value === 'en' ? 'Phone is required' : 'رقم الهاتف مطلوب'),
  v => (v && v.length === 11) || (lang.value === 'en' ? 'Phone must be 11 digits' : 'يجب أن يحتوي رقم الهاتف على 11 رقم'),
];
const emailRules = [
  v => !!v || (lang.value === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'),
  v => /.+@.+\..+/.test(v) || (lang.value === 'en' ? 'Email must be valid' : 'يجب أن يكون البريد الإلكتروني صالحًا'),
];
const subjectRules = [v => !!v || (lang.value === 'en' ? 'Subject is required' : 'الموضوع مطلوب')];
const messageRules = [v => !!v || (lang.value === 'en' ? 'Message is required' : 'الرسالة مطلوبة')];

function sendItems() {
  const form = ref(null);
  if (valid.value) {
    item.value.name = JSON.stringify(name.value);
    item.value.subject = JSON.stringify(subject.value);
    item.value.message = JSON.stringify(message.value);
    item.value.user_id = userStore.userAll.user.id;
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
</script>
