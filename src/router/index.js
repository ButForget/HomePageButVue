import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Drawer from '../views/Drawer'
import NameDrawer from "../components/NameDrawer"
import NumDrawer from "../components/NumDrawer"
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
    component: Drawer,
    children: [{
      path: '',
      component: NameDrawer
    },
    {
      path: 'NameDrawer',
      component: NameDrawer,
    },
    {
      path: 'NumDrawer',
      component: NumDrawer,
    },
    ],
  }
]

const router = new VueRouter({
  routes
})

export default router
