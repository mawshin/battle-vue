<template>
    <div id="app">
        <Health/>
        <GameOptions/>
        <Commentary/>

        <transition name="fade">
            {{lifeCounter}}
            <div class="c-modal" v-if="winShow">
                <div class="c-modal--content">
                    <p>Win</p>
                    <button v-on:click="playAgain">Play again</button>
                </div>
            </div>

            <div class="c-modal" v-if="lossShow">
                <div class="c-modal--content">
                    <p>LOSE</p>
                    <button v-on:click="playAgain">Play again</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
/* eslint-disable */
import Health from './components/Health';
import GameOptions from './components/GameOptions';
import Commentary from './components/Commentary';

import store from './store';

export default {
    name: 'App',
    store,
    components: {
        GameOptions,
        Health,
        Commentary,
    },
    data() {
        return {
            winShow: false,
            lossShow: false,
        }
    },
    methods: {
        playAgain: function (event) {
            document.querySelector(".c-comment--list").innerHTML = "";
            document.querySelector(".c-controller").classList.remove("is-disabled");

            store.state.damage.splice(1, 1);
            store.state.playerDamage = [];
            store.state.bossDamage = [];
            store.state.bossLife = 100;
            store.state.playerLife = 100;
            store.state.currentTurn = "Player";
            store.state.playerTurnCounter = 0;
            store.state.bossTurnCounter = 0; 

            this.lossShow = false;
            this.winShow = false;
        }
    },
    computed: {
        lifeCounter () {
            if(this.$store.state.bossLife <= 0) {
                this.$store.state.bossLife = 0;
                this.winShow = true;
            } else if (this.$store.state.playerLife <= 0) {
                this.$store.state.playerLife = 0;
                this.lossShow = true;
            }
        }
    }
};

</script>

<style lang="scss">
@import "~@/style/_normalize.scss";

// ripped CSS4 vars out of color map
:root {
    --bar-width: $health-width;
}

* {
    box-sizing: border-box;

    &:before {
        box-sizing: inherit;
    }

    &:after {
        box-sizing: inherit;
    }
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0 1rem;
}

.c-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &:before {
        content: "";
        position: absolute;
        background-color: #333;
        opacity: 0.4;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
}

.c-modal--content {
    @include absolute-center;

    background-color: white;
    padding: 1rem 2rem;
    border-radius: 20px;

    p {
        font-size: 2rem;
    }

    button {
        font-size: 1rem;
    }
}
</style>
