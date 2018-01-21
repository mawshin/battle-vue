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

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
