<template>
  <div style="height: 5000px;" id="h-page" v-if="getData">
    <!-- <div v-if="userAuthId === userAllData.user.id">edete</div> -->
    <div class="container-wrap">
      <div class="box-toggle">
        <span v-if="btnToggle" @click="funToggled" :class="toggled ? 'mdi mdi-close' : 'mdi mdi-menu'" class="btn-toggle"></span>
        <aside id="h-aside" :style="{ width: asideWidth }">
          <AsideApp />
        </aside>
      </div>
      <div id="h-main">
        <div v-if="btnToggle" :class="{ mainOverlay: toggled }" @click="closedToggled"></div>
        <section id="h-hero" class="h-hero">
          <Hero />
        </section>
        <!-- <section id="h-about" class="h-about">
          <About />
        </section>
        <section id="h-services" class="h-services">
          <Services />
        </section>
        <section id="h-skills" class="h-skills">
          <Skills />
        </section>
        <section id="h-education" class="h-education">
          <Education />
        </section>
        <section id="h-experience" class="h-experience">
          <Experience />
        </section>
        <section id="h-work" class="h-work">
          <Work />
        </section>
        <section id="h-blog" class="h-blog">
          <Blog />
        </section>
        <section id="h-contact" class="h-contact">
          <Content />
        </section> -->
      </div>
    </div>
    <ScrollTop/>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';
const userStore = useUserStore();
const route = useRoute();
const toggled = ref(true);
const btnToggle = ref(true);
const userAuthId = localStorage.user ? JSON.parse(localStorage.user).id : false;
const userAllData = ref([]);
const getData = ref(false);
// const isOverlay = ref(false);
// const lang = route.params.lang;
// const backgroundColor = ref('#ff0000');
// const width = ref('400px');
// const display = ref('none');
// console.log(lang);
// console.log(route.params.id);
const asideWidth = ref('30vw');
const isScroll = ref(true);

onMounted(() => {
  userStore.loadengApi = false;
  window.addEventListener('scroll', setActiveNavItem);
  // window.addEventListener('scroll', handleScroll);
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  handleMediaChange(mediaQuery); // Initial check
  mediaQuery.addEventListener('change', handleMediaChange);
  axios
    .get(`users-all/${route.params.id}`)
    .then(res => {
      userAllData.value = res.data.data;
      userStore.userAll = res.data.data;
      console.log('[id] userStore.userAll', userStore.userAll);

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

function closedToggled() {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  console.log(mediaQuery.matches);
  if (mediaQuery.matches) {
    toggled.value = false;
    asideWidth.value = '0px';
    // isOverlay.value = false;
  }
}
function handleScroll() {
  if (btnToggle.value) {
    if (isScroll.value) {
      asideWidth.value = '0px';
      toggled.value = false;
      isScroll.value = false;
    }
  }
}

function funToggled() {
  toggled.value = !toggled.value;
  // isOverlay.value = !isOverlay.value;
  asideWidth.value = toggled.value ? '40vw' : '0px';
}

function handleMediaChange(event) {
  if (event.matches) {
    toggled.value = false;
    asideWidth.value = '0px';
    btnToggle.value = true;
    // toggled.value ? (isOverlay.value = true) : (isOverlay.value = false);
  } else {
    asideWidth.value = '20vw';
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
* {
  text-decoration: none;
}
#h-page {
  @media screen and (min-width: 768px) {
    margin: 0px 10%;
  }
}
.mainOverlay {
  background-color: #0000ff1c;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
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
}
#h-aside {
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  /* width: 300px; */
  background-color: #f0f0f0;
  transition: opacity 0.5s ease, width 1s ease;
}

.box-toggle {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 9000;
}
.btn-toggle {
  position: absolute;
  top: 0;
  right: -60px;
  font-size: 60px;
  cursor: pointer;
  display: inline-block;
  color: #3498db;
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
</style>
