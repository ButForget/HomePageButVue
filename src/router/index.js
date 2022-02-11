import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BPM from '../views/BPM.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/BPM',
    name: 'BPM',
    component: BPM
  }
]

const router = new VueRouter({
  routes
})

export default router
