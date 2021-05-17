import {
  SAVEUSERINFO,
  SAVETOKEN,
  CLEARUSERINFO,
  LOCATIONNAME,
  PLAYSONGINFO,
  DELETEINPLAYSONGLIST,
  SAVECOLLECTSONGLIST,
  DELETEUSERSONGLISTBYID,
  SAVEUSERINFOANDPWD,
  SAVEUSERLIKESONGLISTID,
  DELETEUSERLIKESONGLISTID
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
  },
  savecollectsonglist({ commit }, payload) {
    commit(SAVECOLLECTSONGLIST, payload);
  },
  deleteusersonglistbyid({ commit }, payload) {
    commit(DELETEUSERSONGLISTBYID, payload);
  },
  saveuserinfoandpwd({ commit }, payload) {
    commit(SAVEUSERINFOANDPWD, payload);
  },
  saveUserLikeSongListId({ commit }, payload) {
    commit(SAVEUSERLIKESONGLISTID, payload);
  },
  deleteUserLikeSongListId({ commit }, payload) {
    commit(DELETEUSERLIKESONGLISTID, payload);
  }
};
