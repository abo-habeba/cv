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
          :detTheme="{ nameEn: 'experiences', nameAr: 'الخبرات' }"
          @click="openDialogThemeForm"
        />
      </template>
      <template v-slot:prepend>
        <ExperienceForm ref="itemForm" @runItems="getItems" />
      </template>
    </v-card>

    <ShowImages ref="isShowImage" @runItems="getItems" />
    <v-table style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h">
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">العنوان</th>
          <th class="text-center">title</th>
          <th class="text-center">الشركة</th>
          <th class="text-center">Company</th>
          <th class="text-center">الوصف</th>
          <th class="text-center">Description</th>
          <th class="text-center">المسؤوليات</th>
          <th class="text-center">responsibilities</th>
          <th class="text-center">الإنجازات</th>
          <th class="text-center">achievements</th>
          <th class="text-center">نوع الوظيفه</th>
          <th class="text-center">employmenttype</th>
          <th class="text-center">المجال</th>
          <th class="text-center">industry</th>
          <th class="text-center">الموقع</th>
          <th class="text-center">location</th>
          <th class="text-center">تاريخ البدء</th>
          <th class="text-center">تاريخ الانتهاء</th>
          <th class="text-center">End Date</th>
          <th class="text-center">تاريخ الانشاء</th>
          <th class="text-center sticky-column">. . .</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.title.ar }}</td>
          <td>{{ item.title.en }}</td>
          <td>{{ item.company.ar }}</td>
          <td>{{ item.company.en }}</td>
          <td>{{ item.description.ar }}</td>
          <td>{{ item.description.en }}</td>
          <td>{{ item.responsibilities.ar }}</td>
          <td>{{ item.responsibilities.en }}</td>
          <td>{{ item.achievements.ar }}</td>
          <td>{{ item.achievements.en }}</td>
          <td>{{ item.employment_type.ar }}</td>
          <td>{{ item.employment_type.en }}</td>
          <td>{{ item.industry.ar }}</td>
          <td>{{ item.industry.en }}</td>
          <td>{{ item.location.ar }}</td>
          <td>{{ item.location.en }}</td>
          <td>{{ item.start_date }}</td>
          <td>{{ item.end_date.ar == '1' ? 'حتي الان' : item.end_date.ar }}</td>
          <td>{{ item.end_date.en == '1' ? 'so far' : item.end_date.en }}</td>
          <td>{{ item.created_at }}</td>
          <td class="sticky-column">
            <v-btn @click="showImage(item.photos)" icon="mdi-image-edit-outline" color="info" size="small"></v-btn>
            <v-btn @click="deleteItem(item)" class="mx-3" icon="mdi-delete" color="red" size="small"></v-btn>
            <v-btn @click="editItem(item)" icon="mdi-square-edit-outline" color="info" size="small"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <p class="text-alert" v-if="!items.length">لا توجد اي بيانات</p>
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
const itemForm = ref(null);
const items = ref([]);
const item = ref('');
definePage({
  meta: {
    title: 'الخبرات',
    description: 'إدارة وتحرير بيانات الخبرات العملية.',
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
  fetchItems('experiences').then(res => {
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
  deleteItems(`experiences/delete`, { id: [item.value.id] }).then(() => {
    getItems();
    openDialogDeleted.value = false;
  });
}
const editItem = item => {
  itemForm.value?.addNew(item);
};
</script>

<style lang="scss">
.close-button {
  position: fixed;
  bottom: 20px;
}

.v-btn {
  background-color: white;
  color: black;
}
</style>
