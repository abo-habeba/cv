<template>
  <v-carousel
    v-if="userStore.userAll.user"
    class="hero-box"
    height="100vh"
    style="background-color: black"
    cycle
    :show-arrows="false"
    :hide-delimiter-background="userStore.userAll.user.hero.length <= 1"
    :hide-delimiters="userStore.userAll.user.hero.length <= 1"
  >
    <v-carousel-item v-for="(photo, i) in userStore.userAll.user.hero" :key="i">
      <v-img style="background-attachment: fixed" :src="photo.path" height="100%" cover v-if="userStore.userAll.user.hero"> </v-img>
    </v-carousel-item>
    <div class="hero-text d-flex flex-column fill-height justify-center align-center">
      <h1 v-if="userStore.userAll.user.theme?.hero?.mainTitle.enabled" :style="userStore.userAll.user.theme?.hero?.mainTitle.style">
        {{
          `${lang === 'en' ? 'Hello, I am' : ' مرحبا انا ,'}  ${userStore.userAll.user.first_name[lang] || ' '}  ${
            userStore.userAll.user.last_name[lang] || ' '
          } `
        }}
      </h1>
      <p v-if="userStore.userAll.user.theme?.hero.subTitle.enabled" :style="userStore.userAll.user.theme?.hero.subTitle.style">
        {{ displayedposition }}
      </p>
      <pre v-if="userStore.userAll.user.theme?.hero.paragraph.enabled" :style="userStore.userAll.user.theme?.hero.paragraph.style" class="bio">{{
        lang === 'en' ? userStore.userAll.user.bio_en : userStore.userAll.user.bio_ar
      }}</pre>

      <div class="cta-buttons">
        <a
          v-if="userStore.userAll.user.theme?.hero.buttonWork?.enabled"
          :style="userStore.userAll.user.theme?.hero.buttonWork.style"
          href="#h-work"
          class="cta-primary"
          >{{ lang === 'en' ? 'View My Work' : ' مشاهدة أعمالي ' }}</a
        >
        <a
          v-if="userStore.userAll.user.theme?.hero.buttonCv?.enabled"
          :style="userStore.userAll.user.theme?.hero.buttonCv.style"
          class="cta-secondary"
          >{{ lang === 'en' ? 'Download Resume' : ' تحميل السيرة الذاتية ' }}</a
        >
      </div>
      <div v-if="userStore.userAll.user.theme.socials?.hero.enabled" class="box-socials">
        <div v-for="(social, i) in userStore.userAll.socials" :key="i">
          <a :href="social.url" target="_blank">
            <v-icon style="font-size: 40px" :color="social.icon.color" :icon="social.icon.icon"></v-icon>
          </a>
        </div>
      </div>
      <div v-show="showscrollIndicator" class="scroll-indicator">
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
import { onMounted, ref, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const userStore = useUserStore();
const lang = route.params.lang;
const position = ref(userStore.userAll.user.position[lang]);
const speed = 200;
const displayedposition = ref('');
function type() {
  let i = 0;
  function typeChar() {
    if (position.value) {
      if (i < position.value.length) {
        displayedposition.value += position.value.charAt(i);
        i++;
        setTimeout(typeChar, speed);
      } else {
        // الانتظار قليلاً قبل إعادة الكتابة
        setTimeout(() => {
          displayedposition.value = '';
          type();
        }, 1000);
      }
    }
  }
  typeChar();
}
const showscrollIndicator = ref(true);

const handleScroll = () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > 100) {
    showscrollIndicator.value = false;
  } else {
    showscrollIndicator.value = true;
  }
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  type();
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
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
    .bio {
      // font-size: 20px;
      letter-spacing: 1px;
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
      width: fit-content;
      padding: 0.8rem 15px;
      border-radius: 20px;
      text-decoration: none;
      font-weight: 600;
      transition: all $transition-speed ease;
      text-transform: uppercase;
      letter-spacing: 1px;

      &.cta-primary {
        background-color: $primary-color;
        color: $text-color;
        border: 2px solid $primary-color;
        display: inline-block;

        &:hover {
          background-color: transparent;
          color: $primary-color;
        }
      }

      &.cta-secondary {
        background-color: transparent;
        color: $text-color;
        border: 2px solid $text-color;
        display: inline-block;

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
  bottom: 45px;
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
    bottom: 10vh;
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
