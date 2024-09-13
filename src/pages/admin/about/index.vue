<template>
  <v-container>
    <ThemeSettings v-if="userStore.user" ref="dialogThemeForm" nameSection="about" @click="openDialogThemeForm" />
    <!-- <SkillsForm ref="itemForm" @runItems="getItems" /> -->
    <div style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h"></div>
    <p class="text-alert" v-else>لا توجد اي بيانات</p>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { deleteItems, fetchItems } from '@/Service/apiService';
const userStore = useUserStore();

// const itemForm = ref(null);
// const openDialogDeleted = ref(false);
const items = ref([]);
// const item = ref('');

definePage({
  meta: {
    title: 'عني',
    show: false,
  },
});
const dialogThemeForm = ref(null);
function openDialogThemeForm() {
  if (dialogThemeForm.value) {
    dialogThemeForm.value.opendialogThemeForm();
  } else {
    console.error('opendialogThemeForm is not a function');
  }
}
onMounted(() => {
  // getItems();
});

// function getItems() {
//   userStore.loadengApi = true;
//   fetchItems('skills').then(res => {
//     items.value = res.data;
//     item.value = '';
//   });
// }
</script>

<style lang="scss"></style>
