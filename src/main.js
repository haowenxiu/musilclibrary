import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import VueLazyLoad from "vue-lazyload";

// import "element-ui/lib/theme-chalk/index.css";
import "../theme/index.css"

Vue.use(ElementUI);
Vue.use(VueLazyLoad);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
