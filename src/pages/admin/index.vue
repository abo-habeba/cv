<template>
  <v-container>
    <v-dialog v-model="dialogHelp">
      <v-card class="elevation-10 text-center card-size">
        <div class="card-content">
          <v-card-title justify="center" color="primary" variant="outlined" class="my-1 mx-1">
            <span class="mdi mdi-lifebuoy"></span> تلميح
          </v-card-title>
          <v-card-text class="mb-4">
            ابدا باضافة بياناتك <br />
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
    <Breadcrumbs />
    <v-row justify="end">
      <h5 class="mx-2" style="cursor: pointer" @click="dialogHelp = true"><v-icon size="20" class="mdi mdi-lifebuoy"></v-icon> تلميح</h5>
    </v-row>
    <h1 v-if="userStore.user" class="text-center text-h4 ma-3">مرحبا {{ userStore.user.first_name.ar }}</h1>
    <v-row justify="center">
      <v-col cols="12">
        <router-link to="admin/user">
          <v-card class="elevation-10 text-center card-size">
            <div class="card-content">
              <v-card-title color="primary" variant="outlined" class="my-1 mx-1">البيانات الشخصية</v-card-title>
              <v-card-subtitle class="mb-4"> إدارة وتحرير بياناتك الشخصية </v-card-subtitle>
            </div>
          </v-card>
        </router-link>
      </v-col>
      <v-col cols="6" v-for="routerList in routerLists" :key="routerList">
        <router-link :to="routerList.path">
          <v-card class="elevation-10 text-center card-size">
            <div class="card-content">
              <v-card-title color="primary" variant="outlined" class="my-1 mx-1">
                {{ routerList.meta.title }}
              </v-card-title>
              <v-card-subtitle class="mb-4">{{ routerList.meta.description }}</v-card-subtitle>
            </div>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
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
