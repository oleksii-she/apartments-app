import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'
import loginPage from '../pages/loginPage.vue'

import { useAuthStore } from '../stores/useStores/useAuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/apartments' },
    {
      path: '/apartments',
      name: 'apartments',
      component: HomeView
    },
    {
      path: '/registration',
      name: 'registration',

      component: () => import('../pages/registrationPage.vue'),
      meta: { hideForAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage,
      meta: { hideForAuth: true }
    },

    {
      path: '/post-new-add',

      component: () => import('../pages/newPostPage.vue'),
      name: 'post-new-add'
    },
    {
      path: '/:pathMatch(.*)*',

      component: () => import('../pages/ErrorPage.vue'),
      name: 'error-page'
    },

    {
      path: '/apartments/:id',

      component: () => import('../pages/ReviewPage.vue'),
      name: 'review-page'
    },
    {
      path: '/myaccount/',

      component: () => import('../pages/UserPage.vue'),
      name: 'user-page',
      meta: { requiresAuth: true }
    },
    {
      path: '/myaccount/reserved/',

      component: () => import('../pages/Reserved.vue'),
      name: 'reserved',
      meta: { requiresAuth: true }
    },
    {
      path: '/myaccount/reserved/:id',

      component: () => import('../pages/Reserved.vue'),
      name: 'reserved-info',
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:id',

      component: () => import('../pages/UserPage.vue'),
      name: 'userId-info',
      meta: { requiresAuth: false }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { isAuth } = useAuthStore()

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuth) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isAuth) {
      next({ name: 'apartments' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
