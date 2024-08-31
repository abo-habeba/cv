<template>
  <v-carousel
    class="hero-box"
    height="100vh"
    cycle
    :show-arrows="userStore.userAll.user.hero.length > 1 ? 'hover' : false"
    :hide-delimiter-background="userStore.userAll.user.hero.length <= 1"
    :hide-delimiters="userStore.userAll.user.hero.length <= 1"
  >
    <v-carousel-item v-for="(photo, i) in userStore.userAll.user.hero" :key="i">
      <v-img :src="photo.path" height="100%" cover v-if="userStore.userAll.user.hero">
        <div class="hero-text d-flex flex-column fill-height justify-center align-center">
          <h3>{{ lang === 'en' ? '' : ' مرحبا انا' }}</h3>
          <h1>{{ userStore.userAll.user.first_name[lang] }}</h1>
          <p>{{ userStore.userAll.user.position[lang] }}</p>
        </div>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const userStore = useUserStore();
const lang = route.params.lang;
onMounted(() => {
  console.log(typeof userStore.userAll.user.hero, userStore.userAll.user.hero);
});
</script>
<style lang="scss">
.hero-box {
  position: relative;
  .hero-text {
    padding: 5%;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    inset: 0;
    & > * {
      color: white;
    }
  }
}
</style>
