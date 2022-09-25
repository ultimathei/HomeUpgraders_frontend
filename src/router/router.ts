import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: {
      app: () => import(/* webpackChunkName: "home" */ '@Views/Home.vue'),
    },
  },
  {
    path: '/:catchAll(.*)', // Unrecognized paths should automatically match 404
    redirect: '/', // temporarily just redirect to home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
