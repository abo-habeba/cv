<template>
  <v-card class="pa-4 my-4">
    <div class="h-narrow-content">
      <div class="about-desc">
        <div class="title-section">
          <h2 v-if="userStore.userAll.user.theme?.hero?.sectionTitle.enabled" :style="userStore.userAll.user.theme?.hero?.sectionTitle.style">
            {{ lang == 'en' ? 'About' : ' عني ' }}
          </h2>
          <div class="top"></div>
          <div class="center"></div>
          <div class="bottom"></div>
        </div>
        <h2
          v-if="userStore.userAll.user.theme?.about?.mainTitle.enabled"
          :style="userStore.userAll.user.theme?.about?.mainTitle.style"
          class="h-heading"
        >
          {{ lang == 'en' ? 'Who Am I ?' : ' من انا ؟ ' }}
        </h2>
        <p v-if="userStore.userAll.user.theme?.about.subTitle.enabled" :style="userStore.userAll.user.theme.about.subTitle.style">
          <strong>{{
            `${lang === 'en' ? 'Hello, I am' : ' مرحبا انا ,'}  ${userStore.userAll.user.first_name[lang] || ' '}  ${
              userStore.userAll.user.last_name[lang] || ' '
            } `
          }}</strong>
        </p>
        <pre v-if="userStore.userAll.user.theme?.about.paragraph.enabled" :style="userStore.userAll.user.theme.about.paragraph.style">{{
          lang === 'en' ? userStore.userAll.user.about_en : userStore.userAll.user.about_ar
        }}</pre>
      </div>
    </div>
    <div class="row">
      <div style="width: 100%" v-if="userStore.userAll.user.theme.socials?.about?.enabled" class="box-socials">
        <div v-for="(social, i) in userStore.userAll.socials" :key="i">
          <!-- <p>{{ social.icon }}</p> -->
          <a :href="social.url" target="_blank">
            <v-icon :color="social.icon.color" :icon="social.icon.icon"></v-icon>
          </a>
        </div>
      </div>
      <div v-if="userStore.userAll.user.theme?.about.button?.enabled" :style="userStore.userAll.user.theme.about.button.style" class="ma-5">
        <a href="#contact">
          <v-btn color="primary"> {{ lang == 'en' ? 'Contact Me' : 'تواصل معي ' }} </v-btn>
        </a>
      </div>
    </div>
  </v-card>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';
const route = useRoute();
const userStore = useUserStore();
const lang = route.params.lang;
</script>
