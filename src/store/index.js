import Vue from 'vue';
import Vuex from 'vuex';
import inbox from '../assets/inbox.json'
import outbox from '../assets/outbox.json'
import trash from '../assets/trash.json'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inbox,
    outbox,
    trash,
    currentIndex: 24,
    selectedTitle: 'דואר נכנס',
    displayMails: [],
    favoriteOnly: false,
  },
  getters: {
    getDisplayMails: (state) => {
      return state.displayMails;
    },
    getFavoriteOnly: (state) => {
      return state.favoriteOnly;
    },
    getSelectedTitle: (state) => {
      return state.selectedTitle;
    },
    getInbox: (state) => {
      return state.inbox;
    },
    getOutbox: (state) => {
      return state.outbox;
    },
    getTrash: (state) => {
      return state.trash;
    },
    getNewID(state) {
      state.currentIndex++;
      return (state.currentIndex - 1);
    }
  },
  mutations: {
    setTitle(state, title) {
      state.selectedTitle = title;
    },
    changeFavoriteOnly(state) {
      state.favoriteOnly = !state.favoriteOnly
    },
    setDisplayMails(state, displayMails) {
      state.displayMails = displayMails
    },
    addMailInbox(state, mail) {
      state.inbox.unshift(mail);
    },
    addMailOutbox(state, mail) {
      state.outbox.unshift(mail);
    },
    addMailTrash(state, mail) {
      state.trash.unshift(mail);
    },
    removeMailInbox(state, mail) {
      state.inbox = state.inbox.filter(currMail => {
        return currMail.id != mail.id;
      })
    },
    removeMailOutbox(state, mail) {
      state.outbox = state.outbox.filter(currMail => {
        return currMail.id != mail.id;
      })
    },
    removeMailTrash(state, mail) {
      state.trash = state.trash.filter(currMail => {
        return currMail.id != mail.id;
      })
    },
  },
  actions: {
    setTitle ({commit}, title) {
      commit('setTitle', title)
    },
    setFavoriteOnly({commit}) {
      commit('changeFavoriteOnly');
    },
    setDisplayMails ({commit}, displayMails) {
      commit('setDisplayMails', displayMails)
    },
    inboxAddMail({commit}, mail) {
      commit('addMailInbox', mail);
    },
    outboxAddMail({commit}, mail) {
      commit('addMailOutbox', mail);
    },
    trashAddMail({commit}, mail) {
      commit('addMailTrash', mail);
    },
    inboxRemoveMail({commit}, mail) {
      commit('removeMailInbox', mail);
    },
    outboxRemoveMail({commit}, mail) {
      commit('removeMailOutbox', mail);
    },
    trashRemoveMail({commit}, mail) {
      commit('removeMailTrash', mail);
    },
  },
  modules: {
  },
});
