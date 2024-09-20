<template>
  <div>
    <v-card class="pa-4 my-4">
      <div class="title-section">
        <h2 v-if="userStore.userAll.user.theme?.hero?.sectionTitle.enabled" :style="userStore.userAll.user.theme?.hero?.sectionTitle.style">
          {{ lang == 'en' ? 'Academic' : ' التعليم ' }}
        </h2>
        <div class="top"></div>
        <div class="center"></div>
        <div class="bottom"></div>
      </div>
      <v-expansion-panels class="my-5">
        <v-expansion-panel v-for="item in userStore.userAll.academics" :key="item.id">
          <v-expansion-panel-title v-slot="{ expanded }">
            <v-row no-gutters>
              <v-col class="my-2 px-3d-flex justify-start" cols="12">{{ item.institution[lang] }}</v-col>
              <v-col v-if="!expanded" class="my-2 text--secondary" cols="12">
                {{ item.field_of_study[lang] }}
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row justify="space-around" no-gutters>
              <v-col cols="12">
                <p class="pa-2" v-if="item.field_of_study">
                  {{ lang === 'en' ? 'Field of study' : 'تخصص الدراسة' }} : {{ item.field_of_study[lang] }}
                </p>
                <p class="pa-2" v-if="item.degree">{{ lang === 'en' ? 'Degree' : 'الدرجة' }} : {{ item.degree[lang] }}</p>
                <p class="pa-2" v-if="item.grade">{{ lang === 'en' ? 'Grade' : 'التقدير' }} : {{ item.grade[lang] }}</p>
                <p class="pa-2" v-if="item.start_date">
                  {{ lang === 'en' ? 'Start Date' : 'تاريخ البدء' }}: {{ item.start_date || (lang === 'en' ? 'Not Set' : 'غير محدد') }}
                </p>
                <p class="pa-2" v-if="item.end_date">
                  {{ lang === 'en' ? 'End Date' : 'تاريخ النهاية' }}: {{ item.end_date || (lang === 'en' ? 'Not Set' : 'غير محدد') }}
                </p>
              </v-col>
              <v-col cols="12">
                <v-img
                  v-if="userStore.userAll.user.theme?.academics?.imag.enabled"
                  min-width="100px"
                  max-width="150px"
                  :src="item.photos[0].path"
                  aspect-ratio="1"
                  class="bg-grey-lighten-2"
                  cover
                >
                </v-img>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
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

<style scoped>
/* Add any styles if needed */
</style>
