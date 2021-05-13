import {
  SAVEUSERINFO,
  SAVETOKEN,
  CLEARUSERINFO,
  GETLOCALSTORAGE,
  LOCATIONNAME,
  PLAYSONGINFO,
  DELETEINPLAYSONGLIST
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
    localStorage.removeItem(USER_KEY).userInfo;
    localStorage.removeItem(USER_KEY).token;
  },
  [LOCATIONNAME](state, payload) {
    state.locationname = payload;
  },
  [PLAYSONGINFO](state, payload) {
    let count = 0;
    const length = state.playsonginfo.length;
    for (let index = 0; index < length; index++) {
      if (state.playsonginfo[index].songname === payload.songname) {
        count++;
      }
    }
    if (count <= 0) {
      state.playsonginfo.push(payload);
    }
  },
  [DELETEINPLAYSONGLIST](state, payload) {
    console.log(payload);
    const songinfo = state.playsonginfo;
    songinfo.forEach((item, index) => {
      console.log(item.songnum);
      console.log(index);
      // if (item[index].songnum == payload) {
      //   state.playsonginfo.splice(index, 1);
      // }
    });
  }
};
