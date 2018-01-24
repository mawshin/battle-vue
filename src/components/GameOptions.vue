<template>
    <div id="templateControl" class="c-controller">
        <!-- <game-buttons></game-buttons> -->
        <div class="c-controller">
            <div class="c-controller--btn c-controller--btn__attack" v-on:click="attackHit">{{attack}}</div>
            <div class="c-controller--btn c-controller--btn__blast">{{blast}}</div>
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
        }
    },
    methods: {
        attackHit: function (event) {
            var min = 10;
            var max = 35;
            var value = getRandomInt.randomInt(min, max);
            /*console.log(hitCount);*/

            // update comment list
            store.state.damage.push(value);

            store.state.bossLife = store.state.bossLife - value;

            store.state.currentTurn = "Boss";

            setTimeout(function(){
                bossAttack.attackPower(min, max);

                store.state.currentTurn = "Player";
            }, 3000);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .c-controller {
        margin: 3rem auto;
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
        background-color: #F9DC5C;
        color: $dark-grey;
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
