/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        damage: [],
        playerDamage: [],
        bossDamage: [],
        bossLife: 100,
        playerLife: 100,
        currentTurn: "Player",
        playerTurnCounter: 0,
        bossTurnCounter: 0,
        waitingClass: false,
    }/*,
    mutations: {
        increment (state) {
            return state.damage
        }
    }*/
});

export default store