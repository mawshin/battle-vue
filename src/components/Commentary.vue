<template>
    <div id="templateComments" class="c-comment">

        <transition name="fade">
            {{turnCounter}}
            <div class="c-notify" v-if="show">
                <div>
                    <p>Blast enabled!</p>
                </div>
            </div>
        </transition>

        <ul class="c-comment--list">
            <li v-for="key in attack">
                {{ key.name }} {{ key.action }}: <strong>{{ key.attack }}</strong>
            </li>
            <!-- <li v-for="bHit in bossHit">Dragon attacks Player: <strong>{{ bHit }}</strong></li> -->
        </ul>
        <!-- <comments></comments> -->
    </div>
</template>

<script>
/* eslint-disable */

import store from '../store';

export default {
    name: 'Comment',
    store,
    data() {
        return {
            attack: this.$store.state.damage,
            playerHit: this.$store.state.playerDamage,
            bossHit: this.$store.state.bossDamage,
            activeClass: '',
            show: false,
            showHeal: false,
            /*objectItems: { 
                playerHit: this.$store.state.damage, 
                bossHit: this.$store.state.bossDamage 
            }*/
            /*name: 'Player',
            boss: 'Dragon',
            items: [
              { message: 'Foo' },
              { message: 'Bar' }
            ]*/
        }
    },
    computed: {
        turnCounter () {
            if(this.$store.state.playerTurnCounter === 3) {
                this.show = true;
            }

            setTimeout(function(){
                this.$data.show = false;
            }.bind(this), 2500);
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .c-comment--list {
        list-style: none;
        padding-left: 0;
        margin: 0;
        max-height: 200px;
        overflow-y: scroll; 

        li {
            padding: 0.3125rem;

            &:nth-child(odd) {
                background-color: #efefef;
            }

            &:nth-child(even) {
                background-color: #dedede;
            }
        }
    }

    .c-notify {
        color: $red;
        font-weight: bold;
        transition: opacity 0.5s;
    }

    .c-notify--heal {
        color: #C2EABD;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
