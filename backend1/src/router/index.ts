/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { useAuthStore } from "@/stores/auth-store";
export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  linkActiveClass: "active",
  routes: [
    // catch all redirect to home page
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
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
  ],
});
router.beforeEach(async (to) => {
  // clear alert on route change
  // const alertStore = useAlertStore();
  // eslint-disable-next-line prettier/prettier
  // alertStore.clear();
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [
    "/",
    "/login",
    "/register",
    "/about",
    "/reqpass",
    "/respass",
  ];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.loggedUser) {
    authStore.$patch((state) => {
      state.returnUrl = to.fullPath;
      console.log(to.fullPath);
    });
    return "/login";
  }
});
