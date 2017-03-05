import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/Search'
import RecipeDetail from '@/components/RecipeDetail/RecipeDetail'
import ShoppingList from '@/components/ShoppingList/ShoppingList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Search },
    { path: '/recipe-detail', component: RecipeDetail },
    { path: '/shopping-list', component: ShoppingList },
    { path: '/hello', component: Hello }
  ]
})
