import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MachineList from '@/components/machine/List'

Vue.use(Router)

export default new Router({
  routes: [{
    name: 'home',
    component: Home,
    path: '/home',
    alias: '',
    redirect: {
      name: '/machine/list'
    },
    children: [{
      name: '/machine/list',
      component: MachineList,
      path: '/machine/list',
      alias: 'machine/list'
    }]
  }]
})
