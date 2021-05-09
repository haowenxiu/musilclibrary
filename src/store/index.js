import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);
// 用vuex.store对象来记录token
const store = new Vuex.Store({
  state: {
    userInfo: {},
    token: "",
    imghead: "http://127.0.0.1/img"
  },
  actions,
  getters,
  mutations,
  modules: {}
});
export default store;
