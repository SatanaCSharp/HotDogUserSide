import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        hotDogsList: [],
        spices: [],
        stuff: []
    },
    mutations: {
        setHotDogs (state, payload) {
          state.hotDogsList = payload
        },
        setSpices (state, payload) {
          state.spices = payload
        },
        setStuff (state, payload) {
          state.stuff = payload
        }
    },
    actions: {
        executeSetHotDogs({commit},hotDogsList) {
            commit('setHotDogs', hotDogsList)
        },
        executeSetSpices({commit},spicesList) {
            commit('setSpices', spicesList)
        },
        executeSetStuff({commit},stuffList) {
            commit('setStuff', stuffList)
        }
    },
});