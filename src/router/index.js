import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
const Drawer = () => import('../views/Drawer')
const NameDrawer = () => import("../components/Drawer/NameDrawer")
const NumDrawer = () => import("../components/Drawer/NumDrawer")

const Homework = () => import("../views/Homework")

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
      component: NameDrawer,
      meta: {
        title: '抽签系统'
      }
    },
    {
      path: 'Daisy',
      component: NameDrawer,
      props: { c: "Daisy" },
      meta: {
        title: '抽签系统 for Daisy'
      }
    },
    {
      path: 'NameDrawer',
      component: NameDrawer,
      meta: {
        title: '抽签系统'
      }
    },
    {
      path: 'NumDrawer',
      component: NumDrawer,
    },
    ],
  },
  {
    path: '/Homework',
    name: 'Homework',
    component: Homework,
    meta: {
      title: '作业汇总'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
