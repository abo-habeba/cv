<template>
  <v-container class="user-info" v-if="!userStore.loadengApi">
    <Breadcrumbs />
    <v-row>
      <v-col cols="12">
        <v-card max-width="500px" class="text-center mx-auto" subtitle="تعديل تنسيقات قسم الرئيسية " title="الرئيسية">
          <template v-slot:append>
            <ThemeSettings
              v-if="userStore.user"
              ref="dialogThemeFormHero"
              :detTheme="{ nameEn: 'hero', nameAr: 'الرئيسية', hero: true }"
              @click="openDialogThemeFormHero"
            />
          </template>
          <template v-slot:prepend>
            <div>
              <HeroForm ref="dialogHeroForm" @click="openFormHero" />
              <p>الصور</p>
            </div>
          </template>
        </v-card>
      </v-col>
      <v-col>
        <v-card max-width="500px" class="text-center mx-auto" subtitle="تعديل قسم البيانات الشخصية " title="البيانات الشخصية">
          <template v-slot:append>
            <ThemeSettings
              v-if="userStore.user"
              ref="dialogThemeFormAbout"
              :detTheme="{ nameEn: 'about', nameAr: 'من نحن', about: true }"
              @click="openDialogThemeFormAbout"
            />
          </template>
          <template v-slot:prepend>
            <div>
              <UserForm ref="dialogItemForm" @click="openForm" />
              <p>تعديل البيانات</p>
            </div>
          </template>
        </v-card>
      </v-col>
    </v-row>

    <!-- <ThemeSettings
      v-if="userStore.user"
      ref="dialogThemeFormAbout"
      :detTheme="{ nameEn: 'about', nameAr: 'عني', h2: true, h4: true, p: true, btn: true }"
      @click="openDialogThemeFormAbout"
    /> -->

    <!-- <v-card
      :title="(userStore.user.first_name.en || 'N D') + ' - ' + (userStore.user.first_name.ar || 'N D')"
      :subtitle="userStore.user.email || 'N D'"
      class="mt-1"
    >
      <v-card-subtitle>{{ userStore.user.phone }}</v-card-subtitle>
      <v-list>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.first_name.en || 'N D'" title="First Name (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.first_name.ar || 'N D'" title="الاسم الاول (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.last_name.en || 'N D'" title="Last Name (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.last_name.ar || 'N D'" title="الاسم الاخير (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.address.en || 'N D'" title="Address (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.address.ar || 'N D'" title="العنوان (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.bio_en || 'N D'" title="Bio (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.bio_ar || 'N D'" title="نبذه عنك (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.about_en || 'N D'" title="About Me (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.about_ar || 'N D'" title=" عني (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.position.en || 'N D'" title="Position (EN)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.position.ar || 'N D'" title="الوظيفة (AR)"> </v-list-item>
        <v-list-item class="ma-2 pa-2" :subtitle="userStore.user.username || 'N D'" title="User Name"> </v-list-item>
      </v-list>
    </v-card> -->
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import HeroForm from '@/components/HeroForm.vue';
const dialogItemForm = ref(null);
const dialogHeroForm = ref(null);
const userStore = useUserStore();
definePage({
  meta: {
    title: 'انا',
    show: false,
  },
});

const dialogThemeFormAbout = ref(null);
function openDialogThemeFormAbout() {
  if (dialogThemeFormAbout.value) {
    dialogThemeFormAbout.value.opendialogThemeForm();
  } else {
    console.error('opendialogThemeForm is not a function');
  }
}
const dialogThemeFormHero = ref(null);
function openDialogThemeFormHero() {
  if (dialogThemeFormHero.value) {
    dialogThemeFormHero.value.opendialogThemeForm();
  } else {
    console.error('opendialogThemeForm is not a function');
  }
}

const openForm = () => {
  dialogItemForm.value.dialogForm();
};
const openFormHero = () => {
  dialogHeroForm.value.openDialogShowHero();
};
// userStore.fetchUser().then(() => {
//   permissions.value = userStore.user.role;
//   userSelectd.value = userStore.user;
// });
// onMounted(() => {});
</script>

<style lang="scss">
* {
  text-align: center;
}
.v-list-item-subtitle {
  padding: 10px !important;
  /* border-bottom: #8181e8 solid 2px !important; */
}
.user-info {
  .v-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    .v-list-item {
      width: 33%;
    }
  }
}
</style>
