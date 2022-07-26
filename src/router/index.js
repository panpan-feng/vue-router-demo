import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import Layout from "@/views/Layout.vue"

// 1. 注册路由插件
Vue.use(VueRouter)

// 路由规则
const routes = [
  // {
  //   path: "/",
  //   name: "Layout",
  //   component: Layout,
  //   children: [{
  //       path: "",
  //       name: "Home",
  //       component: Home
  //     },
  //     {
  //       path: "/about/:id",
  //       name: "About",
  //       component: () => import("@/views/About.vue")
  //     }
  //   ]
  // },
  {
    path: "/",
    name: "Layout",
    component: Layout
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about/:id",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404.vue")
  }

];

// 2.创建router对象
const router = new VueRouter({
  mode: "history",
  routes
});

export default router