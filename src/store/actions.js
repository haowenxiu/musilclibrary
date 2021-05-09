import { SAVEUSERINFO ,SAVETOKEN} from "./mutations-types";

export default {
  saveUserInfo({commit}, payload) {
    commit(SAVEUSERINFO,payload);
  },
  saveToken({ commit }, payload) {
    commit(SAVETOKEN,payload)
  }
};
