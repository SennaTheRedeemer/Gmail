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
    currentIndex: 37,
    selectedMail: undefined,
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
    getSelectedMail: (state) => {
      return state.selectedMail;
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
    changeFavorite(state, {mail, favoriteState}) {
      mail.favorite = favoriteState;
    },
    setMail(state, mail) {
      state.selectedMail = mail;
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
    removeMail(state, mail) {
      if(state.inbox.find(currMail => currMail.id === mail.id)){
        // Remove from inbox
        state.inbox = state.inbox.filter(currMail => {
          return currMail.id != mail.id;
        })
        // Add to trash
        state.trash.unshift(mail);
      }
      else if (state.outbox.find(currMail => currMail.id === mail.id)) {
        // Remove from outbox
        state.outbox = state.outbox.filter(currMail => {
          return currMail.id != mail.id;
        })
        // Add to trash
        state.trash.unshift(mail);
      }
      else if (state.trash.find(currMail => currMail.id === mail.id)) {
        // Remove from trash
        state.trash = state.trash.filter(currMail => {
          return currMail.id != mail.id;
        })
      }
      // If its the selected, unselect
      if(state.selectedMail && state.selectedMail.id === mail.id) {
        state.selectedMail = undefined;
      }
    }
  },
  actions: {
    changeFavorite({commit}, mailFavorite) {
      commit('changeFavorite', mailFavorite)
    },
    setSelectedMail ({commit}, mail) {
      commit('setMail', mail)
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
    removeMail({commit}, mail) {
      commit('removeMail', mail);
    }
  },
  modules: {
  },
});
