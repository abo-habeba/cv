<template>
  <div>
    <div class="animate__animated animate__wobble scroll-button" v-show="showButton" @click="scrollToTop">
      <!-- <span class=" mdi mdi-arrow-up-bold-circle-outline"></span> -->
      <span class="mdi mdi-arrow-up-bold-box-outline"></span>
    </div>
  </div>
</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);
let lastScrollTop = 0;

const handleScroll = () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop || currentScrollTop < 300) {
    showButton.value = false;
  } else {
    showButton.value = true;
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style>
.scroll-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  font-size: 25px;
  display: block;
  color: white;
  padding: 0px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  transition: opacity 1s ease;
  z-index: 100;
}
</style>
