<template>
  <ThemeSettings v-if="userStore.user" ref="dialogThemeForm" :detTheme="{ nameEn: 'about', nameAr: 'عني' }" @click="openDialogThemeForm" />
  <!-- <SkillsForm ref="itemForm" @runItems="getItems" /> -->
  <div style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h"></div>
  <p class="text-alert" v-else>لا توجد اي بيانات</p>
  <div>
    <v-text-field
      append-icon="mdi-close"
      prepend-icon="mdi-phone"
      @click:append="pickContactcClear"
      @click:prepend="pickContact"
      type="number"
      v-model="selectedContactTel"
      :label="selectedContactNam ? selectedContactNam : 'ادخل رقم'"
      readonly
    />
    <v-btn v-if="isContact" @click="pickContact"> اختر جهة اتصال </v-btn>
    <v-select
      v-if="contactNumbers.length > 0"
      v-model="selectedContactTel"
      :items="contactNumbers"
      item-text="number"
      item-value="number"
      :label="'اختر رقم الهاتف'"
      @change="onNumberSelect"
    />
  </div>

  <v-dialog class="text-center" v-model="dialogNumberAll" max-width="900" persistent>
    <p>{{ contactNumbers }}</p>
    <v-card>
      <div v-for="(contactNumber, index) in contactNumbers" :key="index" class="ma-1 pa-3">
        <p @click="setNumber(contactNumber)">{{ contactNumber }} contactNumber</p>
        <p>{{ contactNumber }} contactNumber.number</p>
      </div>
    </v-card>
  </v-dialog>
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

const dialogNumberAll = ref(false);
const selectedContactTel = ref('');
const selectedContactNam = ref('');
const contactNumbers = ref([]);

async function pickContact() {
  try {
    const contacts = await navigator.contacts.select(['name', 'tel'], { multiple: false });

    if (contacts.length > 0) {
      selectedContactNam.value = contacts[0].name[0];

      // عرض أرقام الهاتف في contactNumbers
      contactNumbers.value = contacts[0].tel
        .map(tel => {
          let cleanedNumber = tel.replace(/\D/g, '');
          const index = cleanedNumber.indexOf('01');
          if (index !== -1) {
            cleanedNumber.substring(index);
          }
          null;
        })
        .filter(num => num !== null); // إزالة القيم الفارغة
    }
  } catch (error) {
    alert('المتصفح لا يدعم فتح الاسماء');
    console.error('حدث خطأ:', error);
  }
  dialogNumberAll.value = true;
}

function pickContactcClear() {
  selectedContactTel.value = '';
  selectedContactNam.value = '';
  contactNumbers.value = [];
}
// دالة للتعامل مع اختيار الرقم
function setNumber(contactNumber) {
  selectedContactTel.value = contactNumber;
  dialogNumberAll.value = fals;
}
function onNumberSelect() {}
</script>

<style lang="scss"></style>
