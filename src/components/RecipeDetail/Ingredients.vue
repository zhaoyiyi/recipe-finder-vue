<template>
  <md-card class="ingredients">
    <md-list>
      <h3 md-subheader>{{ title }} ({{ servings }} servings)</h3>
      <md-divider></md-divider>
      <md-list-item v-for="(ingred, index) in ingredients" :key="index">
        <p> {{ ingred }} </p>
      </md-list-item>
    </md-list>
  </md-card>
</template>

<script>
  export default {
    name: 'recipe-ingredients',
    props: ['ingredients', 'servings', 'title']
  }
</script>

<style scoped></style>
