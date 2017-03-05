<template>
  <div>
    <section class="shopping-list">
      <md-list class="recipes md-accent">
        <md-subheader>Selected Recipes</md-subheader>
        <md-list-item v-for="(recipe, index) of shoppingList" :key="index">
          <md-button class="md-button-ghost" @click.native="onRecipeClick(recipe)">{{ recipe.label }}
          </md-button>
          <md-button class="md-icon-button md-list-action" @click.native="removeFromList(recipe)">
            <md-icon>close</md-icon>
          </md-button>
        </md-list-item>
      </md-list>

      <md-tabs class="overview md-transparent"
               v-if="selectedRecipe"
               @change="n => {activeTabNumber = n}"
               md-fixed>

        <md-tab :md-label="selectedRecipe.label"
                :style="{display: activeTabNumber === 0 ? 'block' : 'none'}"
                :md-active="activeTabNumber === 0">
          <p v-for="(ingred, index) in selectedRecipe.ingredients" :key="index">
            <md-checkbox v-model="ingred.isChecked"
                         @change="checkIngredient({recipe: selectedRecipe, ingredientName: ingred.name})">
              {{ ingred.name }}
            </md-checkbox>
          </p>
        </md-tab>

        <md-tab md-label="All Ingredients" :style="{display: activeTabNumber === 1 ? 'block' : 'none'}">
          <md-list>
            <template v-for="(recipe, i) in shoppingList">
              <md-subheader>{{ recipe.label }}</md-subheader>
              <md-list-item v-for="(ingred, i) in recipe.ingredients" :key="i">
                <p>{{ ingred.name }}</p>
              </md-list-item>
              <md-divider></md-divider>
            </template>
          </md-list>
        </md-tab>

        <md-tab md-label="Shopping List" :style="{display: activeTabNumber === 2 ? 'block' : 'none'}">
          <md-list>
            <template v-for="(recipe, i) in getUncheckedIngredients">
              <md-subheader>{{ recipe.label }}</md-subheader>
              <md-list-item v-for="(ingred, i) in recipe.ingredients" :key="i">
                <p>{{ ingred.name }}</p>
              </md-list-item>
              <md-divider></md-divider>
            </template>
          </md-list>
        </md-tab>
      </md-tabs>
    </section>

    <shopping-actions></shopping-actions>

  </div>

</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import ShoppingActions from './ShoppingActions'
  export default {
    name: 'ShoppingList',
    components: {
      'shopping-actions': ShoppingActions
    },
    data () {
      return {
        selectedRecipe: {},
        activeTabNumber: 0
      }
    },
    computed: {
      ...mapState(['shoppingList']),
      ...mapGetters(['getIngredients', 'getUncheckedIngredients'])
    },
    methods: {
      onRecipeClick (recipe) {
        this.selectedRecipe = recipe
        this.activeTabNumber = 0
      },
      ...mapMutations(['checkIngredient', 'removeFromList'])
    },
    created () {
      this.selectedRecipe = Object.values(this.shoppingList)[0]
    }
  }
</script>

<style scoped>
  .shopping-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
  }

  .md-tab {
    text-align: left;
    padding: 0;
  }

  .recipes {
    width: 400px;
  }

  .overview {
    width: 600px;
  }

  .overview p {
    padding: 0 1rem;
  }

  @media print {
    html, body, .shopping-list {
      height: 100%;
    }

    .overview {
      width: 100%;
      height: 100%;
    }

    .recipes, .shopping-actions {
      display: none;
    }
  }

  @media screen {
    .overview, .recipes {
      height: 70vh;
    }
  }

</style>
<style>
  @media screen {
    .md-tabs .md-tabs-content{
      overflow-y: scroll;
    }
  }
</style>
