import Vue from 'vue';
import App from './App.vue';
// import Message from './components/Message.vue';
import router from './router';

Vue.config.productionTip = false
Vue.config.silent = true

// Vue.component('app-message', Message);

new Vue({ el: '#app', router,render: h => h(App) })