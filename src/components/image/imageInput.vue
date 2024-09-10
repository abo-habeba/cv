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
      :multiple="props.isMultiple"
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
const props = defineProps({
  isMultiple: {
    type: Boolean,
    default: false,
  },
});
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
const compressedImages = ref([]);
const compressImages = (SizeMB = 1) => {
  userStore.loadengApi = true;
  // Define compression options
  const options = {
    maxSizeMB: SizeMB,
    maxWidthOrHeight: 8000,
    useWebWorker: true,
  };
  // Return a new Promise
  return new Promise(async (resolve, reject) => {
    try {
      // Compress all images using Promise.all
      await Promise.all(
        images.value.map(async file => {
          const compressedFile = await imageCompression(file, options);
          compressedImages.value.push(compressedFile);
        })
      );
      if (compressedImages.value.length === images.value.length) {
        console.log('Compressed Images before emit:', compressedImages.value);
        // emits('saveCompressedImages', compressedImages.value);
        console.log('After emit call');
      }
      resolve(compressedImages.value);
    } catch (error) {
      reject(error);
    } finally {
      userStore.loadengApi = false;
    }
  });
};

defineExpose({
  compressImages,
});
</script>
