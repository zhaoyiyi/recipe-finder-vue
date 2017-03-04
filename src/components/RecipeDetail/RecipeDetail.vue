<template>
  <section class="recipe-detail">
    <md-card class="header">
      <img :src="recipe.image" alt="recipe.label">
      <div>
        <h1>{{ recipe.label }}</h1>
        <md-button class="md-raised md-accent"
                   :href="recipe.url" target="_blank">See Instructions on {{ recipe.source }}</md-button>
        <md-button class="md-raised"
                   @click.native="addToList(recipe)"
                   v-if="!isInList(recipe)">Add to shopping list</md-button>
        <md-button class="md-raised"
                   @click.native="removeFromList(recipe)"
                   v-else>Remove from shopping list</md-button>
        <md-input-container>
          <label>Number of Servings</label>
          <md-input type="number"
                    v-model.number="portion"
                    @input="updatePortion(portion)">
          </md-input>
        </md-input-container>
      </div>
    </md-card>
    <ingredients
      title="Original Ingredients"
      :ingredients="recipe.ingredientLines"
      :servings="recipe.yield">
    </ingredients>

    <ingredients
      v-if="recipe.adjustedIngredients"
      title="Adjusted Ingredients"
      :ingredients="recipe.adjustedIngredients"
      :servings="portion">
    </ingredients>

    <nutrition-facts
      :servings="portion"
      :totalWeight="recipe.perUnit.totalWeight"
      :totalDaily="recipe.perUnit.totalDaily"
      :totalNutrients="recipe.perUnit.totalNutrients">
    </nutrition-facts>
  </section>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import NutritionFacts from './NutritionFacts'
  import Ingredients from './Ingredients.vue'

  export default {
    name: 'recipe-detail',
    components: {
      'nutrition-facts': NutritionFacts,
      'ingredients': Ingredients
    },
    data () {
      return { portion: 0 }
    },
    computed: {
      ...mapState({
        recipe: 'selectedRecipe'
      }),
      ...mapGetters([
        'isInList'
      ])
    },
    methods: {
      ...mapMutations([
        'addToList', 'removeFromList', 'updatePortion'
      ])
    },
    created () {
      this.portion = this.recipe.portion
    }
  }
</script>

<style scoped>
  .md-card {
    margin-bottom: 1rem;
    padding: 1rem;
  }
  a[appBackButton] {
    margin-bottom: 2rem;
  }
  .header {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .header img {
  }
  .header .md-button {
    display: block;
    margin: 2rem 0;
  }
  .recipe-detail {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
  }
  .ingredients {
    width: 400px;
  }
  .ingredients .mat-list .mat-list-item .mat-line {
    white-space: normal;
  }
</style>
