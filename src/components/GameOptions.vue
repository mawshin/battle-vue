<template>
    <div id="templateControl">
        <!-- <game-buttons></game-buttons> -->
        <div class="c-controller" v-bind:class="[waitingClass ? 'is-disabled' : '']">
            <div class="c-controller--btn c-controller--btn__attack" v-on:click="attackHit">{{attack}}</div>
            <div class="c-controller--btn c-controller--btn__blast" v-bind:class="[activeClass]">{{blast}}</div>
            <div class="c-controller--btn c-controller--btn__heal">{{heal}}</div>
            <div class="c-controller--btn c-controller--btn__surrender">{{surrender}}</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

var getRandomInt = { 
    randomInt : function(min, max) { 
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}

var bossAttack = {
    attackPower : function (min, max) {
        var value = getRandomInt.randomInt(min, max);

        store.state.bossDamage.push(value);
        store.state.damage.unshift({name: "Dragon", attack: value});

        store.state.playerLife = store.state.playerLife - value;
    }
}

import store from '../store';

export default {
    name: 'GameOptions',
    data: function () {
        return {
            attack: 'Attack',
            blast: 'Blast',
            heal: 'Heal',
            surrender: 'Give up',
            activeClass: '',
            waitingClass: false,
            /*classObject: {
                active: '',
            }*/
        }
    },
    methods: {
        attackHit: function (event) {
            var min = 3;
            var max = 12;
            var value = getRandomInt.randomInt(min, max);

            /*console.log(hitCount);*/

            // update comment list
            store.state.playerDamage.push(value);
            store.state.damage.unshift({name: "Player", attack: value});

            store.state.bossLife = store.state.bossLife - value;

            store.state.playerTurnCounter++;

            if(store.state.playerTurnCounter === 2) {
                this.$data.activeClass = 'is-active';
            }

            store.state.currentTurn = "Boss";

            this.$data.waitingClass = true;

            setTimeout(function(){
                bossAttack.attackPower(min, max);

                store.state.bossTurnCounter++;

                store.state.currentTurn = "Player";

                this.$data.waitingClass = false;
            }.bind(this), 2000);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .c-controller {
        margin: 3rem auto;

        &.is-disabled {
            opacity: 0.1;
            pointer-events: none;
        }
    }

    .c-controller--btn {
        display: inline-block;
        width: 10%;
        font-weight: bold;
        padding: 0.3125rem 0;
        cursor: pointer;
        margin-left: 0.625rem;

        &:first-child {
            margin-left: 0;
        }
    }

    .c-controller--btn__attack {
        background-color: #ED254E;
        color: white;
    }

    .c-controller--btn__blast {
        background-color: #efefef;
        color: white;
        cursor: not-allowed;

        &.is-active {
            background-color: #F9DC5C;
            color: $dark-grey;
            cursor: pointer;
        }
    }

    .c-controller--btn__heal {
        background-color: #C2EABD;
        color: $dark-grey;
    }

    .c-controller--btn__surrender {
        background-color: #011936;
        color: white;
    }
</style>
