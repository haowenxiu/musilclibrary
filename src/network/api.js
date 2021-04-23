import { get, post } from "./http";

/* 网易云主页  https://autumnfish.cn/homepage/block/page */

export const banners = () => get("/homepage/block/page");
