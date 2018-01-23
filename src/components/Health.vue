<template>
    <div class="c-health">
        <div class="c-health--player">
            <div class="c-health--name">{{name}}</div>
            <div class="c-health--bar" v-bind:style="{ '--bar-width': playerLifeLeft + '%' }">{{playerLifeLeft}}</div>
        </div>
        <div class="c-health--dragon">
            <div class="c-health--name">{{boss}}</div>
            <div class="c-health--bar" v-bind:style="{ '--bar-width': bossLifeLeft + '%' }">{{bossLifeLeft}}</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import store from '../store';

export default {
    name: 'Health',
    store,
    data() {
        return {
            name: 'Player',
            boss: 'Dragon',
            playerLife: this.$store.state.playerLife,
            bossLife: this.$store.state.bossLife,
        }
    },
    computed: {
        bossLifeLeft () {
            return this.$store.state.bossLife;
        },
        playerLifeLeft () {
            return this.$store.state.playerLife;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@function width($width) {
    @return var(--bar-#{$width});
}

    .c-health {
        @include cf;

        font-weight: bold;
        font-size: 1.125rem;

        .c-health--bar {
            position: relative;
            width: 100%;
            color: $dark-grey;
            padding: 0.3125rem 0.625rem;
            margin-top: 0.5rem;
            border: 1px solid $dark-grey;

            &:before {
                content: "";
                width: var(--bar-width);
                height: 100%;
                background-color: #54b420;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
            }
        }

        .c-health--player {
            float: left;
            width: 20%;
        }

        .c-health--dragon {
            float: right;
            width: 20%;

            .c-health--bar {
                &:before {
                    background-color: #b42020;
                    width: var(--bar-width);
                }
            }
        }
    }

    
</style>
