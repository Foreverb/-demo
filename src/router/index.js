import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/",
        name: "",
        redirect: "/login"
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ("../views/register.vue")
    },
    {
        path: "/botnav",
        name: "botnav",
        component: () =>
            import ("../views/botNav.vue"),
        children: [
            {
                path: "/",
                name: "",
                redirect: "/botnav/index"
            },
            {
                path: "index",
                name: "index",
                component: () =>
                    import ("../views/index.vue")
            },
            {
                path: "mine",
                name: "mine",
                meta: {
                    requireAuth: true//当有这个字段的时候，说明这个路由页面需要登录权限
                },
                component: () =>
                    import ("../views/mine.vue")
            },
            {
                path: "car",
                name: "car",
                meta: {
                    requireAuth: true
                },
                component: () =>
                    import ("../views/car.vue")
            },
            {
                path: "search",
                name: "search",
                component: () =>
                    import ("../views/search.vue")
            },
            {
                path: "list",
                name: "list",
                component: () =>
                    import ("../views/list.vue")
            },
        ]    
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;