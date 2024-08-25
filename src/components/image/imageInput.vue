<template>
  <v-col cols="12" md="6">
    <div v-if="imagePreviews.length">
      <v-row class="d-flex">
        <v-col style="max-width: 200px; max-height: 200px; min-width: 150px" v-for="(image, i) in imagePreviews" :key="i">
          <v-img :src="image" class="mb-2" aspect-ratio="1" cover></v-img>
        </v-col>
      </v-row>
    </div>
  </v-col>
  <v-col cols="12" md="6">
    <v-file-input
      v-model="images"
      chips
      multiple
      label="الصور"
      accept="image/*"
      prepend-icon="mdi-camera"
      @change="generateImagePreviews"
    ></v-file-input>
  </v-col>
</template>
<script setup>
import { ref, defineEmits } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const emits = defineEmits(['saveCompressedImages']);
const images = ref([]);
const imagePreviews = ref([]);
const generateImagePreviews = () => {
  imagePreviews.value = [];
  images.value.forEach(file => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = e => {
        imagePreviews.value.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
};

// Function to compress images
import imageCompression from 'browser-image-compression';
const compressImages = async () => {
  userStore.loadengApi = true;
  // Create an array to hold the compressed images
  const compressedImages = [];
  // Define compression options
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 8000,
    useWebWorker: true,
  };
  // Loop through the selected images and compress each one
  await Promise.all(
    images.value.map(async file => {
      try {
        const compressedFile = await imageCompression(file, options);
        compressedImages.push(compressedFile);
      } catch (err) {}
    })
  );
  // When all images are compressed, send them to the server
  if (compressedImages.length === images.value.length) {
    emits('saveCompressedImages', compressedImages);
  }

  userStore.loadengApi = false;
};
defineExpose({
  compressImages,
});
</script>
