<template>
  <h1>الصفحة الرئيسية تحت الانشاء</h1>
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
