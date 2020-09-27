import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue" 
import pageGame from "../views/game.vue"

Vue.use(VueRouter);

const routes = [
 
  {
    path: "/login",
    name: "login",
    component: login

  },
  {
    path: "/game",
    name:"game",
    component: pageGame
  }
];

const router = new VueRouter({
  routes
});

export default router;
