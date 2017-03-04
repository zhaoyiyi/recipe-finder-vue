import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/Search'
import RecipeDetail from '@/components/RecipeDetail/RecipeDetail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Search', component: Search },
    { path: '/recipe-detail', component: RecipeDetail },
    { path: '/hello', name: 'Hello', component: Hello }
  ]
})
