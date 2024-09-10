<template>
  <div>
    <v-card class="pa-4 my-4">
      <div class="title-section">
        <h2>{{ lang == 'en' ? 'Experiences' : ' الخبرات ' }}</h2>
        <div class="top"></div>
        <div class="center"></div>
        <div class="bottom"></div>
      </div>
      <v-timeline  side="end">
        <v-timeline-item width="100%" size="large" v-for="item in userStore.userAll.experiences" :key="item.id">
          <template v-if="item.photos[0]" v-slot:icon>
            <v-avatar :image="item.photos[0].path"></v-avatar>
          </template>
          <v-card  class="elevation-0">
            <v-chip color="primary" label>{{ lang == 'en' ? 'From' : ' من ' }} : {{ item.start_date }} </v-chip>
            <v-card-title class="text-h5"> {{ item.title[lang] }}</v-card-title>
            <v-card-subtitle> {{ item.company[lang] }}</v-card-subtitle>
            <v-card-text> {{ item.description[lang] }}</v-card-text>
            <v-card-subtitle v-if="Number(item.end_date[lang]) === 1"> {{ lang == 'en' ? 'Up to now' : ' الي الان ' }}</v-card-subtitle>
            <v-card-subtitle v-else> {{ lang == 'en' ? 'To' : ' الي ' }} : {{ item.end_date[lang] }}</v-card-subtitle>
          </v-card>
          <hr class="my-4">
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';
const route = useRoute();
const userStore = useUserStore();
const lang = route.params.lang;
</script>
<style>
.v-timeline-item__opposite {
  padding: 0px !important;
  margin: 0px !important;
}
</style>
