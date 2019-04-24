import Vue from "vue";
import Router from "vue-router";
import DashboardBase from "@/components/layout/DashboardBase.vue";
import AuthBase from "@/views/Auth/AuthBase.vue";
import Auth from '@aws-amplify/auth';
import { AmplifyEventBus } from 'aws-amplify-vue';
import store from './store'

Vue.use(Router);

var router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "base",
      redirect: "/home",
      component: DashboardBase,
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("./views/Dashboard/PageHome.vue"),
          meta: { pageTitle: "Home", requiresAuth: true }
        },
        {
          path: "/to-do",
          name: "todo-lists",
          component: () => import("./views/Dashboard/PageToDos.vue"),
          meta: { pageTitle: "To-do", requiresAuth: true }
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("./views/Dashboard/PageProfile.vue"),
          meta: { pageTitle: "Profile", requiresAuth: true }
        },
        {
          path: "/help",
          name: "help",
          component: () => import("./views/Dashboard/PageHelp.vue"),
          meta: { pageTitle: "Help", requiresAuth: true }
        },
        {
          path: "/help/faq",
          name: "faqs",
          component: () => import("./views/Dashboard/PageHelpFAQ.vue"),
          meta: { pageTitle: "Help > FAQ", requiresAuth: true }
        },
        {
          path: "/help/faq/:tag",
          component: () => import("./views/Dashboard/PageHelpFAQ.vue"),
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      path: "/auth",
      name: "auth",
      redirect: "/auth/login",
      component: AuthBase,
      children: [
        {
          path: "/auth/login",
          name: "login",
          component: () => import("./views/Auth/PageLogin.vue"),
          beforeEnter: (to, from, next) => {
            Auth.currentAuthenticatedUser().then(user => {
              next('/')
            }).catch((e) => {
              next();
            });
          },
          meta: { pageTitle: "Login", requiresAuth: false }
        },
        {
          path: "/auth/new-password-required",
          name: "newPassword",
          component: () => import("./views/Auth/PageNewPasswordRequired.vue"),
          meta: { pageTitle: "New Password Required", requiresAuth: false }
        },
        {
          path: "/auth/forgot-password",
          name: "forgotPassword",
          component: () => import("./views/Auth/PageForgotPassword.vue"),
          meta: { pageTitle: "New Password Required", requiresAuth: false }
        },
        {
          path: "/auth/reset-password",
          name: "forgotPasswordSubmit",
          component: () => import("./views/Auth/PageForgotPasswordSubmit.vue"),
          meta: { pageTitle: "New Password Required", requiresAuth: false }
        }
      ]
    },
    {
      path: "/auth/signout",
      name: "signout",
      beforeEnter: async (to, from, next) => {
        try {
          await Auth.signOut();
          store.commit('clearUser');
          next('/auth/login');
        } catch(e) {
          console.log('Unable to log out');
          console.log(e);
        }
      }
    }
  ] // end of routes array
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser().then(data => {
      next();
    }).catch((e) => {
      console.log(e);
      next({
        path: '/auth',
        query: {
          redirect: to.fullPath,
        }
      });
    });
  }
  next();
});

export default router;
