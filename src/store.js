/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const apiURL = 'http://play.teamferal.com:3050';

export default new Vuex.Store({
  state: {
    status: {},
    players: [],
    lastOnline: [],
    minecraftStatus: [],
  },
  mutations: {
    updateStatus(state, newStatus) {
      state.status = newStatus;
    },
    updatePlayers(state, newPlayers) {
      state.players = newPlayers;
    },
    updateLastOnline(state, newLastOnline) {
      state.lastOnline = newLastOnline;
    },
    updateMinecraftStatus(state, newMinecraftStatus) {
      state.minecraftStatus = newMinecraftStatus;
    },
  },
  actions: {
    fetchStatus({ commit }) {
      fetch(`${apiURL}/status`)
        .then(response => response.json())
        .then((json) => {
          commit('updateStatus', json);
        }).catch(() => {
          this.status.online = false;
        });
    },
    fetchPlayers({ commit }) {
      fetch(`${apiURL}/players`)
        .then(response => response.json())
        .then((json) => {
          commit('updatePlayers', json);
        }).catch(() => {
          this.status.online = false;
        });
    },
    fetchLastOnline({ commit }) {
      fetch(`${apiURL}/lastonline`)
        .then(response => response.json())
        .then((json) => {
          commit('updateLastOnline', json);
        }).catch(() => {
          this.status.online = false;
        });
    },
    fetchMinecraftStatus({ commit }) {
      fetch('https://status.mojang.com/check')
        .then(response => response.json())
        .then((json) => {
          commit('updateMinecraftStatus', json);
        });
    },
  },
});
