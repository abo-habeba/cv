<template>
  <v-breadcrumbs :items="breadcrumbs" divider="/">
    <template v-slot:item="{ item }">
      <router-link :to="item.href">{{ item.text }}</router-link>
    </template>
  </v-breadcrumbs>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Get all routes that have a title in the meta
const routerLists = ref(router.getRoutes().filter(r => r.meta && r.meta.title));

// Function to create breadcrumbs based on current route
const breadcrumbs = computed(() => {
  const currentPath = route.path.split('/').filter(p => p); // Split path and filter empty values
  let fullPath = '';

  return currentPath.map(pathSegment => {
    fullPath += `/${pathSegment}`;

    // Find the corresponding route with the title
    const matchingRoute = routerLists.value.find(r => r.path === fullPath);
    return {
      text: matchingRoute ? matchingRoute.meta.title : pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1),
      href: fullPath,
    };
  });
});
</script>
