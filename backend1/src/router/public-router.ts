import HomeView from "@/views/HomeView.vue";
const publicRoutes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/AboutView.vue"),
  },
  // catch all redirect to home page
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/LoginForm.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Login/RegisterForm.vue"),
  },
  {
    path: "/respass",
    name: "Resetpassword",
    component: () => import("@/views/Login/ResetPassword.vue"),
  },
  {
    path: "/reqpass",
    name: "Requestpassword",
    component: () => import("@/views/Login/RequestPassword.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "Notfound",
    component: () => import("@/views/Login/NotFound.vue"),
  },
];
export default publicRoutes;
