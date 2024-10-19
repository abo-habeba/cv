<template>
  <v-container class="px-10">
    <Breadcrumbs />
    <v-row justify="end">
    </v-row>
    <v-card class="mx-auto mx-10 elevation-0 pa-2" max-width="700">
      <h1 v-if="userStore.user" class="text-center text-h4 ma-3">مرحبا {{ userStore.user.first_name.ar }}</h1>
      <v-row justify="center">
        <v-card class="ma-1" v-if="userStore.user">
          <div class="box-link">
            <div class="copy-link">
              <v-btn icon @click="copyLink(`${locationHostname()}/ar/${userStore.user.username}`)">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </div>
            <v-list-item
              class="ms-10"
              :href="`${locationOrigin()}/ar/${userStore.user.username}`"
              target="_blank"
              append-icon="mdi-web"
              :subtitle="`${locationHostname()}/ar/${userStore.user.username}`"
              title=" السيره الزاتية النسخة العربية  "
            >
            </v-list-item>
          </div>
        </v-card>
        <v-card class="ma-1" v-if="userStore.user">
          <div class="box-link">
            <div class="copy-link">
              <v-btn icon @click="copyLink(`${locationHostname()}/en/${userStore.user.username}`)">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </div>
            <v-list-item
              class="ms-7"
              :href="`${locationOrigin()}/en/${userStore.user.username}`"
              target="_blank"
              append-icon="mdi-web"
              :subtitle="`${locationHostname()}/en/${userStore.user.username}`"
              title="السيره الزاتية النسخة الانجليزية"
            >
            </v-list-item>
          </div>
        </v-card>
        <v-col cols="12">
          <router-link to="admin/user">
            <v-card class="elevation-5 text-center card-size">
              <div class="card-content">
                <v-card-title color="primary" variant="outlined" class="my-1 mx-1">البيانات الشخصية</v-card-title>
                <v-card-subtitle class="mb-4"> إدارة وتحرير بياناتك الشخصية </v-card-subtitle>
              </div>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="6" v-for="routerList in routerLists" :key="routerList">
          <router-link :to="routerList.path">
            <v-card class="elevation-5 text-center card-size">
              <div class="card-content">
                <v-card-title style="white-space: normal" color="primary" variant="outlined" class="my-1 mx-1">
                  {{ routerList.meta.title }}
                </v-card-title>
                <v-card-subtitle class="mb-4">{{ routerList.meta.description }}</v-card-subtitle>
              </div>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script setup>
definePage({
  meta: {
    title: ' لوحة تحكم ',
  },
});

import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
import { useRouter } from 'vue-router';
const router = useRouter();
const routerLists = ref(router.getRoutes().filter(route => route.meta && route.meta.show));

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



</script>
<style>
.card-size {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 6px;
}
</style>
