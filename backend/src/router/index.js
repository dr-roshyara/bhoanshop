import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("./../views/Dashboard.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("./../views/Login/Login.vue"),
    },
    {
        path: "/resetpassword",
        name: "Resetpassword",
        component: () => import("./../views/Login/ResetPassword.vue"),
    },
    {
        path: "/requestpassword",
        name: "Requestpassword",
        component: () => import("./../views/Login/RequestPassword.vue"),
    },
    {
        path: "/:pathMatch(.*)",
        name: "Notfound",
        component: () => import("./../views/Login/NotFound.vue"),
    },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});
export default router;
