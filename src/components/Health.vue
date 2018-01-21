<template>
    <div class="c-health">
        <div class="c-health--player">
            <div class="c-health--name">Player</div>
            <div class="c-health--bar">100%</div>
        </div>
        <div class="c-health--dragon">
            <div class="c-health--name">Dragon</div>
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
            test: 'Welcome to Your Vue.js App',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .c-health--player {
        font-weight: bold;
        font-size: 18px;
    }
</style>
