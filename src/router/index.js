import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"

// 1. 注册路由插件
Vue.use(VueRouter)

// 路由规则
const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about/:id",
    name: "About",
    component: () => import("@/views/About.vue")
  }
];

// 2.创建router对象
const router = new VueRouter({
  routes
});

export default router