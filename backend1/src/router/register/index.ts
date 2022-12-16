/* eslint-disable prettier/prettier */
//import app
import type { App } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth-store'
import authMiddleware from '@/router/middleware/auth-middleware'
import restaurantRoutes from '@/router/restaurant-router'
import publicRoutes from '@/router/public-router'
import userRoutes from '@/router/user-router'
import guard from '@/router/register/guard'
export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [...publicRoutes, ...restaurantRoutes, ...userRoutes],
})
export function setupRouter(app: App) {
  app.use(router)
  guard(router)

  return
  // here router will be setup.
}
// router.addRoute(restaurantRoutes);
// router.beforeEach(authMiddleware)
// router.beforeEach(async (to) => {
//   /**
//    * This is not necessary and double but I just keep it for the
//    * time being
//    */
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/', '/login', '/register', '/about', '/reqpass', '/respass', '/restaurant']
//   const authRequired = !publicPages.includes(to.path)
//   const authStore = useAuthStore()

//   if (authRequired && !authStore.authUser) {
//     authStore.$patch((state) => {
//       state.returnUrl = to.fullPath
//       console.log(to.fullPath)
//     })
//     return '/login'
//   }
// })
