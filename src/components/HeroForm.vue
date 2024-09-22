<template>
  <div>
    <v-icon @click="addNew()" color="info" size="35" icon="mdi-image-multiple-outline"></v-icon>
    <v-dialog style="z-index: 50" class="text-center" v-model="dialogItemFormHero" max-width="900" :fullscreen="xs">
      <v-card class="pa-5">
        <h2 class="ma-5">صور الرئيسية</h2>
        <v-row style="background-color: #ada7a0; text-align: center; overflow-x: auto" v-if="userStore.user.hero.length">
          <v-col v-for="image in userStore.user.hero" :key="image" class="d-flex child-flex">
            <v-img min-width="150px" max-width="300px" :src="image.path" aspect-ratio="1" class="bg-grey-lighten-2" cover>
              <v-icon @click.stop="deleteImage(image.id)" class="icon-delete-image" icon="mdi-delete-outline"></v-icon>
            </v-img>
          </v-col>
        </v-row>
        <p class="text-alert" v-if="!userStore.user.hero.length">لا توجد صور</p>
        <v-form>
          <v-row class="my-10">
            <h3>يمكنك تحميل صوره او اكثر</h3>
            <imageInput ref="imageInputRef" @saveCompressedImages="save" />
          </v-row>
        </v-form>
        <template v-slot:actions>
          <v-btn @click="closeDialog"> اغلاق </v-btn>
          <v-btn @click="runCompressImages"> موافق </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { useDisplay } from 'vuetify';
const { xs } = useDisplay();
import { saveItems, deleteItem } from '@/Service/apiService';
import { ref, defineEmits, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const emits = defineEmits(['runItems']);
const dialogItemFormHero = ref(false);
// const itemImages = ref([]);

// onMounted(() => {
//   itemImages.value = userStore.user.hero;
// });
const deleteImage = id => {
  deleteItem(`photo`, id).then(() => {
    userStore.user.hero = userStore.user.hero.filter(image => image.id !== id);
  });
};
function closeDialog() {
  dialogItemFormHero.value = false;
}
function save(compressedImages) {
  const formData = new FormData();
  formData.append('user_id', userStore.user.id);
  // Add compressed images to formData
  if (compressedImages.length) {
    compressedImages.forEach(file => {
      formData.append('hero[]', file, file.name);
    });
  }
  formData.append('_method', 'put');
  saveItems('users', formData, userStore.user.id).then(res => {
    userStore.user.hero = res.data.hero;
  });
}
const imageInputRef = ref(null);
const runCompressImages = () => {
  if (imageInputRef.value) {
    imageInputRef.value
      .compressImages(5)
      .then(data => {
        save(data);
      })
      .catch(err => {
        console.log('error ', err);
      });
  }
};
const openDialogShowHero = () => {
  dialogItemFormHero.value = true;
};
defineExpose({
  openDialogShowHero,
});
</script>
<style lang="scss">
.icon-delete-image {
  display: flex;
  position: absolute;
  top: 3px;
  right: 3px;
  color: white;
  background-color: red;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 50;
}
</style>
