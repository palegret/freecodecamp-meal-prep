<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="title my-3">My Recipes</h1>
        <div v-for="(item, i) in userRecipes" class="subheading mb-2" :key="i">
          {{ item }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-4">
        <v-btn dark color="brown darken-4" to="/menu">Go To Menu</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Profile',
  computed: {
    userRecipes() {
      return this.$store.state.userRecipes;
    }
  },
  methods: {
    getRecipes() {
      this.$store.dispatch('getUserRecipes');
    }
  },
  mounted() {
    this.getRecipes();
  }
};
</script>
