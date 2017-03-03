<template>
  <section class="recipe-list">
    <md-card md-with-hover class="recipe-card"
             v-for="(recipe, index) in searchResult" :key="index"
             @click.native="navigateToDetail(recipe)">
      <md-card-header>
        <div class="md-title">{{ recipe.label }}</div>
        <div class="md-subhead">{{ recipe.source }}</div>
      </md-card-header>

      <md-card-media>
        <img :src="recipe.image" :alt="recipe.label">
      </md-card-media>

      <md-card-content>
        <md-chips v-model="recipe.healthLabels" md-static>
          <template scope="chip">{{ chip.value }}</template>
        </md-chips>
      </md-card-content>
    </md-card>
  </section>
</template>

<script>
  import router from '../router'

  export default {
    name: 'search-result',
    props: ['searchResult'],
    methods: {
      navigateToDetail (recipe) {
        this.$store.commit('selectRecipe', recipe)
        router.push('recipe-detail')
      }
    }
  }
</script>

<style scoped>
  .recipe-list {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-around;
  }
  .recipe-card {
    width: 350px;
    margin: 0 1rem 1rem;
  }
  .recipe-card md-chip {
    margin: 0.25rem;
  }
  img:hover {
    cursor: pointer;
  }
  form {
    text-align: center;
    margin: 1rem;
  }
  .hint {
    color: grey;
    text-align: center;
  }

</style>
