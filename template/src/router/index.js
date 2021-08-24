import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './public.routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [...publicRoutes],
})

export default router
