<template>
  <section>
    <form novalidate @submit.stop.prevent="getRecipes(searchText)">
      <md-input-container>
        <label>Search recipes...</label>
        <md-input v-model="searchText"></md-input>
      </md-input-container>
      <md-button class="md-raised" type="submit">Search</md-button>
    </form>
    <search-result :search-result="searchResult"></search-result>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import SearchResult from './SearchResult'

  export default {
    name: 'search',
    components: {
      'search-result': SearchResult
    },
    data () {
      return {
        searchText: ''
      }
    },
    computed: mapState({
      searchResult: 'searchResult'
    }),
    methods: {
      getRecipes (searchText) {
        this.$store.dispatch('getRecipes', searchText)
      }
    }
  }
</script>

<style scoped>
  form {
    margin: 1rem;
  }

  .md-input-container {
    width: 400px;
    display: inline-flex;
    margin-bottom: 0;
  }

  button.md-button {
    margin-top: 1rem;
  }
</style>
