import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CanvasTest from '../components/CanvasTest'
import SignName from '../components/SignName'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/canvas-test',
      name:'canvas-test',
      component:CanvasTest
    },
    {
      path:'/sign-name',
      name:'sign-name',
      component:SignName
    }
  ]
})
