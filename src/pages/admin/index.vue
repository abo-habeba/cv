<template>
  <v-container>
    <h1 v-if="userStore.user" class="text-center ma-3">مرحبا {{ userStore.user.first_name.ar }}</h1>
    <v-alert type="info" class="ma-4 pa-5 h1 font-weight-bold text-center" color="#81D4FA">
      عند دخولك إلى أي قسم، يمكنك بسهولة التحكم في تنسيقه، وتفعيل أو إلغاء تفعيله، فضلاً عن تعديل تفاصيل كل جزء داخله.
      <br />
      <br />
      بعد الانتهاء من ملء البيانات، يمكنك رؤية سيرتك الذاتية من خلال الضغط على زر القائمة في أعلى يسار الشاشة، حيث ستظهر لديك رابطين: واحدة باللغة
      العربية وأخرى باللغة الإنجليزية، مما يتيح لك مشاركتهما بسهولة مع الآخرين.
    </v-alert>

    <v-row>
      <v-col cols="6" v-for="routerList in routerLists" :key="routerList">
        <router-link :to="routerList.path">
          <v-card class="elevation-10 text-center card-size">
            <div class="card-content">
              <h2 color="primary" variant="outlined" class="my-1 mx-1">
                {{ routerList.meta.title }}
              </h2>
              <p>{{ routerList.meta.description }}</p>
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
    title: ' لوحة تحكم الادمن ',
  },
});
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
import { useRouter } from 'vue-router';
const router = useRouter();
console.log(router.getRoutes());
const routerLists = ref(router.getRoutes().filter(route => route.meta && route.meta.show));
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
