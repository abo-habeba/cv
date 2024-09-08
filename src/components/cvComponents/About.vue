<template>
  <div class="h-narrow-content">
    <div class="about-desc">
      <div class="title-section">
        <h2>{{ lang == 'en' ? 'About' : ' عني ' }}</h2>
        <div class="top"></div>
        <div class="center"></div>
        <div class="bottom"></div>
      </div>
      <h2 class="h-heading">{{ lang == 'en' ? 'Who Am I ?' : ' من انا ؟ ' }}</h2>
      <p>
        <strong>{{
          `${lang === 'en' ? 'Hello, I am' : ' مرحبا انا ,'}  ${userStore.userAll.user.first_name[lang] || ' '}  ${
            userStore.userAll.user.last_name[lang] || ' '
          } `
        }}</strong>
      </p>
      <pre>{{ lang === 'en' ? userStore.userAll.user.about_en : userStore.userAll.user.about_ar }}</pre>
    </div>
  </div>
  <div class="row"></div>
  <div class="row">
    <div class="col-md-12 animate-box">
      <div class="hire">
        <h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2>
        <a href="#" class="btn-hire">Hire me</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted, ref, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const userStore = useUserStore();
const lang = route.params.lang;
</script>
