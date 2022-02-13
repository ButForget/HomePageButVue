import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Drawer from '../views/Drawer.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Drawer',
    name: 'Drawer',
    component: Drawer
  }
]

const router = new VueRouter({
  routes
})

export default router
