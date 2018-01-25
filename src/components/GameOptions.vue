<template>
    <div id="templateControl">
        <div class="c-controller" v-bind:class="[waitingClass ? 'is-disabled' : '']">
            <div class="c-controller--btn c-controller--btn__attack" v-on:click="attackHit">{{attack}}</div>
            <div class="c-controller--btn c-controller--btn__blast" v-on:click="blastHit" v-bind:class="[activeClass]">{{blast}}</div>
            <div class="c-controller--btn c-controller--btn__heal " v-on:click="healPlayer" v-bind:class="[activeHealClass]">{{heal}}</div>
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
            activeHealClass: '',
            waitingClass: false,
        }
    },
    methods: {
        attackHit: function (event) {
            var min = 3;
            var max = 12;
            var value = getRandomInt.randomInt(min, max);

            // update comment list
            store.state.playerDamage.push(value);
            store.state.damage.unshift({name: "Player", action: "damages Dragon", attack: "-" + value});

            store.state.bossLife = store.state.bossLife - value;

            store.state.playerTurnCounter++;

            if(store.state.playerTurnCounter === 3) {
                this.$data.activeClass = 'is-active';
            }

            store.state.currentTurn = "Boss";

            this.$data.waitingClass = true;

            if(store.state.bossLife > 0) {
                setTimeout(function(){
                    this.bossAttack(min, max);

                    store.state.bossTurnCounter++;

                    store.state.currentTurn = "Player";

                    this.$data.waitingClass = false;
                }.bind(this), 1000);
            }
        },
        blastHit: function (event) {
            store.state.playerTurnCounter = 0;
            this.$data.activeClass = '';

            var min = 20;
            var max = 40;
            var value = getRandomInt.randomInt(min, max);

            // update comment list
            store.state.playerDamage.push(value);
            store.state.damage.unshift({name: "Player", action: "blast attack Dragon", attack: "-" + value});

            store.state.bossLife = store.state.bossLife - value;

            store.state.playerTurnCounter = 0;

            store.state.currentTurn = "Boss";

            this.$data.waitingClass = true;

            if(store.state.bossLife > 0) {
                setTimeout(function(){
                    this.bossAttack(min, max);

                    store.state.bossTurnCounter++;

                    store.state.currentTurn = "Player";

                    this.$data.waitingClass = false;
                }.bind(this), 1000);
            }
        },
        bossAttack: function (event) {
            var min = 5;
            var max = 15;
            var value = getRandomInt.randomInt(min, max);

            store.state.bossDamage.push(value);
            store.state.damage.unshift({name: "Dragon", action: "damages Player", attack: "-" + value});

            store.state.playerLife = store.state.playerLife - value;

            if(store.state.playerLife <= 35) {
                this.activeHealClass = 'is-active';
            }
        },
        healPlayer: function (event) {
            var min = 10;
            var max = 20;
            var value = getRandomInt.randomInt(min, max);

            store.state.playerLife = store.state.playerLife + value;

            // update comment list
            store.state.damage.unshift({name: "Player", action: "heals", attack: "+" + value});

            this.activeHealClass = '';
        }
    },
    watch: {
        activeHealClass: function(val){
            return store.state.playerLife;
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
        pointer-events: none;

        &.is-active {
            background-color: #F9DC5C;
            color: $dark-grey;
            cursor: pointer;
            pointer-events: initial;
        }
    }

    .c-controller--btn__heal {
        background-color: #efefef;
        color: white;
        cursor: not-allowed;
        pointer-events: none;

        &.is-active {
            background-color: #C2EABD;
            color: $dark-grey;
            cursor: pointer;
            pointer-events: initial;
        }
    }

    .c-controller--btn__surrender {
        background-color: #011936;
        color: white;
    }
</style>
