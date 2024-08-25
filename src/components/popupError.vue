<template>
  <div class="loader-container">
    <div class="gear">
      {{ userStore.errorMessag }}
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
  height: 100%;
  z-index: 1000;
  background-color: #c7c7d9;
}

.gear {
  /* animation: rotate 4s linear infinite; */
  padding: 10px 15px;
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 22px;
  white-space: nowrap;
  border-radius: 7px;
}
</style>