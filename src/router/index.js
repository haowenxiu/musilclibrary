import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("views/home/Home.vue"); //主页面
const UserCenter = () => import("views/usercenter/UserCenter"); //用户中心
const DynamicPark = () => import("views/musiclife/dynamic/DynamicPark"); //动态乐园
const MusicHall = () => import("views/musiclife/musichall/MusicHall"); //音乐馆
const RankingList = () => import("views/musiclife/rankinglist/RankingList"); //音乐排行榜

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/usercenter",
    component: UserCenter
  },
  {
    path: "/DynamicPark",
    component: DynamicPark
  },
  {
    path: "/MusicHall",
    component: MusicHall
  },
  {
    path: "/RankingList",
    component: RankingList
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "link-active"
});

export default router;

//push
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};
//replace
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err);
};
