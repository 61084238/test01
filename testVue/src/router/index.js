import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import pageA from '@/components/pageA'
import pageB from '@/components/pageB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/pageA',
      name: 'pageA',
      component: pageA
    },{
      path: '/pageB',
      name: 'pageB',
      component: pageB
    }
  ]
})
