<template>
  <div>
    <div class="animate__animated animate__wobble scroll-button" v-show="showButton" @click="scrollToTop">
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
  font-size: 40px;
  display: block;
  color: #007bff;
  border: none;
  cursor: pointer;
  display: block;
  transition: opacity 1s ease;
  z-index: 100;
}
</style>
