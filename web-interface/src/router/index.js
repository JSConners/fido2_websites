import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from "@/stores/authStore";
import KeycloakService from '../services/keycloak';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requiresAuth : false
      },
      component: HomeView
      
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        requiresAuth : true
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/unauthorized',
      name: 'unauthorized',
      meta: {
        requiresAuth : false
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UnAuthorized.vue')
    }
  ]
})
// const store = useAuthStore()

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  if (to.meta.requiresAuth && store.authenticated){
    next()
  }else if (!to.meta.requiresAuth){
    next()
  }else{
    KeycloakService.CallLogin()
  }
})

// router.beforeEach((to) => {
//   const store = useAuthStore()
//   if (to.meta.requiresAuth && !store.authenticated) return '/unauthorized'
// })
export default router
