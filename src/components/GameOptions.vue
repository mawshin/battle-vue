<template>
    <div class="c-controller">
        <div class="c-controller--btn c-controller--btn__attack">{{attack}}</div>
        <div class="c-controller--btn c-controller--btn__blast">{{blast}}</div>
        <div class="c-controller--btn c-controller--btn__heal">{{heal}}</div>
        <div class="c-controller--btn c-controller--btn__surrender">{{surrender}}</div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'GameOptions',
    data() {
        return {
            attack: 'Attack',
            blast: 'Blast',
            heal: 'Heal',
            surrender: 'Give up',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
