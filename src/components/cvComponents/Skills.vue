<template>
  <div class="h-narrow-content">
    <v-card class="pa-4 my-4">
      <div class="title-section">
        <h2>{{ lang == 'en' ? 'Skills' : ' المهارات ' }}</h2>
        <div class="top"></div>
        <div class="center"></div>
        <div class="bottom"></div>
      </div>
      <v-row>
        <v-col v-for="(skill, index) in userStore.userAll.skills" :key="index" cols="6" md="3">
          <div style="cursor: pointer" @click="funSelectedSkill(skill)" class="d-flex flex-column align-center text-center pa-3">
            <v-avatar v-if="skill?.photos[0]" size="80" class="mx-auto mb-3">
              <v-img :src="skill.photos[0]?.path" alt="Skill Image"></v-img>
            </v-avatar>
            <v-card-title class="text-h6">{{ skill.name[lang] }}</v-card-title>
            <!-- <per>{{ skill.description[lang] }}</per> -->
            <!-- <v-progress-linear height="15" v-if="skill?.level !== null" :model-value="skill.level" color="primary" class="mt-3">
              <template v-slot:default>
                <strong>{{ skill.level }}%</strong>
              </template>
            </v-progress-linear> -->
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-dialog v-model="dialogSkill" max-width="500px">
      <v-card class="d-flex flex-column align-center text-center pa-3">
        <v-card-title>{{ selectedSkill?.name[lang] }}</v-card-title>
        <v-avatar v-if="selectedSkill.photos[0]" size="80" class="mx-auto mb-3">
          <v-img :src="selectedSkill?.photos[0]?.path" alt="Skill Image"></v-img>
        </v-avatar>
        <pre>{{ selectedSkill?.description[lang] }}</pre>
        <v-progress-circular
          v-if="selectedSkill?.level !== null"
          :model-value="selectedSkill.level"
          :rotate="-90"
          :size="100"
          :width="15"
          color="primary"
        >
          {{ selectedSkill.level }} %
        </v-progress-circular>
        <v-card-actions class="pa-4">
          <v-btn color="red" text @click="dialogSkill = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const userStore = useUserStore();
const lang = route.params.lang;
const selectedSkill = ref(null);
const dialogSkill = ref(false);
function funSelectedSkill(skill) {
  selectedSkill.value = skill;
  dialogSkill.value = true;
}
</script>
