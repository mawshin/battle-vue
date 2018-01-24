<template>
    <div id="templateComments" class="c-comment">
        <ul class="c-comment--list">
            <li v-for="hit in playerHit">{{ hit }}</li>
            <li v-for="bHit in bossHit">{{ bHit }}</li>
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
            playerHit: this.$store.state.damage,
            bossHit: this.$store.state.bossDamage
            /*name: 'Player',
            boss: 'Dragon',
            items: [
              { message: 'Foo' },
              { message: 'Bar' }
            ]*/
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
