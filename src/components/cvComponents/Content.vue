<template>
  <V-card class="w-100 pa-4 my-4">
    <div class="title-section">
      <h2 v-if="userStore.userAll.user.theme?.hero?.sectionTitle.enabled" :style="userStore.userAll.user.theme?.hero?.sectionTitle.style">
        {{ lang == 'en' ? 'Content' : ' اتصل بنا ' }}
      </h2>
      <div class="top"></div>
      <div class="center"></div>
      <div class="bottom"></div>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="w-100 h-100 pa-3">
          <div class="h-feature h-feature-sm animate-box fadeInLeft animated">
            <v-card-text>
              <v-icon size="25" icon="mdi-email"></v-icon>
              <p>
                <a :href="'mailto:' + userStore.userAll.user.email">{{ userStore.userAll.user.email }}</a>
              </p>
            </v-card-text>
          </div>
          <div class="h-feature h-feature-sm animate-box fadeInLeft animated">
            <v-card-text>
              <v-icon size="25" icon="mdi-map-marker"></v-icon>
              <p>
                {{ userStore.userAll.user.address[lang] }}
              </p>
            </v-card-text>
          </div>
          <div class="h-feature h-feature-sm animate-box fadeInLeft animated">
            <v-card-text>
              <v-icon size="25" icon="mdi-phone"></v-icon>
              <p>
                <a :href="'mailto:' + userStore.userAll.user.phone">{{ userStore.userAll.user.phone }}</a>
              </p>
            </v-card-text>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <V-card class="w-100 h-100 pa-3">
          <v-form>
            <v-text-field label="Name" required></v-text-field>
            <v-text-field label="Email" required type="email"></v-text-field>
            <v-text-field label="Subject" required></v-text-field>
            <v-textarea label="Message" rows="7" required></v-textarea>
            <v-btn color="primary">Send Message</v-btn>
          </v-form>
        </V-card>
      </v-col>
    </v-row>
  </V-card>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
// import { useDisplay } from 'vuetify';
import { useUserStore } from '@/stores/user';
// const { xs } = useDisplay();
const userStore = useUserStore();
// تحديد اللغة من المسار
const route = useRoute();
const lang = route.params.lang;
</script>
