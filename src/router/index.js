import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/views/Home',
      component: () => import('@/components/views/Home'),
      name: 'Home'
    },{
      path: '/tabs/TZ',
      component: () => import('@/components/tabs/TZ'),
      name: 'TZ'
    }
  ]
})
