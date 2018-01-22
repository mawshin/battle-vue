<template>
    <div class="c-health">
        <div class="c-health--player">
            <div class="c-health--name">{{name}}</div>
            <div class="c-health--bar">100%</div>
        </div>
        <div class="c-health--dragon">
            <div class="c-health--name">{{boss}}</div>
            <div class="c-health--bar">100%</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'Health',
    data() {
        return {
            name: 'Player',
            boss: 'Dragon',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
            border: 1px solid #272727;
            color: white;
            padding: 0.3125rem 0.625rem;

            &:before {
                content: "";
                width: var(--bar-width);
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
