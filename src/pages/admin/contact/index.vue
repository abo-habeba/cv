<template>
  <v-container>
    <Breadcrumbs />
    <v-dialog class="text-center" v-model="openDialogRead" max-width="600" persistent>
      <v-card class="pa-5">
        <v-card-item class="pa-1">
          <v-card-title v-if="item.name.ar">{{ item.name.ar }}</v-card-title>
          <v-card-title v-if="item.name.en">{{ item.name.en }}</v-card-title>
          <v-card-subtitle v-if="item.subject.ar">{{ item.subject.ar }}</v-card-subtitle>
          <v-card-subtitle v-if="item.subject.en">{{ item.subject.en }}</v-card-subtitle>
          <a :href="'mailto:' + item.email">{{ item.email }}</a>
          <br />
          <a :href="'tel:' + item.phone">{{ item.phone }}</a>
        </v-card-item>
        <v-card-text class="pa-2" v-if="item.message.ar">{{ item.message.ar }}</v-card-text>
        <v-card-text class="pa-2" v-if="item.message.en">{{ item.message.en }}</v-card-text>
        <v-card-subtitle>{{ item.created_at }}</v-card-subtitle>
        <hr class="ma-2" />
        <v-btn class="ma-1" @click="openDialogRead = false"> موافق </v-btn>
      </v-card>
    </v-dialog>
    <v-dialog class="text-center" v-model="openDialogDeleted" max-width="400" persistent>
      <v-card class="pa-5">
        <h2 class="ma-5">هل تريد حذف العنصر بالفعل</h2>
        <v-btn class="ma-1" @click="deleted"> موافق </v-btn>
        <v-btn class="ma-1" @click="openDialogDeleted = false"> اغلاق </v-btn>
      </v-card>
    </v-dialog>
    <v-col col="12">
      <ThemeSettings v-if="userStore.user" ref="dialogThemeForm" :detTheme="{ nameEn: 'contacts', nameAr: 'الرسائل' }" @click="openDialogThemeForm" />
    </v-col>
    <v-col col="12">
      <v-btn @click="markAllAsUnread" :disabled="itemsUnread.length <= 0" :color="itemsUnread.length > 0 ? 'primary' : 'grey'">
        تعين الكل ك مقروء
      </v-btn>
    </v-col>
    <v-col>
      <v-btn class="ma-1" @click="showAll" :color="!showUnread ? 'grey' : 'primary'"> عرض الكل </v-btn>
      <v-btn class="ma-1" @click="showUnreadItems" :color="!showUnread ? 'primary' : 'grey'"> عرض الغير مقروء </v-btn>
    </v-col>
    <!-- <ContactForm ref="itemForm" @runItems="getItems" /> -->
    <v-table style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h mt-10">
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">الاسم</th>
          <th class="text-center">الموضوع</th>
          <th class="text-center">تاريخ الإنشاء</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="item.id"
          @click="updateItems(item)"
          :style="{ color: item.read === '0' ? '#2196F3' : '', cursor: 'pointer' }"
        >
          <td>{{ index + 1 }}</td>
          <td v-if="item.name.ar">{{ item.name.ar }}</td>
          <td v-if="item.name.en">{{ item.name.en }}</td>
          <td v-if="item.subject.ar">{{ item.subject.ar }}</td>
          <td v-if="item.subject.en">{{ item.subject.en }}</td>
          <td>{{ item.created_at }}</td>
          <td>
            <v-btn @click="deleteItem(item)" class="ml-3" icon="mdi-delete" color="red" size="small"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <p class="text-alert mt-10" v-if="!showUnread && items.length <= 0">لا توجد اي رسائل</p>
    <p class="text-alert mt-10" v-if="showUnread && items.length <= 0">لا توجد أي رسائل غير مقروءة</p>
  </v-container>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
import { toast } from 'vue3-toastify';
import { id } from 'vuetify/locale';
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
// const itemForm = ref(null);
const openDialogDeleted = ref(false);
const openDialogRead = ref(false);
const items = ref({});
const itemsAll = ref([]);
const itemsUnread = computed(() => {
  return itemsAll.value.filter(contact => contact.read === '0');
});
const item = ref('');
const showUnread = ref(true);
function deleteItem(i) {
  openDialogDeleted.value = true;
  item.value = i;
}
definePage({
  meta: {
    title: 'تواصل معنا',
    icon: 'mdi-message-reply-text-outline',
    description: 'هنا ستجد الرسائل الواردة من زوار الموقع لمتابعتها والتواصل معهم .',
  },
});

onMounted(() => {
  getItems();
});

function showAll() {
  showUnread.value = false;
  items.value = itemsAll.value;
}

function showUnreadItems() {
  showUnread.value = true;
  console.log(itemsUnread.value);

  items.value = itemsUnread.value;
}

function updateItems(i) {
  item.value = i;
  console.log(item.value);
  console.log(typeof i.read);

  if (i.read === '0') {
    console.log('run updateItems');
    axios
      .put(`contacts/${i.id}`, { read: '1' })
      .then(() => {
        itemsAll.value = itemsAll.value.map(item => {
          if (item.id === i.id) {
            return { ...item, read: '1' };
          }
          return item;
        });
        items.value = itemsUnread.value;
        userStore.user.unread_contacts_count -= 1;
        openDialogRead.value = true;
      })
      .catch(() => {
        notifyError('هناك خطا ما حاول مره اخري');
      });
    return;
  }
  openDialogRead.value = true;
}
function getItems() {
  userStore.loadengApi = true;
  axios
    .get(`contacts`, items.value)
    .then(res => {
      items.value = res.data.data;
      itemsAll.value = res.data.data;
      showUnreadItems();
      userStore.loadengApi = false;
      item.value = '';
    })
    .catch(() => {
      notifyError('هناك خطا ما حاول مره اخري');
    });
}
function markAllAsUnread() {
  userStore.loadengApi = true;
  axios
    .get(`contacts-mark-all-read`)
    .then(() => {
      userStore.user.unread_contacts_count = 0;
      getItems();
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
// const editItem = item => {
//   itemForm.value?.addNew(item);
// };
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
