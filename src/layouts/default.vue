<template>
  <v-app>
    <navbar v-if="userStore.isAuth" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
// import { onMounted } from 'vue';
// onMounted(() => {
//   if (localStorage.token) {
//     userStore.isLoader = false;
//     userStore.loadengApi = false;
//   }
//   userStore.setAuthHeaderNew(localStorage.token).then(() => {
//     userStore.isAuth = true;
//     userStore.fetchUser();
//   });
// });
</script>
