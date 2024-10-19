<template>
  <!-- <div v-if="!toggleIconmMnu" @click="toggleIconmMnu = !toggleIconmMnu" class="toggleIconmMnu"></div> -->
  <v-snackbar v-model="snackbar" location="top center" color="primary" timeout="1500">
    {{ snackbarText }}
  </v-snackbar>
  <v-app-bar color="info" prominent>
    <h1 class="ma-2">Civehk</h1>
    <div class="ms-6 mt-7">
      <v-icon style="cursor: pointer" @click="dialogHelp = true" class="pa-4 mdi mdi-help"></v-icon>
      <router-link class="pa-4" to="/admin/contact">
        <v-badge v-if="userStore.user.unread_contacts_count > 0" :content="userStore.user.unread_contacts_count" overlap>
          <v-icon color="white" class="mdi mdi-bell"></v-icon>
        </v-badge>
        <v-icon color="white" class="mdi mdi-bell" v-else></v-icon>
        <!-- <v-icon color="#f0f000" icon="mdi-message-reply-text-outline" size="20"></v-icon> -->
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-icon dark v-bind="props" class="mx-4 mdi mdi-cog-outline"></v-icon>
      </template>
      <v-card class="px-5 elevation-10">
        <v-card-title class="pt-2">ثيم التطبيق</v-card-title>
        <v-radio-group density="compact" class="pa-2" @change="toggleTheme" v-model="defaultTheme" column>
          <v-radio label="داكن" value="dark"></v-radio>
          <hr class="my-2" />
          <v-radio label="فاتح" value="light"></v-radio>
        </v-radio-group>
      </v-card>
    </v-menu>

    <!-- <v-switch class="pe-5" v-model="switchd" color="#000" hide-details></v-switch> -->
  </v-app-bar>
  <v-navigation-drawer :temporary="!isLargeScreen" :permanent="isLargeScreen" v-model="drawer" location="right">
    <v-icon class="menu-close" @click.stop="drawer = !drawer" :icon="!drawer ? 'mdi-menu' : 'mdi-close'" size="35"></v-icon>
    <v-list style="text-align: right">
      <v-list-group justify="center">
        <template v-slot:activator="{ props }">
          <v-list-item density="compact" class="elevation-2 my-1" v-bind="props" :append-avatar="userStore.user.profile_image">
            <v-list-item-title>{{ userStore.user.username }}</v-list-item-title>
            <v-list-item-subtitle>{{ userStore.user.email }}</v-list-item-subtitle>
          </v-list-item>
        </template>
        <router-link exact-active-class="active-list-item" to="/admin/user">
          <v-list-item density="compact" class="elevation-2 my-1" append-icon="mdi-account-outline" title="البيانات الشخصية"> </v-list-item>
        </router-link>
        <div class="box-link">
          <div class="copy-link">
            <v-btn icon @click="copyLink(`${locationHostname()}/ar/${userStore.user.username}`)">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </div>
          <v-list-item
            density="compact"
            class="elevation-2 my-1"
            :href="`${locationOrigin()}/ar/${userStore.user.username}`"
            target="_blank"
            append-icon="mdi-web"
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
            density="compact"
            class="elevation-2 my-1"
            :href="`${locationOrigin()}/en/${userStore.user.username}`"
            target="_blank"
            append-icon="mdi-web"
            title="النسخة الانجليزية"
          >
          </v-list-item>
        </div>
      </v-list-group>

      <router-link
        cols="6"
        v-for="routerList in routerLists"
        :key="routerList"
        class="elevation-2 my-1"
        :to="routerList.path"
        exact-active-class="active-list-item"
      >
        <v-list-item density="compact" cols="6" class="elevation-2 my-1" :append-icon="routerList.meta.icon" :title="routerList.meta.title">
        </v-list-item>
      </router-link>
      <v-list-item density="compact" class="elevation-2 my-1" @click="logout" append-icon="mdi-logout" title="خروج"> </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-dialog v-model="dialogHelp" max-width="700">
    <v-card class="elevation-5 text-center card-size">
      <div class="card-content">
        <v-card-title justify="center" color="primary" variant="outlined" class="my-1 mx-1"> <span class="mdi mdi-help"></span> تلميح </v-card-title>
        <v-card-text class="mb-4">
          ابدا باضافة بياناتك
          <br />
          عن طريق الضغط على زر
          <v-icon color="info" size="35" icon="mdi-plus-outline"></v-icon>
          داخل كل قسم.
          <br />
          <br />
          باستخدام هذا الزر
          <v-icon color="info" size="35" icon="mdi-palette-outline"></v-icon>
          ، يمكنك التحكم في ترتيب الأقسام، وكذلك إظهارها أو إخفاءها حسب رغبتك.
          <br />
          بالإضافة إلى ذلك، يمكنك تخصيص أحجام وألوان النصوص والأزرار بسهولة.
        </v-card-text>
        <v-checkbox-btn
          style="width: fit-content"
          class="text-center ma-auto"
          color="info"
          v-model="checkboxHent"
          label=" لا تظهر التلميح مره اخري  "
        ></v-checkbox-btn>
        <v-divider class="my-3"></v-divider>
        <v-btn class="my-3" text="شكرا" @click="closeDialog"></v-btn>
      </div>
    </v-card>
  </v-dialog>
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
import { ref, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
const { smAndUp } = useDisplay();
const isLargeScreen = computed(() => smAndUp.value);
console.log('isLargeScreen', smAndUp.value);
const drawer = ref(smAndUp.value ? true : false);
const column = ref(null);
console.log('drawer', drawer.value);
const dialogHelp = ref(false);
const checkboxHent = ref(false);
function closeDialog() {
  if (checkboxHent.value) {
    localStorage.hentHome = checkboxHent.value;
  }
  dialogHelp.value = false;
}

onMounted(() => {
  dialogHelp.value = !localStorage.hentHome;
});
const userStore = useUserStore();
const defaultTheme = ref(localStorage.defaultTheme);
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

function toggleTheme() {
  if (defaultTheme.value === 'dark') {
    console.log('if', defaultTheme.value);

    theme.global.name.value = 'dark';
    localStorage.setItem('defaultTheme', 'dark');
  } else {
    console.log('else', defaultTheme.value);
    theme.global.name.value = 'light';
    localStorage.setItem('defaultTheme', 'light');
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
.menu-close {
  position: absolute;
  top: 0px;
  left: -35px;
}
.active-list-item .v-list-item {
  background-color: #e3f2fd;
  color: #e30a0a;
}
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
