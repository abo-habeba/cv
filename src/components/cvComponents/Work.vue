<template>
  <!-- Dialog لعرض تفاصيل المشروع -->
  <v-dialog v-model="projectDialog" :fullscreen="xs" max-width="900">
    <v-card class="w-100 text-center">
      <v-icon @click="projectDialog = false" class="icon-close" size="40" color="red" icon="mdi-close"></v-icon>
      <v-row>
        <v-col cols="12">
          <h3 class="text-h3 mt-10">{{ item.title[lang] }}</h3>
          <hr class="mx-auto w-75" />
        </v-col>
        <v-col cols="12">
          <p>{{ item.description[lang] }}</p>
        </v-col>
        <v-col cols="12">
          <a :href="item.url">
            <v-btn color="primary">
              {{ lang === 'en' ? 'Live Preview' : 'معاينة حية' }}
              <v-icon icon="mdi-web" end></v-icon>
            </v-btn>
          </a>
        </v-col>
        <v-col cols="12">
          <p>يمكنك النقر علي اي صورة لعرضها بشكل واضح</p>
          <div class="box-imag">
            <img v-for="(image, index) in item.photos" :key="index" :src="image.path" alt="Image" @click="openCarousel(index)" />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>

  <!-- Dialog لعرض الصور باستخدام Carousel -->
  <v-dialog v-model="carouselDialog" :fullscreen="xs" max-width="900">
    <v-card>
      <v-icon @click="carouselDialog = false" class="icon-close" size="40" color="red" icon="mdi-close"></v-icon>
      <v-carousel progress="primary" height="100vh" v-model="currentImageIndex">
        <template v-slot:prev="{ props }">
          <v-btn color="success" variant="elevated" @click="props.onClick" icon>
            <v-icon size="40" icon="mdi-chevron-left"></v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn color="info" variant="elevated" @click="props.onClick" icon>
            <v-icon size="40" icon="mdi-chevron-right"></v-icon>
          </v-btn>
        </template>
        <v-carousel-item class="carousel-imag" v-for="(image, index) in item.photos" :key="index" :src="image.path"></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-dialog>

  <!-- عرض المشاريع -->

  <V-card class="w-100 pa-4 my-4">
    <div class="title-section">
      <h2 v-if="userStore.userAll.user.theme?.hero?.sectionTitle.enabled" :style="userStore.userAll.user.theme?.hero?.sectionTitle.style">
        {{ lang == 'en' ? 'Work' : ' الاعمال ' }}
      </h2>
      <div class="top"></div>
      <div class="center"></div>
      <div class="bottom"></div>
    </div>
    <v-row justify="center" v-if="userStore.userAll.projects">
      <v-col v-for="(work, index) in userStore.userAll.projects" :key="index" cols="12" md="6" lg="4">
        <v-card class="text-center pa-1 mx-auto" max-width="344">
          <div class="image-container">
            <v-img class="opacity-70" :src="work.photos[0].path" height="200px" cover></v-img>
            <div class="overlay-icon">
              <v-icon @click="showProjectDetails(work)" size="30" color="info" icon="mdi-open-in-new"></v-icon>
            </div>
          </div>
          <v-card-title>{{ work.title[lang] }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </V-card>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';
import { useUserStore } from '@/stores/user';

// تحديد اللغة من المسار
const route = useRoute();
const lang = route.params.lang;

// المتغيرات للتحكم بالـ Dialog
const projectDialog = ref(false); 
const carouselDialog = ref(false); 
const currentImageIndex = ref(0); 
const item = ref(null); 

// جلب بيانات المستخدم
const { xs } = useDisplay();
const userStore = useUserStore();

// دالة لعرض تفاصيل المشروع
const showProjectDetails = project => {
  item.value = project;
  projectDialog.value = true;
};

// دالة لفتح الـ Carousel عند الضغط على صورة داخل تفاصيل المشروع
const openCarousel = index => {
  currentImageIndex.value = index;
  carouselDialog.value = true;
};
</script>

<style scoped>
.box-imag {
  column-count: 1;
  column-gap: 5px;
  border-radius: 0px;
  padding: 5px;
}
.box-imag img {
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  border: none;
  background-color: #546e7a;
  border-radius: unset;
  margin-bottom: 5px;
  padding: 7px;
}
@media (min-width: 30rem) {
  .box-imag {
    column-count: 2;
  }
}
@media (min-width: 48rem) {
  .box-imag {
    column-count: 3;
  }
}
@media (min-width: 64rem) {
  .box-imag {
    column-count: 4;
  }
}

.image-container {
  position: relative;
}

.overlay-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: white;
}
.icon-close {
  cursor: pointer;
  background-color: white;
  position: fixed;
  border-radius: 50%;
  top: 10px;
  right: 25px;
  z-index: 100;
}
.carousel-imag {
  height: 100%;
  width: auto;
  background-color: #0000000c;
}
</style>
