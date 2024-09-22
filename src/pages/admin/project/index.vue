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

    <v-card max-width="500px" class="text-center my-5 mx-auto" :subtitle="route.meta.description" :title="route.meta.title">
      <template v-slot:append>
        <ThemeSettings
          v-if="userStore.user"
          ref="dialogThemeForm"
          :detTheme="{ nameEn: 'projects', nameAr: 'المشاريع' }"
          @click="openDialogThemeForm"
        />
      </template>
      <template v-slot:prepend>
        <ProjectForm ref="itemForm" @runItems="getItems" />
      </template>
    </v-card>

    <ShowImages ref="isShowImage" @runItems="getItems" />
    <v-table style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h">
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">العنوان</th>
          <th class="text-center">title</th>
          <th class="text-center">الوصف</th>
          <th class="text-center">description</th>
          <th class="text-center">URL</th>
          <th class="text-center">تاريخ الانشاء</th>
          <th class="text-center sticky-column">. . .</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.title.ar }}</td>
          <td>{{ item.title.en }}</td>
          <td>{{ item.description.ar }}</td>
          <td>{{ item.description.en }}</td>
          <td>{{ item.url }}</td>
          <td>{{ item.created_at }}</td>
          <td class="sticky-column">
            <v-btn @click="showImage(item.photos)" icon="mdi-image-edit-outline" color="info" size="small"></v-btn>
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
import { useRoute } from 'vue-router';
const route = useRoute();
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { deleteItems, fetchItems } from '@/Service/apiService';
const userStore = useUserStore();
const openDialogDeleted = ref(false);
const items = ref([]);
const item = ref('');

definePage({
  meta: {
    title: 'الاعمال',
    description: 'إدارة وتحرير بيانات الاعمال السابقة.',
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

const isShowImage = ref(null);
const showImage = photos => {
  isShowImage.value.opaenDialog(photos);
};

function getItems() {
  userStore.loadengApi = true;
  fetchItems('projects').then(res => {
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
  deleteItems(`projects/delete`, { id: [item.value.id] }).then(() => {
    getItems();
    openDialogDeleted.value = false;
  });
}
const itemForm = ref(null);

const editItem = item => {
  itemForm.value?.addNew(item);
};
</script>

<style lang="scss"></style>
