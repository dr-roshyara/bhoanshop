const userRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/respass',
    name: 'Resetpassword',
    component: () => import('@/views/Login/ResetPassword.vue'),
    meta: { requiresAuth: true },
  },
]
export default userRoutes
