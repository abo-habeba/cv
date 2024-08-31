<template>
  <div class="aside-app">
    <div class="text-center">
      <div class="author-img"><img :src="userStore.userAll.user.profile_image" /></div>
      <h1 id="h-logo">{{ userStore.userAll.user.first_name[lang] }}</h1>
      <span class="position">{{ userStore.userAll.user.position[lang] }}</span>
    </div>
    <nav id="h-main-menu" role="navigation" class="navbar">
      <div id="navbar" class="collapse">
        <ul id="nav">
          <li class="active">
            <a href="#h-hero">{{ lang == 'en' ? 'Home' : 'الرئيسية' }}</a>
          </li>
          <li>
            <a href="#h-about">{{ lang == 'en' ? 'About' : 'من نحن' }}</a>
          </li>
          <li>
            <a href="#h-services">{{ lang == 'en' ? 'Services' : 'الخدمات' }}</a>
          </li>
          <li>
            <a href="#h-skills">{{ lang == 'en' ? 'Skills' : 'المهارات' }}</a>
          </li>
          <li>
            <a href="#h-education">{{ lang == 'en' ? 'Education' : 'التعليم' }}</a>
          </li>
          <li>
            <a href="#h-experience">{{ lang == 'en' ? 'Experience' : 'الخبرة' }}</a>
          </li>
          <li>
            <a href="#h-work">{{ lang == 'en' ? 'Work' : 'الأعمال' }}</a>
          </li>
          <li>
            <a href="#h-blog">{{ lang == 'en' ? 'Blog' : 'مدونة' }}</a>
          </li>
          <li>
            <a href="#h-contact">{{ lang == 'en' ? 'Contact' : 'اتصل بنا' }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="h-footer">
      <div class="box-socials">
        <div v-for="(social, i) in userStore.userAll.socials" :key="i">
          <!-- <p>{{ social.icon }}</p> -->
          <a :href="social.url" target="_blank">
            <v-icon :color="social.icon.color" :icon="social.icon.icon"></v-icon>
          </a>
        </div>
      </div>
      <div class="Copy-right">
        <div>&copy;Made with Heart ❤️</div>
        <i class="icon-heart" aria-hidden="true"> by <a href="https://h.com" target="_blank"> Hesham Mohamed </a> </i>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';
const route = useRoute();
const lang = route.params.lang;
const userStore = useUserStore();
onMounted(() => {
  // userStore.fetchUser().then(() => {
  //   console.log(userStore.user.profile_image);
  // });
});
</script>
<style lang="scss">
.aside-app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .position {
    display: inline-block;
    padding: 5px;
  }
}

.author-img img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
#nav {
  list-style: none;
  li {
    text-align: center;
    background-color: #e4e1e1;
    padding: 4px 20px;
    margin: 4px;
    border-bottom: black solid 1px;
    border-radius: 4px;
  }

  a {
    text-decoration: none;
  }
}
ul .active {
  font-weight: bold !important;
  background-color: rgb(211, 187, 159) !important;
  a {
    color: red !important;
  }
}
.h-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .box-socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px;
    div {
      margin: 3px;
    }
  }
  .Copy-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 12px;
  }
}
@media screen and (max-width: 600px) {
  .author-img img {
    width: 100px;
    height: 100px;
  }
}
</style>
