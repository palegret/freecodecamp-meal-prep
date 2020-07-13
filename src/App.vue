<template>
  <v-app>
    <TheNavigation />
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';

export default {
  name: 'App',
  components: {
    TheNavigation
  }
};
</script>

<style scoped></style>
