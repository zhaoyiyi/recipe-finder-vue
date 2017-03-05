<template>
  <div id="app">
    <md-toolbar>
      <h2 class="md-title">Recipe Finder</h2>
      <router-link to="/" class="md-button">Search <md-ink-ripple /></router-link>
      <router-link to="/shopping-list" class="md-button">Shopping List <md-ink-ripple /></router-link>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .md-toolbar {
    margin-bottom: 2rem;
  }
</style>
<style src="../node_modules/vue-material/dist/vue-material.css"></style>
