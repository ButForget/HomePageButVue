import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Drawer from '../views/Drawer'
import NameDrawer from "../components/Drawer/NameDrawer"
import NumDrawer from "../components/Drawer/NumDrawer"
import SevenDaysHelper from "../views/SevenDaysHelper"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SevenDaysHelper',
    // name: 'SevenDaysHelper',
    component: SevenDaysHelper,
    // children: [{
    //   path: '',
    //   component: NameDrawer
    // },
    // ],
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
  }
]

const router = new VueRouter({
  routes
})

export default router
