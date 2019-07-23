import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../pages/TodoList'
import Main from '../pages/Main'
import Home from '../pages/Home'
import MyProfile from '../pages/MyProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/todo-list',
          name: 'TodoList',
          component: TodoList
        },
        {
          path: '/my-profile',
          name: 'MyProfile',
          component: MyProfile
        }
      ]
    }
  ]
})
