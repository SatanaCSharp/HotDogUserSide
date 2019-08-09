import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        hotDogsList: []
    },
    mutations: {
        setHotDogs (state, payload) {
          state.hotDogsList = payload
        }
    },
    actions: {
        executeSetHotDogs({commit},hotDogsList) {
            commit('setHotDogs', hotDogsList)
        }
    },
});