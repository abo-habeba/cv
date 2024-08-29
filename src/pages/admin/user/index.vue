<template>
  <v-container v-if="!userStore.loadengApi">
    <UserForm ref="dialogItemForm" @click="openForm" />
    <v-card
      :title="userStore.user.first_name.en || 'N / D' + ' ' + userStore.user.first_name.ar || 'N / D'"
      :subtitle="userStore.user.email || 'N / D'"
      class="mt-10 t"
    >
      <v-card-subtitle>{{ userStore.user.phone }}</v-card-subtitle>
      <v-list>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.first_name.en || 'N / D'" title="First Name (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.first_name.ar || 'N / D'" title="الاسم الاول (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.last_name.en || 'N / D'" title="Last Name (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.last_name.ar || 'N / D'" title="الاسم الاخير (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.address.en || 'N / D'" title="Address (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.address.ar || 'N / D'" title="العنوان (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.bio.en || 'N / D'" title="Bio (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.bio.ar || 'N / D'" title="نبذه عنك (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.position.en || 'N / D'" title="Position (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.position.ar || 'N / D'" title="الوظيفة (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.username || 'N / D'" title="User Name"> </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user';
const dialogItemForm = ref(null);
const userStore = useUserStore();
definePage({
  meta: {
    title: 'انا',
    show: false,
  },
});

const openForm = () => {
  dialogItemForm.value.dialogForm();
};
// userStore.fetchUser().then(() => {
//   permissions.value = userStore.user.role;
//   userSelectd.value = userStore.user;
// });
// onMounted(() => {});
</script>

<style>
* {
  text-align: center;
}
.v-list-item-subtitle {
  padding: 10px !important;
  /* border-bottom: #8181e8 solid 2px !important; */
}
</style>
