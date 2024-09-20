<template>
  <div class="h-narrow-content">
    <v-card class="pa-4 my-4">
      <div class="title-section">
        <h2 v-if="userStore.userAll.user.theme?.hero?.sectionTitle.enabled" :style="userStore.userAll.user.theme?.hero?.sectionTitle.style">
          {{ lang == 'en' ? 'Skills' : ' المهارات ' }}
        </h2>
        <div class="top"></div>
        <div class="center"></div>
        <div class="bottom"></div>
      </div>
      <v-row>
        <v-col v-for="(skill, index) in userStore.userAll.skills" :key="index" cols="6" md="3">
          <div @click="funSelectedSkill(skill)" style="cursor: pointer" class="d-flex flex-column align-center text-center pa-3">
            <v-card-title
              v-if="userStore.userAll.user.theme?.skills.mainTitle.enabled"
              :style="userStore.userAll.user.theme?.skills.mainTitle.style"
              class="text-h6"
            >
              {{ skill.name[lang] }}
            </v-card-title>
            <div
              class="ma-3"
              style="
                position: relative;
                display: flex;
                flex-flow: column wrap;
                place-content: center;
                align-items: center;
                justify-content: center;
                align-content: center;
                flex-wrap: wrap;
                flex-direction: column;
              "
            >
              <v-avatar  v-if="userStore.userAll.user.theme?.skills.imag.enabled" size="100" >
                <v-img
                  :style="{ opacity: userStore.userAll.user.theme?.skills.progress.enabled ? 0.5 : 1 }"
                  :src="skill.photos[0]?.path"
                  alt="Skill Image"
                ></v-img>
              </v-avatar>
              <v-progress-circular
                v-if="userStore.userAll.user.theme?.skills.progress.enabled"
                style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"
                :model-value="skill.level"
                :rotate="-90"
                :size="130"
                :width="15"
                :color="userStore.userAll.user.theme?.skills.progress.backgroundColor || '#20A427'"
              >
                {{ skill?.level }} %
              </v-progress-circular>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- Dialog -->
    <!-- <per>{{ skill.description[lang] }}</per> -->
    <!-- <v-progress-linear height="15" v-if="skill?.level !== null" :model-value="skill.level" color="primary" class="mt-3">
              <template v-slot:default>
                <strong>{{ skill.level }}%</strong>
              </template>
            </v-progress-linear> -->

    <v-dialog v-model="dialogSkill" max-width="500px">
      <v-card class="d-flex flex-column align-center text-center pa-3">
        <v-card-title>{{ selectedSkill?.name[lang] }}</v-card-title>
        <div
          style="
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-flow: wrap;
            place-content: center;
            align-items: center;
            align-content: center;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
          <v-avatar v-if="selectedSkill.photos[0]" size="80" class="my-4">
            <v-img :src="selectedSkill?.photos[0]?.path" alt="Skill Image"></v-img>
          </v-avatar>
          <v-progress-linear
            v-if="userStore.userAll.user.theme?.skills.subTitle.enabled"
            class="mx-5"
            width="100%"
            height="20"
            :model-value="selectedSkill.level"
            :color="userStore.userAll.user.theme?.skills.progress.backgroundColor || '#20A427'"
          >
            {{ selectedSkill.level }} %
          </v-progress-linear>
        </div>
        <pre class="pa-2" v-if="userStore.userAll.user.theme?.skills.subTitle.enabled" :style="userStore.userAll.user.theme?.skills.subTitle.style">{{
          selectedSkill?.description[lang]
        }}</pre>
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
