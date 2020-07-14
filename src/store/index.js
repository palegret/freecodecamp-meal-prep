import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import Config from '../config';

const { apiUrl, appId, appKey } = Config.edamamApi;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
        let response = await axios.get(`${state.apiUrl}`, {
          params: {
            q: plan,
            app_id: appId,
            app_key: appKey,
            from: 0,
            to: 9
          }
        });
        commit('setRecipes', response.data.hits);
      } catch (error) {
        commit('setRecipes', []);
      }
    }
  },
  modules: {}
});
