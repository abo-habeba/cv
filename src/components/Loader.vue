<template>
  <div class="loader-container">
    <div class="gear">
      <img
        src="../assets/gear.webp"
        alt="an illustration of a gear"
      />
    </div>
  </div>
</template>
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
  z-index: 100;
  background-color: #c7c7d9;
}

.gear {
  width: 300px;
  height: 300px;
  animation: rotate 4s linear infinite;
}

.gear img {
  width: 100%;
  height: 100%;
  filter: invert(47%) sepia(95%) saturate(494%) hue-rotate(353deg)
    brightness(96%) contrast(98%);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
