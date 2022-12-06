import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./../views/Dashboard.vue";
import Login from "./../views/Login/Login.vue";
import Home from "./../views/Home.vue";
import ResetPassword from "../views/Login/ResetPassword.vue";
import RequestPassword from "../views/Login/RequestPassword.vue";
import Notfound from "./../views/Login/Notfound.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/reset-password",
        name: "Reset-password",
        component: ResetPassword,
    },
    {
        path: "/request-password",
        name: "Request-password",
        component: RequestPassword,
    },
    {
        path: "/:pathMatch(.*)",
        name: "Notfound",
        component: "NotFound",
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
