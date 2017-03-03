<template>
  <div id="app">
    <md-toolbar>
      <h2 class="md-title">Recipe Finder</h2>
      <md-button>Search</md-button>
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
</style>
<style src="../node_modules/vue-material/dist/vue-material.css"></style>
