import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../pages/TodoList'
import Main from '../pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
