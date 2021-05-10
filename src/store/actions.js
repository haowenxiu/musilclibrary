import {
  SAVEUSERINFO,
  SAVETOKEN,
  CLEARUSERINFO,
  GETLOCALSTORAGE
} from "./mutations-types";

export default {
  saveUserInfo({ commit }, payload) {
    commit(SAVEUSERINFO, payload);
  },
  saveToken({ commit }, payload) {
    commit(SAVETOKEN, payload);
  },
  clearUserInfo({ commit }) {
    commit(CLEARUSERINFO);
  },
};
