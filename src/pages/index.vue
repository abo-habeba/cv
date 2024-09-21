<template>
  <v-dialog :fullscreen="mobile">
    <v-text-field label="Label"></v-text-field>
    <v-text-field label="Label"></v-text-field>
    <v-text-field label="Label"></v-text-field>
    <v-text-field label="Label"></v-text-field>
    <v-text-field label="Label"></v-text-field>
  </v-dialog>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
</script>
<route lang="yaml">
meta:
  layout: pure
</route>
