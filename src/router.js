import Vue from 'vue'
import Router from 'vue-router'
import DashboardBase from "@/components/layout/DashboardBase.vue";
import AuthBase from "@/components/layout/AuthBase.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'base',
      redirect: '/home',
      component: DashboardBase,
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("./views/Dashboard/PageHome.vue"),
          meta: { pageTitle: 'Home' }
        },
        {
          path: "/to-do",
          name: "todo-lists",
          component: () => import("./views/Dashboard/PageToDos.vue"),
          meta: { pageTitle: 'To-do' }
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("./views/Dashboard/PageProfile.vue"),
          meta: { pageTitle: 'Profile' }
        },
        {
          path: "/help",
          name: "help",
          component: () => import("./views/Dashboard/PageHelp.vue"),
          meta: { pageTitle: 'Help'  }
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      redirect: '/auth/login',
      component: AuthBase,
      children: [
        {
          path: "/auth/login",
          name: "login",
          component: () => import("./views/Auth/PageLogin.vue"),
          meta: { pageTitle: 'Login' }
        },
        {
          path: "/auth/access",
          name: "access",
          component: () => import("./views/Auth/PageAccess.vue"),
          meta: { pageTitle: 'Access' }
        },
        {
          path: "/auth/create-account",
          name: "createAccount",
          component: () => import("./views/Auth/PageCreateAccount.vue"),
          meta: { pageTitle: 'Create Account' }
        },
      ]
    },
    {
      path: '/auth/signout',
      name: 'signout',
      redirect: '/auth/login'
    }
  ] // end of routes array
})
