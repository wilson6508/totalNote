import Vue from 'vue'
import App from './App.vue'
import store from './store' // 正確寫法'./store/index', index.js腳手架認識會優先找, 可簡寫
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    store,
})