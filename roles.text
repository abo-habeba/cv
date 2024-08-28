<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const router = useRouter();
const permissions = ref([]);
const userSelectd = ref([]);
const users = ref([]);
userStore.fetchUser().then(() => {
  permissions.value = userStore.user.role;
  userSelectd.value = userStore.user;
});
onMounted(() => {
  userStore.loadengApi = true;
  axios
    .get(`users`)
    .then(res => {
      users.value = res.data.data;
      userStore.loadengApi = false;
    })
    .catch(() => {
      notifyError('هناك خطا ما حاول مره اخري');
    });
});

function getUser(id) {
  userSelectd.value = users.value.find(user => user.id === id);
  permissions.value = userSelectd.value.role;
}
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
definePage({
  meta: {
    title: 'الصلاحيات',
  },
});
function save() {
  userStore.loadengApi = true;
  userSelectd.value.role = JSON.stringify(permissions.value);
  userSelectd.value.address = JSON.stringify(userSelectd.value.address);
  userSelectd.value.bio = JSON.stringify(userSelectd.value.bio);
  userSelectd.value.first_name = JSON.stringify(userSelectd.value.first_name);
  userSelectd.value.last_name = JSON.stringify(userSelectd.value.last_name);
  userSelectd.value.position = JSON.stringify(userSelectd.value.position);

  axios
    .put(`users/${userSelectd.value.id}`, userSelectd.value)
    .then(res => {
      if (userStore.user.id == userSelectd.value.id) {
        localStorage.setItem('user', JSON.stringify(res.data.data));
      }
      userStore.loadengApi = false;
      notifySuccess('تم تعيين الصلاحيات بنجاح');
    })
    .catch(error => {
      userStore.loadengApi = false;
      notifyError('هناك خطا ما حاول مره اخري');
    });
}
//get all routes contain roles array
const routes = computed(() => router.getRoutes().filter(r => r.meta.roles));
const olldPermissions = ref({});

function setRouteRole(routeName) {
  if (!permissions.value.includes(routeName)) {
    olldPermissions.value[routeName] = permissions.value.filter(permission => permission.includes(routeName));
    permissions.value = permissions.value.filter(permission => !permission.includes(routeName));
  } else {
    if (olldPermissions.value[routeName]) {
      permissions.value = permissions.value.concat(olldPermissions.value[routeName]);
      delete olldPermissions.value[routeName];
    }
  }
}
</script>

<template>
  <v-container dir="rtl" class="">
    <h1 class="ma-5">roles</h1>
    <!-- more advanced feature -->
    <v-row>
      <v-col cols="12">
        <v-card class="pt-5 px-5">
          <v-select
            label="اختر مستخدم"
            variant="outlined"
            :items="users"
            item-title="username"
            item-value="id"
            v-model="userSelectd"
            @update:modelValue="getUser(userSelectd)"
          ></v-select>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" v-for="(route, i) in routes" :key="i">
        <v-card class="">
          <template #prepend>
            <v-checkbox @change="setRouteRole(route.name)" :value="route.name" v-model="permissions" :label="route.name"></v-checkbox>
          </template>

          <div class="px-10 py-0 my-0 d-flex flex-wrap" v-if="permissions.includes(route.name)">
            <v-checkbox
              v-for="role in route.meta.roles"
              :key="role"
              :value="route.name + '.' + role"
              v-model="permissions"
              :label="role"
            ></v-checkbox>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="ma-5" @click="save" icon="mdi-content-save-outline" color="success" size="small"></v-btn>
  </v-container>
</template>
<style scoped>
.v-input__details {
  display: none !important;
}
</style>
