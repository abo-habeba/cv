<template>
  <v-carousel
    height="100vh"
    cycle
    :show-arrows="userStore.userAll.user.hero.length > 1 ? 'hover' : false"
    :hide-delimiter-background="userStore.userAll.user.hero.length <= 1"
    :hide-delimiters="userStore.userAll.user.hero.length <= 1"
  >
    <v-carousel-item v-for="(photo, i) in userStore.userAll.user.hero" :key="i">
      <v-img :src="photo.path" height="100%" cover v-if="userStore.userAll.user.hero">
        <div class="d-flex flex-column fill-height justify-center">
          <h1>hesham mohamed</h1>
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </div>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';
const userStore = useUserStore();
onMounted(() => {
  console.log(typeof userStore.userAll.user.hero, userStore.userAll.user.hero);
});
</script>
<style></style>
