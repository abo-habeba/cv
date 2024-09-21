<template>
  <div v-if="!toggleIconmMnu" @click="toggleIconmMnu = !toggleIconmMnu" class="toggleIconmMnu"></div>
  <v-toolbar density="comfortable" :elevation="8">
    <div class="navbar">
      <v-snackbar v-model="snackbar" location="top center" color="primary" timeout="1500">
        {{ snackbarText }}
      </v-snackbar>
      <div class="box-menu">
        <v-menu @click="toggleIconmMnu = !toggleIconmMnu">
          <template v-slot:activator="{ props }">
            <v-btn
              style="z-index: 90"
              @click="toggleIconmMnu = !toggleIconmMnu"
              :icon="toggleIconmMnu ? 'mdi-menu' : 'mdi-close'"
              v-bind="props"
            ></v-btn>
          </template>
          <v-list>
            <v-list-item
              to="/admin/user"
              :prepend-avatar="userStore.user.profile_image"
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
                :href="`${locationOrigin()}/ar/${userStore.user.username}`"
                target="_blank"
                prepend-icon="mdi-web"
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
                :href="`${locationOrigin()}/en/${userStore.user.username}`"
                target="_blank"
                prepend-icon="mdi-web"
                :subtitle="`${locationHostname()}/en/${userStore.user.username}`"
                title="النسخة الانجليزية"
              >
              </v-list-item>
            </div>
            <v-list-item to="/admin/contact" prepend-icon="mdi-message-badge-outline" subtitle="تفقده رسائلك باستمرار " title="الرسائل">
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-switch @change="toggleTheme" v-model="switchd" color="info" label="الوضع المظلم" hide-details></v-switch>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout" prepend-icon="mdi-logout" title="خروج"> </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- slide-group link  -->
      <div class="box-route">
        <v-slide-group show-arrows>
          <v-slide-group-item v-for="(routerList, i) in routerLists" :key="i">
            <router-link v-if="routerList.meta.show" :to="routerList.path"
              ><v-chip color="primary" variant="outlined" class="my-1 mx-1">
                <div :class="{ 'active-chip': route.path === routerList.path }">
                  {{ routerList.meta.title }}
                </div>
              </v-chip></router-link
            >
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>
  </v-toolbar>
</template>
<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme();
document.title = 'Hoome';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import axios from 'axios';
import { onMounted } from 'vue';
const router = useRouter();
const route = useRoute();
const routerLists = router.getRoutes();
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
  right: 7px;
  z-index: 99;
  .v-btn--density-default {
    width: 25px !important;
    height: 25px !important;
    .v-icon--size-default {
      font-size: 12px;
    }
  }
}
</style>
