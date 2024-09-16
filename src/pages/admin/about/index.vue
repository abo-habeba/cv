<template>
  <ThemeSettings v-if="userStore.user" ref="dialogThemeForm" :detTheme="{ nameEn: 'about', nameAr: 'عني' }" @click="openDialogThemeForm" />
  <!-- <SkillsForm ref="itemForm" @runItems="getItems" /> -->
  <div style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h"></div>
  <p class="text-alert" v-else>لا توجد اي بيانات</p>
  <div>
    <v-text-field type="number" v-model="selectedContactTel" :label="selectedContactNam ? selectedContactNam : 'ادخل رقم'" readonly />
    <v-btn v-if="isContact" @click="pickContact"> اختر جهة اتصال </v-btn>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { deleteItems, fetchItems } from '@/Service/apiService';
const userStore = useUserStore();
// const itemForm = ref(null);
// const openDialogDeleted = ref(false);
const items = ref([]);
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
const isContact = ref(null);
onMounted(() => {
  if (navigator.contacts) {
    isContact.value = true;
  }
  console.log('navigator', navigator);
  console.log('navigator.contacts', navigator.contacts);
});

//////////

const selectedContactTel = ref('');
const selectedContactNam = ref('');

async function pickContact() {
  try {
    const contacts = await navigator.contacts.select(['name', 'tel'], { multiple: false });
    if (contacts.length > 0) {
      selectedContactTel.value = contacts[0].tel[0];
      selectedContactNam.value = contacts[0].name[0];
    }
  } catch (error) {
    console.error('حدث خطأ:', error);
  }
}
</script>

<style lang="scss"></style>
