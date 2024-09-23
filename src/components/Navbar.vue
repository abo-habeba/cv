<template>
  <!-- <div v-if="!toggleIconmMnu" @click="toggleIconmMnu = !toggleIconmMnu" class="toggleIconmMnu"></div> -->
  <v-snackbar v-model="snackbar" location="top center" color="primary" timeout="1500">
    {{ snackbarText }}
  </v-snackbar>
  <v-app-bar color="info" prominent>
    <router-link to="/admin">
      <v-icon color="#fff" icon="mdi-home" size="35"></v-icon>
    </router-link>
    <div class="ms-6 mt-7">
      <router-link to="/admin/contact">
        <v-icon color="#f0f000" icon="mdi-message-reply-text-outline" size="20"></v-icon>
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <v-switch class="pe-5" append-icon="mdi-theme-light-dark" @change="toggleTheme" v-model="switchd" color="#000" hide-details></v-switch>
    <v-icon @click.stop="drawer = !drawer" :icon="!drawer ? 'mdi-menu' : 'mdi-close'" size="35"></v-icon>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list style="text-align: right">
      <v-list-item
        class="elevation-2 my-1"
        to="/admin/user"
        :append-avatar="userStore.user.profile_image"
        :subtitle="userStore.user.email"
        :title="userStore.user.username"
      >
      </v-list-item>
      <div class="box-link">
        <div class="copy-link">
          <v-btn icon @click="copyLink(`${locationHostname()}/ar/${userStore.user.username}`)">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </div>
        <v-list-item
          class="elevation-2 my-1"
          :href="`${locationOrigin()}/ar/${userStore.user.username}`"
          target="_blank"
          append-icon="mdi-web"
          :subtitle="`${locationHostname()}/ar/${userStore.user.username}`"
          title="النسخة العربية"
        >
        </v-list-item>
      </div>
      <div class="box-link">
        <div class="copy-link">
          <v-btn icon @click="copyLink(`${locationHostname()}/ar/${userStore.user.username}`)">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </div>
        <v-list-item
          class="elevation-2 my-1"
          :href="`${locationOrigin()}/en/${userStore.user.username}`"
          target="_blank"
          append-icon="mdi-web"
          :subtitle="`${locationHostname()}/en/${userStore.user.username}`"
          title="النسخة الانجليزية"
        >
        </v-list-item>
      </div>

      <v-list-item
        cols="6"
        v-for="routerList in routerLists"
        :key="routerList"
        class="elevation-2 my-1"
        :to="routerList.path"
        :append-icon="routerList.meta.icon"
        :subtitle="routerList.meta.description"
        :title="routerList.meta.title"
      >
      </v-list-item>

      <v-list-item class="elevation-2 my-1" @click="logout" append-icon="mdi-logout" title="خروج"> </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme();
document.title = 'Hoome';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const routerLists = ref(router.getRoutes().filter(route => route.meta && route.meta.show));
import { useUserStore } from '@/stores/user';
import axios from 'axios';
import { onMounted } from 'vue';
const drawer = ref(false);

const userStore = useUserStore();
const switchd = ref(localStorage.defaultTheme ? JSON.parse(localStorage.defaultTheme) : false);
const toggleIconmMnu = ref(true);
const snackbar = ref(false);
const snackbarText = ref('');

function copyLink(link) {
  navigator.clipboard
    .writeText(link)
    .then(() => {
      snackbarText.value = 'تم نسخ الرابط إلى الحافظة!';
      snackbar.value = true;
    })
    .catch(err => {
      console.error('حدث خطأ أثناء نسخ الرابط:', err);
    });
}
function locationHostname() {
  return window.location.hostname;
}
function locationOrigin() {
  return window.location.origin;
}
onMounted(() => {});
function toggleTheme() {
  if (switchd.value) {
    theme.global.name.value = 'dark';
    localStorage.setItem('defaultTheme', true);
  } else {
    theme.global.name.value = 'light';
    localStorage.setItem('defaultTheme', false);
  }
}
function logout() {
  userStore.loadengApi = true;
  axios
    .post(`logout`)
    .then(res => {
      userStore.loadengApi = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      location.reload(true);
      userStore.setAuthHeaderNew(localStorage.token);
      userStore.isAuth = false;
    })
    .catch(e => {
      userStore.loadengApi = false;
    });
}
</script>
<style lang="scss">
.active-chip {
  width: 100%;
  border-bottom: blue 4px solid;
  border-radius: 6px;
}

.toggleIconmMnu {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #7171783b;
}
.navbar {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  height: 100%;
  /* align-content: center; */
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.box-menu {
  width: 10%;
}
.box-route {
  width: 90%;
  display: flex;
  justify-content: center;
}
.v-toolbar__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.box-link {
  min-width: 250px;
  position: relative;
  text-align: right;
  .v-list-item-subtitle {
    display: block;
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
}
.copy-link {
  position: absolute;
  top: 0;
  left: 7px;
  z-index: 99;
  text-align: right;
  .v-btn--density-default {
    width: 25px !important;
    height: 25px !important;
    .v-icon--size-default {
      font-size: 12px;
    }
  }
}
</style>
