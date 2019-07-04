import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CanvasTest from '../components/CanvasTest'
import SignName from '../components/SignName'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello-world',
      name: 'hello-world',
      component: HelloWorld
    },
    {
      path:'/',
      name:'sign-name',
      component:SignName
    }
  ]
})
