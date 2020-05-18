import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedTitle: 'דואר נכנס',
    displayMails: [],
  },
  getters: {
    getDisplayMails: (state) => {
      return state.displayMails;
    },
    getSelectedTitle: (state) => {
      return state.selectedTitle;
    }
  },
  mutations: {
    setTitle(state, title) {
      state.selectedTitle = title;
    },
    setDisplayMails(state, displayMails) {
      state.displayMails = displayMails
    }
  },
  actions: {
    setTitle (context, title) {
      context.commit('setTitle', title)
    },
    setDisplayMails (context, displayMails) {
      context.commit('setDisplayMails', displayMails)
    }
  },
  modules: {
  },
});
