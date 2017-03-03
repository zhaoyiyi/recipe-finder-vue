<template>
  <section>
    <h1>search component</h1>
    <form novalidate @submit.stop.prevent="getRecipes(searchText)">
      <md-input-container>
        <label>Search recipes...</label>
        <md-input v-model="searchText"></md-input>
      </md-input-container>
      <button type="submit">search</button>
    </form>
    {{ searchResult }}
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'search',
    data () {
      return {
        searchText: ''
      }
    },
    computed: {
      ...mapState({
        searchResult: 'searchResult'
      })
    },
    methods: {
      getRecipes (searchText) {
        console.log('fetching recipes')
        this.$store.dispatch('getRecipes', searchText)
      }
    }
  }
</script>

<style scooped>

</style>
