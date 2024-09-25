<template>
  <v-container>
    <v-card :style="{ margin: mobile ? '0 5%' : '0 20%' }" class="my-10 pa-2">
      <h1 class="text-center text-h5">الصفحة الرئيسية تحت الانشاء</h1>
      <v-row>
        <v-col cols="6" class="my-5">
          <v-btn append-icon="mdi-login" to="/login" type="submit" color="blue" size="large" variant="tonal" block> تسجيل دخول </v-btn>
        </v-col>
        <v-col cols="6" class="my-5">
          <v-btn append-icon="mdi-account-plus" to="/register" type="submit" color="blue" size="large" variant="tonal" block> انشأ حسابك الان </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
definePage({
  meta: {
    title: ' الرئيسية ',
  },
});
</script>
<route lang="yaml">
meta:
  layout: pure
</route>
