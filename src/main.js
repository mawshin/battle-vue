// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
// import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App';


Vue.use(Vuex);

/*Vue.use(VueRouter);

let router = new VueRouter();

router.map({
    '/': {
        name: 'home',
        component: require('./App')
    }
});

router.start(App, 'body');*/

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>',
});

/*var data = { counter: 0 }

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return {
		counter: 0
	}
  }
})

new Vue({
  el: '#example-2'
})*/
/*
const Header = require('./components/GameOptions.vue');
const header = new Vue({
  el: '#header',
  components: {
    Header,
  },
  data: {
    text: 'New header text',
  },
  template: '<header>{{text}}</header>',
});*/

var getRandomInt = { 
    randomInt : function(min, max) { 
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    } 
}

/*Vue.component('game-buttons', {
	template: `<div class="c-controller">
		<div class="c-controller--btn c-controller--btn__attack" v-on:click="attackHit">{{attack}}</div>
		<div class="c-controller--btn c-controller--btn__blast">{{blast}}</div>
		<div class="c-controller--btn c-controller--btn__heal">{{heal}}</div>
		<div class="c-controller--btn c-controller--btn__surrender">{{surrender}}</div>
		</div>`,
	// data is technically a function, so Vue won't
	// complain, but we return the same object
	// reference for each component instance
	data: function () {
		return {
			attack: 'Attack',
		    blast: 'Blast',
		    heal: 'Heal',
		    surrender: 'Give up',
		}
    },
    methods: {
        attackHit: function (event) {
            var value = getRandomInt.randomInt(10, 35);
            /*console.log(hitCount);* /

            // update comment list
            store.state.damage.push(value);

            store.state.bossLife = store.state.bossLife - value;
            document.getElementsByClassName("jsBossLife").innerText = store.state.bossLife;
        }
    }
})

new Vue({
    el: '#templateControl',
    components: { buttons: GameOptions },
    template: '<game-buttons/>',
})*/

/*Vue.component('comments', {
	template: `<ul class="c-comment--list">
            <li v-for="hit in this.$store.state.damage">{{ hit }}</li>
        </ul>`,
	store,
	data: function () {
		return {
			name: 'Player',
			boss: 'Dragon'
		}
    }
})

new Vue({
    el: '#templateComments',
    components: { comment: Commentary },
    template: '<comments/>',
})*/