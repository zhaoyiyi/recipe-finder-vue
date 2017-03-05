import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'

Vue.use(Vuex)

const API_URL = 'https://api.edamam.com/search?app_id=fcfe9462&app_key=dc6cb1d3152df63f39cc2d023bbc20de&to=30'

const state = {
  selectedRecipe: {},
  searchResult: [],
  shoppingList: {}
}

const mutations = {
  gotRecipes (state, recipes) {
    state.searchResult = recipes
  },
  addToList (state, {recipe, useAdjusted}) {
    let ingredients = useAdjusted ? state.selectedRecipe.adjustedIngredients : state.selectedRecipe.ingredientLines
    ingredients = ingredients.map(ingred => ({name: ingred, isChecked: false}))

    state.shoppingList = Object.assign({}, state.shoppingList,
      {
        [recipe.url]: {
          label: recipe.label,
          ingredients,
          url: recipe.url
        }
      })
  },
  removeFromList (state, recipe) {
    state.shoppingList = Object.assign({},
      Object.keys(state.shoppingList).reduce((newShoppingList, key) => {
        if (key !== recipe.url) {
          newShoppingList[key] = state.shoppingList[key]
        }
        return newShoppingList
      }, {}))
  },
  checkIngredient (state, {recipe, ingredientName}) {
    const ingredients = state.shoppingList[recipe.url].ingredients
      .map(ingred => {
        if (ingred.name === ingredientName) {
          return {
            name: ingred.name,
            isChecked: !ingred.isChecked
          }
        }
        return ingred
      })
    return { ...state.shoppingList, [recipe.url]: { ...recipe, ingredients } }
  },
  selectRecipe (state, recipe) {
    // set default portion to yield of recipe
    state.selectedRecipe = { ...recipe, portion: recipe.yield }
  },
  updatePortion (state, portion) {
    const adjustedIngredients = state.selectedRecipe.perUnit.ingredients.map(ingred => updateIngredients(ingred, portion))
    state.selectedRecipe = { ...state.selectedRecipe, portion, adjustedIngredients }
  }
}

const actions = {
  getRecipes ({commit}, query) {
    fetch(`${API_URL}&q=${query}`)
      .then(res => res.json())
      .then(recipes => commit('gotRecipes', recipes.hits.map(r => {
        const portion = r.recipe.yield
        // get per unit values
        const totalNutrients = getPerUnitValue(r.recipe.totalNutrients, portion)
        const totalDaily = getPerUnitValue(r.recipe.totalDaily, portion)
        const totalWeight = Math.round(r.recipe.totalWeight / portion)
        const ingredients = r.recipe.ingredientLines.map(ingred => updateIngredients(ingred, 1 / portion))

        return Object.assign({}, r.recipe, {perUnit: {totalNutrients, totalDaily, totalWeight, ingredients}})
      })))
  }
}

const getters = {
  isInList: state => recipe => !!state.shoppingList[recipe.url],
  getIngredients: state => recipe => state.shoppingList[recipe.url].ingredients,
  getUncheckedIngredients: state => Object.values(state.shoppingList).map(r => {
    const ingredients = r.ingredients.filter(ingred => !ingred.isChecked)
    return {...r, ingredients}
  }).filter(r => r.ingredients.length),
  shoppingListLength: state => Object.keys(state.shoppingList).length
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// find single number or fractions(e.g. 1/2, 2/3) then calculate times to portion multiplier value
function updateIngredients (ingred, multiplier) {
  return ingred.replace(/\d+[./]?\d*/g, number => {
    if (number.includes('/')) {
      number = number.split('/').reduce((a, b) => a / b)
    }
    // round to 2 decimal places
    return (Math.round(+number * multiplier * 100) / 100) || ''
    // it may become something like "0.5 0.25 cups of water", this line adds the two numbers up
  }).replace(/(\d+\.?\d+) (\d+\.?\d+)/g, (match, a, b) => +a + +b)
}

function getPerUnitValue (nutrients, portion) {
  let perUnitNutrient = {}
  for (let key in nutrients) {
    perUnitNutrient[key] = nutrients[key]
    perUnitNutrient[key].quantity = nutrients[key].quantity / portion
  }
  return perUnitNutrient
}
