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
      :detTheme="{ nameEn: 'academics', nameAr: 'التعليم', imag: true }"
      @click="openDialogThemeForm"
    />
    <ShowImages ref="isShowImage" @runItems="getItems" />
    <AcademicsForm ref="itemForm" @runItems="getItems" />
    <v-table style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h">
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">المؤسسة التعليمية</th>
          <th class="text-center">institution</th>
          <th class="text-center">الدرجة العلمية</th>
          <th class="text-center">degree</th>
          <th class="text-center">التقدير</th>
          <th class="text-center">Score</th>
          <th class="text-center">مجال الدراسة</th>
          <th class="text-center">field of study</th>
          <th class="text-center">تاريخ البدء</th>
          <th class="text-center">تاريخ الانتهاء</th>
          <th class="text-center">الوصف</th>
          <th class="text-center">description</th>
          <th class="text-center">تاريخ الانشاء</th>
          <th class="text-center sticky-column">...</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.institution.ar }}</td>
          <td>{{ item.institution.en }}</td>
          <td>{{ item.degree.ar }}</td>
          <td>{{ item.degree.en }}</td>
          <td>{{ item.grade.ar }}</td>
          <td>{{ item.grade.en }}</td>
          <td>{{ item.field_of_study.ar }}</td>
          <td>{{ item.field_of_study.en }}</td>
          <td>{{ item.start_date }}</td>
          <td>{{ item.end_date }}</td>
          <td>{{ item.description.ar }}</td>
          <td>{{ item.description.en }}</td>
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
const userStore = useUserStore();
import { deleteItems, fetchItems } from '@/Service/apiService';
const itemForm = ref(null);
const openDialogDeleted = ref(false);
const items = ref([]);
const item = ref('');
const isShowImage = ref(null);
definePage({
  meta: {
    title: 'التعليم',
    description: 'إدارة وتحرير بيانات التعليم الأكاديمي.',
  },
});
onMounted(() => {
  getItems();
});

const dialogThemeForm = ref(null);
function openDialogThemeForm() {
  if (dialogThemeForm.value) {
    dialogThemeForm.value.opendialogThemeForm();
  } else {
    console.error('opendialogThemeForm is not a function');
  }
}

const showImage = photos => {
  isShowImage.value.opaenDialog(photos);
};

function deleteItem(i) {
  openDialogDeleted.value = true;
  item.value = i;
}
function getItems() {
  userStore.loadengApi = true;
  fetchItems(`academics`).then(res => {
    items.value = res.data;
    item.value = '';
  });
}

function deleted() {
  userStore.loadengApi = true;
  deleteItems(`academics/delete`, {
    id: [item.value.id],
  }).then(() => {
    getItems();
    openDialogDeleted.value = false;
  });
}
const editItem = item => {
  itemForm.value?.addNew(item);
};
</script>

<style lang="scss">
.text-alert {
  margin: 10px;
  padding: 5px;
  color: red;
  text-align: center;
  font-size: 20px;
  border-radius: 7px;
  background-color: rgb(116 141 128 / 43%);
}

.imag-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
