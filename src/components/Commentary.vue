<template>
    <div id="templateComments" class="c-comment">
        <ul class="c-comment--list">
            <li v-for="key in attack">
                {{ key.name }} attacks: <strong>{{ key.attack }} hits</strong>
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
            current: '',
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
            return this.$store.state.currentTurn;
        }
    },
    watch: {
        turnCounter (newCount, oldCount) {
            console.log(newCount);
            if(newCount === "Boss") {
                return this.current = "Boss";
            } else {
                return this.current = "Player";
            }
            

            // return `${newCount}`;
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
</style>
