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
    state.collectsonglist = [];
    state.saveUserLikeSongListId = [];
    // state.saveUserInfo = {};
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
    console.log("要删除的歌曲编号 : " + payload);
    const songinfo = state.playsonginfo.length;
    for (let i = 0; i < songinfo; i++) {
      console.log("歌曲编号：：" + state.playsonginfo[i].songnum);
      console.log(i);
      if (state.playsonginfo[i].songnum === payload) {
        console.log(
          "要删除的歌曲编号 : " + i + " " + state.playsonginfo[i].songnum
        );
        state.playsonginfo.splice(i, 1);
      }
    }
  },
  [SAVECOLLECTSONGLIST](state, payload) {
    // state.collectsonglist.push(payload);
    const length = state.collectsonglist;
    if (state.collectsonglist.indexOf(payload) < 0) {
      console.log("不存在");
      state.collectsonglist.push(payload);
    } else {
      console.log("存在");
    }
  },
  [DELETEUSERSONGLISTBYID](state, payload) {
    console.log("要删除的id：" + payload);
    const info = state.collectsonglist;
    info.forEach((item, index) => {
      if (item === payload) {
        console.log("youxiangtong");
        state.collectsonglist.splice(index, 1);
      }
    });
  },
  [SAVEUSERINFOANDPWD](state, payload) {
    console.log(payload);
    state.saveUserInfo = payload;
  },
  [SAVEUSERLIKESONGLISTID](state, payload) {
    // state.saveUserLikeSongListId = payload
    const length = state.saveUserLikeSongListId;
    if (state.saveUserLikeSongListId.indexOf(payload) < 0) {
      console.log("不存在");
      state.saveUserLikeSongListId.push(payload);
    } else {
      console.log("存在");
    }
  },
  [DELETEUSERLIKESONGLISTID](state, payload) {
    console.log("要删除的id：" + payload);
    const info = state.saveUserLikeSongListId;
    info.forEach((item, index) => {
      if (item === payload) {
        console.log("youxiangtong");
        state.saveUserLikeSongListId.splice(index, 1);
      }
    });
  }
};
