<template>
  <v-container>
    <v-dialog class="text-center" v-model="openDialogDeleted" max-width="400" persistent>
      <v-card class="pa-5">
        <h2 class="ma-5">هل تريد حذف العنصر بالفعل</h2>
        <v-btn class="ma-1" @click="deleted"> موافق </v-btn>
        <v-btn class="ma-1" @click="openDialogDeleted = false"> اغلاق </v-btn>
      </v-card>
    </v-dialog>
    <ThemeSettings v-if="userStore.user" ref="dialogThemeForm" :detTheme="{ nameEn: 'contacts', nameAr: 'الرسائل' }" @click="openDialogThemeForm" />
    <!-- <ContactForm ref="itemForm" @runItems="getItems" /> -->
    <v-table style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h mt-10">
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">الاسم</th>
          <th class="text-center">Name</th>
          <th class="text-center">البريد الإلكتروني</th>
          <th class="text-center">الهاتف</th>
          <th class="text-center">الرسالة</th>
          <th class="text-center">Message</th>
          <th class="text-center">الموضوع</th>
          <th class="text-center">Subject</th>
          <th class="text-center">تاريخ الإنشاء</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name.ar }}</td>
          <td>{{ item.name.en }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.message.ar }}</td>
          <td>{{ item.message.en }}</td>
          <td>{{ item.subject.ar }}</td>
          <td>{{ item.subject.en }}</td>
          <td>{{ item.created_at }}</td>
          <td>
            <v-btn @click="deleteItem(item)" class="ml-3" icon="mdi-delete" color="red" size="small"></v-btn>
            <v-btn @click="editItem(item)" icon="mdi-pencil" color="info" size="small"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <p class="text-alert mt-10" v-else>لا توجد اي بيانات</p>
  </v-container>
</template>

<script setup>
import axios from 'axios';
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
    title: 'تواصل معنا',
    description: 'هنا ستجد الرسائل الواردة من زوار الموقع لمتابعتها والتواصل معهم .',
  },
});

onMounted(() => {
  getItems();
});

function getItems() {
  userStore.loadengApi = true;
  axios
    .get(`contacts`, items.value)
    .then(res => {
      items.value = res.data.data;
      userStore.loadengApi = false;
      item.value = '';
    })
    .catch(() => {
      notifyError('هناك خطا ما حاول مره اخري');
    });
}
const dialogThemeForm = ref(null);
function openDialogThemeForm() {
  if (dialogThemeForm.value) {
    dialogThemeForm.value.opendialogThemeForm();
  } else {
    console.error('opendialogThemeForm is not a function');
  }
}
function deleted() {
  userStore.loadengApi = true;
  axios
    .post(`contacts/delete`, { id: [item.value.id] })
    .then(() => {
      getItems();
      openDialogDeleted.value = false;
      userStore.loadengApi = false;
      notifySuccess(` تم الحذف`);
    })
    .catch(error => {
      notifyError(error.response.data.message);
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
