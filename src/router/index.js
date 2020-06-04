import Vue from "vue";
import Router from "vue-router";
import index from "@/view/index";
import minglu from "@/view/minglu";
import car from "@/view/car";
import register from "@/view/register";
import login from "@/view/login";
import dgzn from "@/view/dgzn";
import jptj from "@/view/jptj";
import xpss from "@/view/xpss";
import detail from "@/view/detail";
import jiesuan from "@/view/jiesuan";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/detail",
      name: "detail",
      component: detail
    },
    {
      path: "/jiesuan",
      name: "jiesuan",
      component: jiesuan
    },
    {
      path: "/dgzn",
      name: "dgzn",
      component: dgzn
    },
    {
      path: "/jptj",
      name: "jptj",
      component: jptj
    },
    {
      path: "/xpss",
      name: "xpss",
      component: xpss
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/",
      redirect: "index",
      component: index
    },
    {
      path: "/minglu",
      name: "minglu",
      component: minglu
    },
    {
      path: "/index",
      name: "index",
      component: index
    },
    {
      path: "/car",
      name: "car",
      component: car
    }
  ]
});
