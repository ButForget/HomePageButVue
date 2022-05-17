/*
 * @Author: HakimYu yhjredin@gmail.com
 * @Date: 2022-02-03 16:14:06
 * @LastEditors: HakimYu yhjredin@gmail.com
 * @LastEditTime: 2022-05-10 13:55:02
 * @FilePath: \homepagebutvue\src\router\index.js
 * @Description: router
 * 
 * Copyright (c) 2022 by HakimYu yhjredin@gmail.com, All Rights Reserved. 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
const Drawer = () =>
    import ('../views/Drawer')
const NameDrawer = () =>
    import ("../components/Drawer/NameDrawer")
const NumDrawer = () =>
    import ("../components/Drawer/NumDrawer")
const TXNet = () =>
    import ("../components/TXNet")
const Homework = () =>
    import ("../views/Homework")
const CaKStuHelper = () =>
    import ("../views/CaKStudyHelper")

Vue.use(VueRouter)
const routes = [{
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
    }, {
        path: '/TXNet',
        name: 'TXNet',
        component: TXNet,
        meta: {
            title: '天天学习'
        },
        children: [{
            path: ':password',
            meta: {
                title: '天天学习'
            },
        }],
    }, {
        path: '/CaKStudyHelper',
        name: 'StuHelper',
        component: CaKStuHelper,
        meta: {
            title: '学习助手'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router