import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/todo",
      name: "todo-lists",
      component: () =>
        import(/* webpackChunkName: "todo-lists" */ "./views/ToDos.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "profile" */ "./views/ProfilePage.vue")
    },
    {
      path: "/help",
      name: "help",
      component: () =>
        import(/* webpackChunkName: "help" */ "./views/HelpPage.vue")
    }
  ]
})
