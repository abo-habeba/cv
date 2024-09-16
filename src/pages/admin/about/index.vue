<template>
  <v-container>
    <ThemeSettings v-if="userStore.user" ref="dialogThemeForm" :detTheme="{ nameEn: 'about', nameAr: 'عني' }" @click="openDialogThemeForm" />
    <!-- <SkillsForm ref="itemForm" @runItems="getItems" /> -->
    <div style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h"></div>
    <p class="text-alert" v-else>لا توجد اي بيانات</p>
    <div>
      <v-text-field v-model="selectedContact" label="Selected Contact" readonly />
      <v-btn @click="pickContact"> اختر جهة اتصال </v-btn>
    </div>
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
onMounted(() => {});

//////////

const selectedContact = ref('');

async function pickContact() {
  try {
    const contacts = await navigator.contacts.select(['name', 'tel'], { multiple: false });
    if (contacts.length > 0) {
      selectedContact.value = `${contacts[0].name[0]} - ${contacts[0].tel[0]}`;
    }
  } catch (error) {
    console.error('حدث خطأ:', error);
  }
}
</script>

<style lang="scss"></style>
