<template>
  <div class="main-app">
    <loader v-if="userStore.isLoader" />
    <loadengApi v-if="userStore.loadengApi" />
    <popupError v-if="userStore.popupError" />
    <router-view />
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';
// import '@/Service/apiService';

// import { fetchItems } from '@/Service/apiService';
const userStore = useUserStore();
onMounted(() => {
  if (localStorage.token) {
    userStore.isLoader = false;
    userStore.loadengApi = false;
    userStore.popupError = false;
  }
});
</script>
<style lang="scss">
.sticky-column {
  position: -webkit-sticky;
  position: sticky;
  background-color: white;
  left: 0;
  z-index: 10;
}
.text-alert {
  margin: 10px;
  padding: 5px;
  color: red;
  text-align: center;
  font-size: 20px;
  border-radius: 7px;
  background-color: rgb(116 141 128 / 43%);
}
.v-btn--size-small {
  width: 23px !important;
  height: 23px !important;
}
.main-app {
  position: relative;
}
.v-messages__message {
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 16px;
}
.v-alert--density-default {
  padding: 3px !important;
}
</style>
