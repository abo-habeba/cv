<template>
  <v-carousel
    class="hero-box"
    height="100vh"
    style="background-color: black;"
    cycle
    :show-arrows="userStore.userAll.user.hero.length > 1 ? 'hover' : false"
    :hide-delimiter-background="userStore.userAll.user.hero.length <= 1"
    :hide-delimiters="userStore.userAll.user.hero.length <= 1"
  >
    <v-carousel-item v-for="(photo, i) in userStore.userAll.user.hero" :key="i">
      <v-img :src="photo.path" height="100%" cover v-if="userStore.userAll.user.hero"> </v-img>
    </v-carousel-item>
    <div
      :style="{
        direction: lang === 'en' ? 'ltr' : 'rtl',
      }"
      class="hero-text d-flex flex-column fill-height justify-center align-center"
    >
      <h1>
        {{
          `${lang === 'en' ? 'Hello, I am' : ' مرحبا انا ,'}  ${userStore.userAll.user.first_name[lang] || ' '}  ${
            userStore.userAll.user.last_name[lang] || ' '
          } `
        }}
      </h1>
      <p>{{ displayedposition }}</p>
      <h5>{{ userStore.userAll.user.bio[lang] }}</h5>

      <div class="cta-buttons">
        <a href="#h-work" class="cta-primary">{{ lang === 'en' ? 'View My Work' : ' مشاهدة أعمالي ' }}</a>
        <a href="/cv.pdf" class="cta-secondary">{{ lang === 'en' ? 'Download Resume' : ' تحميل السيرة الذاتية ' }}</a>
      </div>
      <div class="scroll-indicator">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="scroll-text">{{ lang === 'en' ? 'Scroll Up' : 'مرر للاعلي' }}</span>
      </div>
    </div>
  </v-carousel>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const userStore = useUserStore();
const lang = route.params.lang;
const position = ref(userStore.userAll.user.position[lang]);
const speed = 200; // سرعة الكتابة
const displayedposition = ref('');
function type() {
  let i = 0;

  function typeChar() {
    if (i < position.value.length) {
      displayedposition.value += position.value.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      // الانتظار قليلاً قبل إعادة الكتابة
      setTimeout(() => {
        displayedposition.value = '';
        type();
      }, 1000); // الانتظار لمدة 1 ثانية قبل البدء من جديد
    }
  }

  typeChar();
}

onMounted(() => {
  type();
});
</script>
<style lang="scss">
$primary-color: #3498db;
$secondary-color: #2c3e50;
$text-color: #ffffff;
$transition-speed: 0.3s;
.hero-box {
  position: relative;
  .hero-text {
    padding: 5%;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    inset: 0;
    h3 {
      font-size: 30px;
    }
    h1 {
      font-size: 30px;
    }
    h5 {
      font-size: 20px;
    }
    p {
      font-size: 25px;
      padding: 15px 0;
    }
    & > * {
      color: white;
    }
  }
  .cta-buttons {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      padding: 0.8rem 1.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all $transition-speed ease;
      text-transform: uppercase;
      letter-spacing: 1px;

      &.cta-primary {
        background-color: $primary-color;
        color: $text-color;
        border: 2px solid $primary-color;

        &:hover {
          background-color: transparent;
          color: $primary-color;
        }
      }

      &.cta-secondary {
        background-color: transparent;
        color: $text-color;
        border: 2px solid $text-color;

        &:hover {
          background-color: $text-color;
          color: $secondary-color;
        }
      }
    }
  }
}

$chevron-size: 28px;
$chevron-height: 8px;
$chevron-color: #fff;
$scroll-text-color: rgba(255, 255, 255, 0.7);

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
}

.chevron {
  width: $chevron-size;
  height: $chevron-height;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move-up 3s ease-out infinite;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0; // تعديل من 'top' إلى 'bottom' لتغيير اتجاه الأسهم
    height: 100%;
    width: 51%;
    background: $chevron-color;
  }

  &:before {
    left: 0;
    transform: skew(0deg, -30deg); // عكس الميل لتحويل الشكل إلى الأعلى
  }

  &:after {
    right: 0;
    transform: skew(0deg, 30deg); // عكس الميل لتحويل الشكل إلى الأعلى
  }

  &:first-child {
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-delay: 2s;
  }
}

.scroll-text {
  color: $scroll-text-color;
  font-size: 12px;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes move-up {
  0% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
  25% {
    opacity: 1;
  }
  67% {
    opacity: 1;
    transform: translateY(-30px);
  }
  100% {
    opacity: 0;
    transform: translateY(-55px) scale3d(0.5, 0.5, 0.5);
  }
}

// لضمان أن الأيقونة تظهر فوق تأثير التدرج
.hero-box::after {
  z-index: 1;
}

// تعديل z-index للنص الرئيسي
.hero-text {
  z-index: 2;
}

// Responsive adjustments
@media (max-width: 768px) {
  .scroll-indicator {
    bottom: 20px;
  }

  .chevron {
    width: $chevron-size * 0.71;
    height: $chevron-height * 0.75;
  }

  .scroll-text {
    font-size: 10px;
  }
}
</style>
