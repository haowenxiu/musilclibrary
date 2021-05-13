import {
  SAVEUSERINFO,
  SAVETOKEN,
  CLEARUSERINFO,
  LOCATIONNAME,
  GETLOCALSTORAGE,
  PLAYSONGINFO,
  DELETEINPLAYSONGLIST
} from "./mutations-types";

export default {
  saveUserInfo({ commit }, payload) {
    commit(SAVEUSERINFO, payload);
  },
  saveToken({ commit }, payload) {
    commit(SAVETOKEN, payload);
  },
  locationname({ commit }, payload) {
    commit(LOCATIONNAME, payload);
  },
  clearUserInfo({ commit }) {
    commit(CLEARUSERINFO);
  },
  locationname({ commit }, payload) {
    commit(LOCATIONNAME, payload);
  },
  playsonginfo({ commit }, payload) {
    commit(PLAYSONGINFO, payload);
  },
  deleteplaysonglist({ commit }, payload) {
    commit(DELETEINPLAYSONGLIST, payload);
  }
};
