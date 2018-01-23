<template>
    <div id="templateComments" class="c-comment">
        <ul class="c-comment--list">
            <li v-for="hit in damage">{{ hit }}</li>
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
            damage: this.$store.state.damage
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
