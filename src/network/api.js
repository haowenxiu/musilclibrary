import { get, post } from "./http";

/* 网易云主页  https://autumnfish.cn/homepage/block/page */

/**
 * api地址管理
 */
/**
 *    用户相关
 **/
// 登录
const login = p => get("/user/login", p);
// 注册
const register = p => post("/user/login", p);
// 登录之后 获取用户收藏歌单
const getUserCollectSongList = p => get("/user/collectsonglist", p);
// 用户收藏歌单
const collectsonglist = p => post("/user/insertcollectsonglist", p);
// 用户取消收藏歌单
const cancelsonglist = p => post("/user/deletecollectsonglist", p);
// 用户添加喜欢歌曲
const collectlikesong = p => post("/user/insertlikesong", p);
// 用户删除喜欢歌曲
const cancellikesong = p => post("/user/deletelikesong", p);
// 用户喜欢歌曲列表
const getuserlikesonglist = p => get("/user/selectlikesonglist", p);
/**
 *  非用户相关
 * */

// 获取轮播图
const banners = () => get("/home/banner/");
// 歌手列表
const singerList = p => get("/singer/getsinger", p);
// 歌手信息
const singerdetail = p => get("/singer/singerdetail", p);
// 歌单信息
const getsonglist = p => get("/home/songlist", p);
const gethomesonglist = () => get("/home/homesonglist");
// 单个歌单信息
const getsonglistbyid = p => get("home/songlistbyid", p);

export default {
  login,
  register,
  banners,
  singerList,
  singerdetail,
  getsonglist,
  gethomesonglist,
  getsonglistbyid,
  getUserCollectSongList,
  collectsonglist,
  cancelsonglist,
  collectlikesong,
  cancellikesong,
  getuserlikesonglist 
};
