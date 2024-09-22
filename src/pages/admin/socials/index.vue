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
        <v-icon @click="dialogEnabledSocials = true" color="info" size="35" icon="mdi-pencil-outline"></v-icon>
      </template>
      <template v-slot:prepend>
        <SocialForm ref="itemForm" @runItems="getItems" />
      </template>
    </v-card>

    <v-dialog class="text-center" v-model="dialogEnabledSocials" max-width="900">
      <v-card cols="12" class="elevation-10">
        <h2 class="sticky-header pa-4">تفعيل مواقع التواصل في الاقسام</h2>
        <v-col>
          <v-switch
            style="width: fit-content"
            class="ma-auto"
            color="info"
            v-model="socialsTheme.hero.enabled"
            label="تفعيل في الصفحة الرئيسية"
          ></v-switch>
          <hr />
        </v-col>
        <v-col>
          <v-switch
            style="width: fit-content"
            class="ma-auto"
            color="info"
            v-model="socialsTheme.aside.enabled"
            label="تفعيل في القائمة الجانبية"
          ></v-switch>
          <hr />
        </v-col>
        <v-col>
          <v-switch style="width: fit-content" class="ma-auto" color="info" v-model="socialsTheme.about.enabled" label="تفعيل في صفحة عني"></v-switch>
          <hr />
        </v-col>
        <div style="position: sticky; bottom: 0px; z-index: 100; width: 100%; max-width: 600px; margin: auto; border-radius: 7px">
          <v-btn style="color: white; background-color: red; font-weight: bold" class="ma-4" @click="closeDialogSocial">اغلاق</v-btn>
          <v-btn style="color: white; background-color: blue; font-weight: bold" class="ma-4" @click="save">موافق</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-table style="white-space: nowrap" dir="rtl" v-if="items.length > 0" class="h">
      <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">الاسم</th>
          <th class="text-center">name</th>
          <th class="text-center">URL</th>
          <th class="text-center">تاريخ الانشاء</th>
          <th class="text-center sticky-column">. . .</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name.ar }}</td>
          <td>{{ item.name.en }}</td>
          <td>{{ item.url }}</td>
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
import { useRoute } from 'vue-router';
const route = useRoute();
import { saveItems } from '@/Service/apiService';
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
const dialogEnabledSocials = ref(false);
const socialsTheme = ref({
  hero: { enabled: true },
  aside: { enabled: true },
  about: { enabled: true },
});
const items = ref([]);
const item = ref('');
function deepMerge(target, source) {
  const output = { ...target };
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        output[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        output[key] = source[key];
      }
    }
  }
  return output;
}
function deleteItem(i) {
  openDialogDeleted.value = true;
  item.value = i;
}
definePage({
  meta: {
    title: 'منصات التواصل',
    description: 'إدارة وتحرير بيانات روابط منصات التواصل الاجتماعي.',
  },
});

onMounted(() => {
  getItems();
});

watch(
  () => userStore.user,
  socialsThemeValue => {
    if (socialsThemeValue.theme.socials) {
      socialsTheme.value = deepMerge(socialsTheme.value, socialsThemeValue.theme.socials);
    } else {
      socialsTheme.value = {
        hero: { enabled: true },
        aside: { enabled: true },
        about: { enabled: true },
      };
    }
  },
  { immediate: false, deep: false } // لا يتم التنفيذ مباشرة بعد التركيب فقط على أول تغيير
);

function getItems() {
  userStore.loadengApi = true;
  axios
    .get(`socials`, items.value)
    .then(res => {
      items.value = res.data.data;
      userStore.loadengApi = false;
      item.value = '';
    })
    .catch(() => {
      notifyError('هناك خطا ما حاول مره اخري');
    });
}

function save() {
  userStore.user.theme.socials = { ...socialsTheme.value };

  // userStore.user.theme._method = 'put';
  console.log('userStore.user.theme', userStore.user.theme);
  saveItems('users-theme', { theme: userStore.user.theme, _method: 'put' }, userStore.user.id).then(res => {
    // userStore.user = res.data;
    console.log('res.data', res.data);

    closeDialogSocial();
  });
}
function closeDialogSocial() {
  dialogEnabledSocials.value = false;
}
function deleted() {
  userStore.loadengApi = true;
  axios
    .post(`socials/delete`, { id: [item.value.id] })
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
