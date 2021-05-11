import { get, post } from "./http";

/* 网易云主页  https://autumnfish.cn/homepage/block/page */

/**
 * api地址管理
 */

const banners = () => get("/homepage/block/page");
// 登录
const login = p => get("/user/login", p);
// 注册
const register = p => post("/user/login", p);

// 歌手列表
const singerList = () => get("/singer/getsinger");
// 歌手信息
const singerdetail = p => get("/singer/getsinger", p);
export default {
  banners,
  login,
  register,
  singerList,
  singerdetail
};
