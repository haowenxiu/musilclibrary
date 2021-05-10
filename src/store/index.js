import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const USER_KEY = "hm-toutiao-m-user";
// 用vuex.store对象来记录token
const store = new Vuex.Store({
  state: {
    userInfo: {},
    token: "",
    imghead: "http://127.0.0.1/music/pic"
  },
  actions,
  getters,
  mutations,
  modules: {},
  plugins: [
    createPersistedState({
      key: USER_KEY
    })
  ]
});
export default store;
