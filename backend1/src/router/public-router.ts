/* eslint-disable prettier/prettier */
const publicRoutes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue'),
    meta: { requiresAuth: false },
  },
  // catch all redirect to home page
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/LoginForm.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Login/RegisterForm.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/reqpass',
    name: 'Requestpassword',
    component: () => import('@/views/Login/RequestPassword.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Notfound',
    component: () => import('@/views/Login/NotFound.vue'),
    meta: { requiresAuth: false },
  },
]

export default publicRoutes
