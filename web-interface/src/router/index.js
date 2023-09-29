import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import keycloakService from '@/services/keycloak';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        isAuthenticated: false
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        isAuthenticated: true
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/unauthorized',
      name: 'Unauthorized',
      meta: {
        isAuthenticated: false
      },
      component: () => import('../views/Unauthorized.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticated) {
    // Get the actual url of the app, it's needed for Keycloak
    const basePath = window.location.toString()
    if (!"$store.authenticated") {
      // The page is protected and the user is not authenticated. Force a login.
      keycloakService.authenticated = keycloakService.CallInit(basePath)
    } 
    // else if (keycloakService.hasResourceRole('vue-demo-user')) {
    //   // The user was authenticated, and has the app role
    //   keycloakService.CallTokenRefresh()
    //     .then(() => {
    //       next()
    //     })
    //     .catch(err => {
    //       console.error(err)
    //     })
    // } 
    else {
      // The user was authenticated, but did not have the correct role
      // Redirect to an error page
      next({ name: 'Unauthorized' })
    }
  } else {
    // This page did not require authentication
    next()
  }
})

export default router
