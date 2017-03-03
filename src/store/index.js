import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'

Vue.use(Vuex)

const API_URL = 'https://api.edamam.com/search?app_id=fcfe9462&app_key=dc6cb1d3152df63f39cc2d023bbc20de&to=30'

const state = {
  selectedRecipe: {},
  searchResult: {},
  shoppingList: {}
}

const mutations = {
  gotRecipes (state, recipes) {
    state.searchResult = recipes
  },
  addToList (state, recipe) {
    state.shoppingList[recipe.url] = recipe
  },
  removeFromList (state, recipe) {
    delete state.shoppingList[recipe.url]
  },
  checkIngredient (state, { recipe, ingredientName }) {}
}

const actions = {
  getRecipes ({commit}, query) {
    fetch(`${API_URL}&q=${query}`)
      .then(res => res.json())
      .then(recipes => {
        console.log('fetched recipes', recipes)
        commit('gotRecipes', recipes)
      })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
