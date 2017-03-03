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
      </div>
    </md-card>
    <md-card class="ingredients">
      <md-list>
        <h3 md-subheader>{{ recipe.ingredientLines.length }} Ingredients</h3>
        <md-divider></md-divider>
        <md-list-item v-for="(ingred, index) in recipe.ingredientLines" :key="index">
          <p> {{ ingred }} </p>
        </md-list-item>
      </md-list>
    </md-card>

    <nutrition-facts
      :totalWeight="recipe.totalWeight"
      :totalDaily="recipe.totalDaily"
      :totalNutrients="recipe.totalNutrients"></nutrition-facts>
  </section>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import NutritionFacts from './NutritionFacts'

  export default {
    name: 'recipe-detail',
    components: {
      'nutrition-facts': NutritionFacts
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
        'addToList', 'removeFromList'
      ])
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
