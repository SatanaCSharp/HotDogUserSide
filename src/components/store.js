import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        hotDogsList: [],
        spicesList: [],
        stuffList: []
    },
    mutations: {
        setHotDogs(state, payload) {
            state.hotDogsList = payload
        },
        setSpices(state, payload) {
            state.spicesList = payload
        },
        setStuff(state, payload) {
            state.stuffList = payload
        }
    },
    actions: {
        executeSetHotDogs({commit}, hotDogsList) {
            commit('setHotDogs', hotDogsList)
        },
        executeSetSpices({commit}, spicesList) {
            commit('setSpices', spicesList)
        },
        executeSetStuff({commit}, stuffList) {
            commit('setStuff', stuffList)
        }
    },
});