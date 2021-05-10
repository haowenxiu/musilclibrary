import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const that = this;
const routes = [
  {
    path: "",
    redirect: "/homePage"
  },
  {
    path: "/homePage",
    component: () => import("views/home/HomePage.vue") //主页面
  },
  {
    path: "/usercenter",
    component: () => import("views/usercenter/UserCenter"), //主页面
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/DynamicPark",
    component: () => import("views/musiclife/dynamic/DynamicPark") //用户中心
  },
  {
    path: "/RankingList",
    component: () => import("views/musiclife/rankinglist/RankingList") //动态乐园
  },
  {
    path: "/loginpage",
    component: () => import("views/login/LoginRegister") //音乐排行榜
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "link-active"
});

router.beforeEach((to, from, next) => {
  // router.app.$store.state.isLogin;
  console.log(router.app.$options.store.state);
  const local = router.app.$options.store.state;
  if (to.meta.requireAuth) {
    if (local.token !== null && local.token !== "") {
      next();
    } else {
      next({
        path: "/loginpage",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
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
