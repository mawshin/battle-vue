<template>
    <div id="templateControl" class="c-controller">
        <!-- <div class="c-controller--btn c-controller--btn__attack jsAttack" v-on:click="attackHit">{{attack}}</div>
        <div class="c-controller--btn c-controller--btn__blast jsBlast">{{blast}}</div>
        <div class="c-controller--btn c-controller--btn__heal jsHeal">{{heal}}</div>
        <div class="c-controller--btn c-controller--btn__surrender jsRun">{{surrender}}</div> -->

        <game-buttons></game-buttons>
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

export default {
    name: 'GameOptions',
    props: ['hitCount'],
    data() {
        return {
            attack: 'Attack',
            blast: 'Blast',
            heal: 'Heal',
            surrender: 'Give up',
            hitCount: '',
        }
    },
    methods: {
        attackHit: function (event) {
            var value = getRandomInt.randomInt(5, 20);
            console.log(this.hitCount);
            this.hitCount = value;
            console.log(this.hitCount);
            alert(value);
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
