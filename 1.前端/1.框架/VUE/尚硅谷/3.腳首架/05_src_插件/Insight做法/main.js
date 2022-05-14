import "babel-polyfill";
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Units from "@/mixins/Units";
import "bootstrap-vue/dist/bootstrap-vue.css";
import IconBase from "feather-icons-vue";
import "@/css/opview.css";
import "@/plugins/bootstrapPlugins";

Vue.mixin(Units);
Vue.use(IconBase);

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["ion-icon"];
Vue.config.debug = process.env.VUE_APP_PENV !== "outside" && process.env.VUE_APP_PENV !== "outsideTest";
Vue.config.devtools = process.env.VUE_APP_PENV !== "outside" && process.env.VUE_APP_PENV !== "outsideTest";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
