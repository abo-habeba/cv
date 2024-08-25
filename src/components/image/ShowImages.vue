<template>
  <v-dialog v-model="dialogImage" max-height="80vh">
    <v-row style="background-color: #ada7a0; text-align: center; overflow-x: auto" v-if="itemImages.length">
      <v-col v-for="image in itemImages" :key="image" class="d-flex child-flex">
        <v-img min-width="150px" max-width="300px" :src="image.path" aspect-ratio="1" class="bg-grey-lighten-2" cover>
          <v-icon @click="deleteImage(image.id)" class="icon-delete-image" icon="mdi-delete-outline"></v-icon>
        </v-img>
      </v-col>
    </v-row>
    <p class="text-alert" v-if="!itemImages.length">لا توجد صور</p>
  </v-dialog>
</template>
<script setup>
import { deleteItem } from '@/Service/apiService';
import { ref, defineEmits } from 'vue';
const dialogImage = ref(false);
const itemImages = ref([]);
const emit = defineEmits(['runItems']);
const deleteImage = id => {
  deleteItem(`photo`, id).then(() => {
    itemImages.value = itemImages.value.filter(image => image.id !== id);
    emit('runItems');
  });
};
const opaenDialog = (data = false) => {
  itemImages.value = data;
  dialogImage.value = true;
};
defineExpose({
  opaenDialog,
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
}
</style>
