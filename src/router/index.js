import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Drawer from '../views/Drawer'
import NameDrawer from "../components/Drawer/NameDrawer"
import NumDrawer from "../components/Drawer/NumDrawer"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Drawer',
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
    meta: {
      title: '抽签系统'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
