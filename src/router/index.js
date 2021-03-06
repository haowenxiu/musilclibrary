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
  },
  {
    path: "/singerdetail/:singerid",
    component: () => import("views/home/songer/singerdetail/SingerDetail")
  },
  {
    path: "/songlistdetail/:songlistid",
    component: () =>
      import("../views/home/songlist/songlistdetail/SongListDetail.vue")
  },
  {
    path: "/Mylovemusiclist",
    component: () =>
      import("../views/usermusicmenu/mylikemusic/MylikeMusic.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/Musicnetworklocation",
    component: () =>
      import(
        "../views/usermusicmenu/musicnetworklocation/MusicNetworkLocation.vue"
      ),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/changeinfo",
    component: () =>
      import("../views/usercenter/changeuserinfo/ChangeUserInfo.vue"),
    meta: {
      requireAuth: true
    }
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
  console.log(to);
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
router.afterEach((to, from, next) => {
  window, scrollTo(0, 0);
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
