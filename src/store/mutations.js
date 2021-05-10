import {
  SAVEUSERINFO,
  SAVETOKEN,
  CLEARUSERINFO,
  GETLOCALSTORAGE
} from "./mutations-types";
export const USER_KEY = "hm-toutiao-m-user";
export default {
  [SAVEUSERINFO](state, payload) {
    state.userInfo = payload;
  },
  [SAVETOKEN](state, payload) {
    state.token = payload;
  },
  [CLEARUSERINFO](state) {
    state.userInfo = {};
    state.token = "";
    localStorage.removeItem(USER_KEY);
  },
};
