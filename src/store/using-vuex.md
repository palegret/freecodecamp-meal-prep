# Using Vuex 
- Vuex is a state management library for Vue.js applications. 
- It serves as a centralized store for all the components in an application.
- It uses rules to ensure that the state can only be mutated in a predictable fashion. 
- Vuex consists of:
  * The __state__, which is the source of truth that drives our app;
  * The __mutations__, which change the actual _value_ of the state;
  * The __actions__, which are the ways the state changes in reaction to user inputs.
- The `state` will contain the recipe data. 
- We will use `actions` to make the API call to retrieve recipes. 
- `mutations` are used to update `recipes` in `state`, with recipes returned from `actions`.
- Next, we are going to create an action called `getRecipes`, using axios to get recipes from the API. 
- On success or failure we call the mutation `setRecipes`. 
- `setRecipes` changes `state` to set `recipes` to the array returned from the API call.
- If the call fails, the `catch` block passes an empty array to the `setRecipes` mutation. 
- Here is what the store.js should look like:

## Updating HomePlans Component
- In the HomePlans component, remove the axios import and data() object. 
- In the showRecipes method, delete all of the code. 
- We need just one line of code to call our action in our Vuex store. 
- To call an `action` in Vuex you use a `dispatch`. 
- This is the one line of code for our showRecipes method:  
`this.$store.dispatch('getRecipes', plan);`  
