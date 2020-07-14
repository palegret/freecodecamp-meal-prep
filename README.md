# meal-prep
## Repository for freeCodeCamp's<br>'How to build a Single Page Application using Vue.js, Vuex, Vuetify, and Firebase' series. ##
[Part 1: How to install Vue and build an SPA using Vuetify and Vue Router](https://www.freecodecamp.org/news/how-to-build-a-single-page-application-using-vue-js-vuex-vuetify-and-firebase-838b40721a07/)  
[Part 2: learn how to use Vue Router with your SPA](https://medium.com/js-dojo/how-to-build-an-spa-using-vue-js-vuex-vuetify-and-firebase-using-vue-router-fc5bd065fe18)  
[Part 3: learn how to use Vuex and access the API to get your recipes](https://medium.com/js-dojo/how-to-build-an-spa-using-vue-js-vuex-vuetify-and-firebase-use-vuex-and-access-the-api-f8036aa464ad)  
[Part 4: learn how to use Firebase to add authentication and a cart](https://medium.com/js-dojo/how-to-build-a-spa-using-vue-js-vuex-vuetify-and-firebase-adding-authentication-with-firebase-d9932d1e4365)  


```
$ npm install -g @vue/cli
$ vue create meal-prep
```

### Vue CLI Options ###
Preset: __Manually select features__  
Features needed for project: __Babel, Router, Vuex, Linter__  
Use history mode for router: __Yes__  
Linter / formatter config: __Prettier__  
Additional lint features: __Lint on save__  
Config file placement: __In package.json__  

```
$ npm run serve
$ vue add vuetify
```

### vue-cli-plugin-vuetify Options ###
Preset: Configure (advanced)  
Use premade template: __No__  
_(Chose default for remaining options.)_  

```
$ npm run lint
$ touch ./src/components/TheNavigation.vue
```

#### Adjustments ####  
- Numerous breaking component changes between Vuetify 1.x and 2.x.
- Needed to add Google's Material Icons CDN URL to `index.html`.  

```
$ touch ./src/views/Menu.vue
$ touch ./src/views/Signin.vue
$ touch ./src/views/Join.vue
$ npm install axios
$ npm install firebase --save
$ touch ./src/firebase/index.js
```
