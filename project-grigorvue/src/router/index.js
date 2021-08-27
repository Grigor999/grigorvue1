import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import NewComponent from '../components/NewComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path: '/first', name: 'NewComponent', component: NewComponent}
  ]
})
