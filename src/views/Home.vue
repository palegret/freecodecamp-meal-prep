<template>
  <span>
    <HomeHero />
    <HomeDetails />
    <HomePlans />
  </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeDetails,
    HomePlans
  }
};
</script>
