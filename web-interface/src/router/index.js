import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KeycloakService from '../services/keycloak'
import { useAuthStore } from "@/stores/authStore";

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
      path: '/homepage',
      name: 'homepage',
      meta: {
        requiresAuth : true
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePage.vue')
    }, 
    {
      path: '/landingpage',
      name: 'landingpage',
      meta: {
        requiresAuth : true
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LandingPage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  console.log("next page requires auth? ", to.meta.requiresAuth)
  console.log("checking if valid login...", store.authenticated)
  if (!to.meta.requiresAuth) {
    console.log("doesn't need auth...")
    next()
  }else if (to.meta.requiresAuth && store.authenticated){
      KeycloakService.CallTokenRefresh()
      next()
  }else{
    KeycloakService.CallLogin()
    next()
  }
})

export default router
