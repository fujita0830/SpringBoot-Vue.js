import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Index.vue";
import RouterTest from "@/views/RouterTest.vue";
import NotFound from "@/views/NotFound.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/routerTest",
      name: "routerTest",
      component: RouterTest
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
