/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        damage: [],
        bossLife: 100,
        playerLife: 100,
        bossDamage: [],
        currentTurn: "Player",
    }/*,
    mutations: {
        increment (state) {
            return state.damage
        }
    }*/
});

export default store