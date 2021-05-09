import { SAVEUSERINFO, SAVETOKEN } from "./mutations-types";

export default {
  [SAVEUSERINFO](state, payload) {
    state.userInfo = payload;
  },
  [SAVETOKEN](state, payload) {
    state.token = payload;
  }
};
