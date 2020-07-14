import axios from 'axios';
import firebase from 'firebase';
import Vue from 'vue';
import Vuex from 'vuex';

import config from '../config';
import router from '../router';

const { apiUrl, appId, appKey } = config.edamamApi;

const fbAuth = firebase.auth();
const fbDatabase = firebase.database();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    recipes: [],
    user: null,
    userRecipes: []
  },
  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setRecipes(state, payload) {
      state.recipes = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setUserRecipes(state, payload) {
      state.userRecipes = payload;
    }
  },
  actions: {
    // Or addRecipe(({ state }, { recipe }) {...
    addRecipe({ state }, payload) {
      fbDatabase
        .ref('users')
        .child(state.user.user.uid)
        .push(payload.recipe.label);
    },
    async getRecipes({ commit }, plan) {
      try {
        const response = await axios.get(`${apiUrl}`, {
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
    },
    getUserRecipes({ state, commit }) {
      return fbDatabase
        .ref('users/' + state.user.user.uid)
        .once('value', snapshot => commit('setUserRecipes', snapshot.val()));
    },
    async userJoin({ commit }, { email, password }) {
      try {
        const newUser = await fbAuth.createUserWithEmailAndPassword(
          email,
          password
        );
        commit('setUser', newUser);
        commit('setIsAuthenticated', true);
        router.push('/profile');
      } catch (error) {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      }
    },
    async userSignIn({ commit }, { email, password }) {
      try {
        const user = await fbAuth.signInWithEmailAndPassword(email, password);
        commit('setUser', user);
        commit('setIsAuthenticated', true);
        router.push('/profile');
      } catch (error) {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      }
    },
    async userSignOut({ commit }) {
      try {
        await fbAuth.signOut();
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      } catch (error) {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },
  modules: {}
});
