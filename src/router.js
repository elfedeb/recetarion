import Vue from "vue";
import Router from "vue-router";
import MainLayout from "@/components/layout/MainLayout.vue";

Vue.use(Router);

var router = new Router({
    // mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "base",
            redirect: "/home",
            component: MainLayout,
            children: [{
                path: "/home",
                name: "home",
                component: () =>
                    import ("./views/PageHome.vue"),
                meta: {
                    pageTitle: "Home",
                    requiresAuth: true
                }
            }]
        }, ] // end of routes array
});

export default router;