<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        v-for="(item, i) in recipes"
        :key="i"
      >
        <v-card>
          <v-responsive>
            <v-img :src="item.recipe.image" />
          </v-responsive>
          <v-card-text>
            <div class="title">
              {{ item.recipe.label }}
            </div>
            <div class="subheading">
              Ingredients
            </div>
            <ul>
              <li
                v-for="(ingredient, i) in item.recipe.ingredientLines"
                :key="i"
              >
                {{ ingredient }}
              </li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" dark @click="orderRecipe(item)">Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MealRecipes',
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    recipes() {
      return this.$store.state.recipes;
    }
  },
  methods: {
    orderRecipe(recipe) {
      if (this.isAuthenticated) {
        this.$store.dispatch('addRecipe', recipe);
      } else {
        this.$router.push('/sign-in');
      }
    }
  }
};
</script>
