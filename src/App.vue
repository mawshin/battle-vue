<template>
    <div id="app">
        <Health/>
        <GameOptions/>
    </div>
</template>

<script>
/* eslint-disable */
import Health from './components/Health';
import GameOptions from './components/GameOptions';


export default {
    name: 'App',
    components: {
        GameOptions,
        Health,
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
</style>
