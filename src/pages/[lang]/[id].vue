<template>
  <div
    :style="{
      direction: lang === 'en' ? 'ltr' : 'rtl',
    }"
  >
    <div id="h-page" v-if="getData">
      <div class="container-wrap">
        <div
          class="box-toggle"
          :style="{
            [lang === 'en' ? 'left' : 'right']: '0',
            width: boxToggleeWidth,
          }"
        >
          <span v-if="btnToggle" @click="funToggled" :class="toggled ? 'mdi mdi-close' : 'mdi mdi-menu'" class="btn-toggle"></span>
          <aside
            v-show="isVisible"
            :class="['animate__animated', animationClassToggle]"
            id="h-aside"
            :style="{ width: asideWidth, [lang === 'en' ? 'left' : 'right']: '0' }"
          >
            <AsideApp />
          </aside>
        </div>
        <div id="h-main">
          <div v-if="btnToggle" :class="{ mainOverlay: toggled }" @click="funToggled"></div>
          <section id="h-hero" class="h-hero section" ref="heroRef">
            <Hero />
          </section>
          <section id="h-about" class="h-about section" ref="aboutRef">
            <About />
          </section>
          <!-- <section id="h-services" class="h-services section" ref="servicesRef">
            <Services />
          </section>
          <section id="h-skills" class="h-skills section" ref="skillsRef">
            <Skills />
          </section>
          <section id="h-education" class="h-education section" ref="educationRef">
            <Education />
          </section>
          <section id="h-experience" class="h-experience section" ref="experienceRef">
            <Experience />
          </section>
          <section id="h-work" class="h-work section" ref="workRef">
            <Work />
          </section>
          <section id="h-blog" class="h-blog section" ref="blogRef">
            <Blog />
          </section>
          <section id="h-contact" class="h-contact section" ref="contactRef">
            <Content />
          </section> -->
        </div>
      </div>
      <ScrollTop />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';
const userStore = useUserStore();
const route = useRoute();
const lang = route.params.lang;
const toggled = ref(true);
const btnToggle = ref(true);
const userAuthId = localStorage.user ? JSON.parse(localStorage.user).id : false;
const userAllData = ref([]);
const getData = ref(false);
const asideWidth = ref('30vw');
const boxToggleeWidth = ref('30vw');
const animationClassToggle = ref(null);
const isVisible = ref(true);
const mediaQuery = window.matchMedia('(max-width: 768px)');

onMounted(() => {
  //////////
  userStore.loadengApi = false;
  window.addEventListener('scroll', setActiveNavItem);
  handleMediaChange(mediaQuery); // Initial check
  mediaQuery.addEventListener('change', handleMediaChange);
  mediaQuery.addEventListener('resize', handleMediaChange);
  axios
    .get(`users-all/${route.params.id}`)
    .then(res => {
      userAllData.value = res.data.data;
      userStore.userAll = res.data.data;
      const link = document.querySelector("link[rel='icon']");
      link.href = res.data.data.user.profile_image;
      // console.log(userStore.userAll.user.profile_image);
      getData.value = true;
      userStore.loadengApi = false;
      userStore.isLoader = false;
    })
    .catch(error => {
      // console.log(error);
      userStore.isLoader = false;
      userStore.loadengApi = false;
    });
});

function setActiveNavItem() {
  const navItems = document.querySelectorAll('#nav li');
  const sections = document.querySelectorAll('section');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPos = window.pageYOffset;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSection = section.id.slice(2);
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.firstElementChild.getAttribute('href') === `#h-${currentSection}`) {
      item.classList.add('active');
    }
  });
}

// function closedToggled() {
//   const mediaQuery = window.matchMedia('(max-width: 768px)');
//   console.log(mediaQuery.matches);
//   if (mediaQuery.matches) {
//     toggled.value = false;
//     asideWidth.value = '0px';
//     // isOverlay.value = false;
//   }
// }
function funToggled() {
  if (isVisible.value && toggled.value) {
    animationClassToggle.value = 'animate__flipOutY';
    setTimeout(() => {
      toggled.value = false;
      isVisible.value = false;
    }, 400);
  } else {
    animationClassToggle.value = 'animate__flipInY';
    toggled.value = true;
    isVisible.value = true;
  }
}
function handleMediaChange(event) {
  console.log('run handleMediaChange');

  if (event.matches) {
    console.log('event.matches');
    toggled.value = false;
    isVisible.value = false;
    boxToggleeWidth.value = 'auto';
    btnToggle.value = true;
    // toggled.value ? (isOverlay.value = true) : (isOverlay.value = false);
  } else {
    console.log('else event matches');
    boxToggleeWidth.value = '20vw';
    asideWidth.value = '100%';
    toggled.value = true;
    btnToggle.value = false;
    // isOverlay.value = false;
  }
}

// definePage({
//   meta: {
//     layout: pure,
//   },
// });
</script>
<route lang="yaml">
meta:
  layout: pure
</route>
<style>
.h-hero {
  opacity: 1;
  transform: none;
}

* {
  text-decoration: none;
}
#h-main {
  flex-grow: 1;
}
/* #h-page {
  @media screen and (min-width: 768px) {
    margin: 0px 10%;
  }
} */
.mainOverlay {
  background-color: #0000ff1c;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
}
#h-main-menu {
  width: 100%;
}
.aside-visible {
  width: 300px;
}

.aside-hidden {
  width: 0px;
}
#h-main {
  width: auto;
  /* position: relative; */
  flex: 1;
}

.container-wrap {
  display: flex;
  position: relative;
}
.box-toggle {
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 100;
}
.container-wrap {
  @media screen and (min-width: 768px) {
    margin: 0px 10%;
  }
}
#h-aside {
  position: absolute;
  top: 0;
  height: 100vh;
  /* width: 300px; */
  background-color: #f0f0f0;
  transition: opacity 0.5s ease, width 1s ease;
}

.btn-toggle {
  position: absolute;
  top: 0;
  font-size: 60px;
  cursor: pointer;
  display: inline-block;
  color: #3498db;
  z-index: 99;
}
@media screen and (max-width: 768px) {
  #h-aside {
    /* width: 0px; */
    overflow: hidden;
  }
  /* .box-toggle {
    display: block;
  } */
}
.h-about {
  padding: 5%;
}
</style>
