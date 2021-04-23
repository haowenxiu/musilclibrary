import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const HomePage = () => import("views/home/HomePage.vue"); //主页面
const UserCenter = () => import("views/usercenter/UserCenter"); //用户中心
const DynamicPark = () => import("views/musiclife/dynamic/DynamicPark"); //动态乐园
const RankingList = () => import("views/musiclife/rankinglist/RankingList"); //音乐排行榜

const routes = [
  {
    path: "",
    redirect: "/homePage"
  },
  {
    path: "/homePage",
    component: HomePage
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
