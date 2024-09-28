<template>
  <div class="loader-container">
    <div class="fading-bars">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<style scoped>
.loader-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background-color: #c7c7d934;
}

.fading-bars {
  display: flex;
  justify-content: space-between;
  width: 80px;
}

.bar {
  width: 10px;
  height: 40px;
  background-color: #ff5c35;
  animation: fade 1s infinite;
}

.bar:nth-child(1) {
  animation-delay: 0s;
}

.bar:nth-child(2) {
  animation-delay: 0.2s;
}

.bar:nth-child(3) {
  animation-delay: 0.4s;
}

.bar:nth-child(4) {
  animation-delay: 0.6s;
}

.bar:nth-child(5) {
  animation-delay: 0.8s;
}

@keyframes fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
