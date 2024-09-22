<template>
  <v-container>
    <Breadcrumbs />
    <v-dialog class="text-center" v-model="openDialogDeleted" max-width="400" persistent>
      <v-card class="pa-5">
        <h2 class="ma-5">هل تريد حذف العنصر بالفعل</h2>
        <v-btn class="ma-1" @click="deleted"> موافق </v-btn>
        <v-btn class="ma-1" @click="openDialogDeleted = false"> اغلاق </v-btn>
      </v-card>
    </v-dialog>
    <ThemeSettings v-if="userStore.user" ref="dialogThemeForm" :detTheme="{ nameEn: 'languages', nameAr: 'اللغات' }" @click="openDialogThemeForm" />
    <LanguageForm ref="itemForm" @runItems="getItems" />
    <v-table style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h">
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">الاسم</th>
          <th class="text-center">name</th>
          <th class="text-center">المستوي</th>
          <th class="text-center">level</th>
          <th class="text-center">تاريخ الانشاء</th>
          <th class="text-center sticky-column">. . .</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name.ar }}</td>
          <td>{{ item.name.en }}</td>
          <td>{{ item.level.ar }}</td>
          <td>{{ item.level.en }}</td>
          <td>{{ item.created_at }}</td>
          <td class="sticky-column">
            <v-btn @click="deleteItem(item)" class="mx-3" icon="mdi-delete" color="red" size="small"></v-btn>
            <v-btn @click="editItem(item)" icon="mdi-square-edit-outline" color="info" size="small"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <p class="text-alert" v-else>لا توجد اي بيانات</p>
  </v-container>
</template>

<script setup>
import axios from 'axios';
import { deleteItems, fetchItems } from '@/Service/apiService';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
import { toast } from 'vue3-toastify';
const notifySuccess = message => {
  toast.success(message, {
    theme: 'colored',
    position: toast.POSITION.TOP_LEFT,
  });
};
const notifyError = message => {
  toast.error(message, {
    theme: 'colored',
    position: toast.POSITION.TOP_LEFT,
  });
};
const itemForm = ref(null);
const openDialogDeleted = ref(false);
const items = ref([]);
const item = ref('');
function deleteItem(i) {
  openDialogDeleted.value = true;
  item.value = i;
}
definePage({
  meta: {
    title: 'اللغات',
    description: 'إدارة وتحرير بيانات اللغات المكتسبة.',
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
  getItems();
});

function getItems() {
  userStore.loadengApi = true;
  fetchItems('languages').then(res => {
    items.value = res.data;
    item.value = '';
  });
}

function deleted() {
  userStore.loadengApi = true;
  deleteItems(`languages/delete`, { id: [item.value.id] }).then(() => {
    getItems();
    openDialogDeleted.value = false;
  });
}
const editItem = item => {
  itemForm.value?.addNew(item);
};
</script>

<style lang="scss"></style>
