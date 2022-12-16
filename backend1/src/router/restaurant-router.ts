/* eslint-disable prettier/prettier */
import RegisterRestaurant from '@/views/Restaurant/RegisterRestaurant.vue'
const restaurantRoutes = [
  {
    path: '/restaurant',
    name: 'restaurant',
    component: RegisterRestaurant,
    meta: { requiresAuth: true },
  },
]
export default restaurantRoutes
