import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import VueLazyLoad from "vue-lazyload";
import Api from "network/api";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import "../theme/index.css";

// Vue.forceUpdate();
Vue.use(ElementUI);
Vue.use(VueLazyLoad);
Vue.config.productionTip = false;
Vue.prototype.$api = Api;
// Vue.prototype.$EventBus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
