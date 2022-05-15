import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.prototype.x = {
//     a: 1,
//     b: 2
// }

// console.log(Vue.prototype); // $on $off $emit

// const Demo = Vue.extend({})    // VueComponent
// const d = new Demo()           // vc
// Vue.prototype.x = d


new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})