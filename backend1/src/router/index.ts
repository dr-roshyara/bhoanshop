/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { useAuthStore } from "@/stores/auth-store";
import authMiddleware from "@/router/middleware/auth-middleware";
import restaurantRoutes from "@/router/restaurant-router";
import publicRoutes from "@/router/public-router";
export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [...publicRoutes, ...restaurantRoutes],
});
// router.addRoute(restaurantRoutes);
router.beforeEach(authMiddleware);
router.beforeEach(async (to) => {
  /**
   * This is not necessary and double but I just keep it for the
   * time being
   */
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [
    "/",
    "/login",
    "/register",
    "/about",
    "/reqpass",
    "/respass",
    "/restaurant",
  ];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.loggedInUser) {
    authStore.$patch((state) => {
      state.returnUrl = to.fullPath;
      console.log(to.fullPath);
    });
    return "/login";
  }
});
