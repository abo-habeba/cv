<template>
  <v-container>
    <v-dialog class="text-center" v-model="openDialogDeleted" max-width="400" persistent>
      <v-card class="pa-5">
        <h2 class="ma-5">هل تريد حذف العنصر بالفعل</h2>
        <v-btn class="ma-1" @click="deleted"> موافق </v-btn>
        <v-btn class="ma-1" @click="openDialogDeleted = false"> اغلاق </v-btn>
      </v-card>
    </v-dialog>

    <ThemeSettings
      v-if="userStore.user"
      ref="dialogThemeForm"
      :detTheme="{ nameEn: 'skills', nameAr: 'المهارات', h2: true, h4: true, imag: true, progress: true }"
      @click="openDialogThemeForm"
    />
    <SkillsForm ref="itemForm" @runItems="getItems" />

    <ShowImages ref="isShowImage" @runItems="getItems" />
    <v-table style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h">
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">الاسم</th>
          <th class="text-center">name</th>
          <th class="text-center">الوصف</th>
          <th class="text-center">description</th>
          <th class="text-center">المستوي</th>
          <th class="text-center">تاريخ الانشا</th>
          <th class="text-center sticky-column">. . .</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ item.name.ar }}</td>
          <td>{{ item.name.en }}</td>
          <td>{{ item.description.ar }}</td>
          <td>{{ item.description.en }}</td>
          <td>{{ item.level }}</td>
          <td>{{ item.created_at }}</td>
          <td class="sticky-column">
            <v-btn @click="showImage(item.photos)" icon="mdi-image-edit-outline" color="info" size="small"></v-btn>
            <v-btn @click="deleteItem(item)" class="mx-3" icon="mdi-delete" color="red" size="small"></v-btn>
            <v-btn @click="editItem(item)" icon="mdi-pencil" color="info" size="small"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <p class="text-alert" v-else>لا توجد اي بيانات</p>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { deleteItems, fetchItems } from '@/Service/apiService';
const userStore = useUserStore();

const itemForm = ref(null);
const openDialogDeleted = ref(false);
const items = ref([]);
const item = ref('');

definePage({
  meta: {
    title: 'المهارات',
    description: 'إدارة وتحرير بيانات المهارات المكتسبة.',
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
const isShowImage = ref(null);
const showImage = photos => {
  isShowImage.value.opaenDialog(photos);
};

onMounted(() => {
  getItems();
});

function getItems() {
  userStore.loadengApi = true;
  fetchItems('skills').then(res => {
    items.value = res.data;
    item.value = '';
  });
}
function deleteItem(i) {
  openDialogDeleted.value = true;
  item.value = i;
}
function deleted() {
  userStore.loadengApi = true;
  deleteItems(`skills/delete`, { id: [item.value.id] }).then(() => {
    getItems();
    openDialogDeleted.value = false;
  });
}

const editItem = item => {
  itemForm.value?.addNew(item);
};
</script>

<style lang="scss"></style>
