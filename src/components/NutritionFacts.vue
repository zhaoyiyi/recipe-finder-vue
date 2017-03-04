<template>
  <md-card>
    <div class="nutrition">
      <h3>Nutrition Fact</h3>
      <p>per {{ servings }} servings ({{ totalWeight | roundNumber(servings) }}g)</p>
      <table class="nutrition-table">
        <tbody>
        <tr>
          <th class="thick-up-border thick-bottom-border">Amount</th>
          <th class="thick-up-border thick-bottom-border">% Daily Value</th>
        </tr>
        <tr>
          <td><span style="font-weight: bold;">Calories</span> {{totalNutrients.ENERC_KCAL | nutrition(servings)}}</td>
          <td></td>
        </tr>
        <tr>
          <td><span style="font-weight: bold;">Fat</span> {{totalNutrients.FAT | nutrition(servings)}}</td>
          <td>{{totalDaily.FAT | nutrition(servings)}}</td>
        </tr>
        <tr class="nutrition-subrow">
          <td>Saturated {{totalNutrients.FASAT | nutrition}} <br/> + Trans {{totalNutrients.FATRN | nutrition(servings)}}</td>
          <td>{{totalDaily.FASAT | nutrition(servings)}}</td>
        </tr>
        <tr>
          <td><span style="font-weight: bold;">Cholesterol</span> {{totalNutrients.CHOLE | nutrition(servings)}}</td>
          <td>{{totalDaily.CHOLE | nutrition(servings)}}</td>
        </tr>
        <tr>
          <td><span style="font-weight: bold;">Sodium</span> {{totalNutrients.NA | nutrition(servings)}}</td>
          <td>{{totalDaily.NA | nutrition(servings)}}</td>
        </tr>
        <tr>
          <td><span style="font-weight: bold;">Carbohydrate</span> {{totalNutrients.CHOCDF | nutrition(servings)}}</td>
          <td>{{totalDaily.CHOCDF | nutrition(servings)}}</td>
        </tr>
        <tr class="nutrition-subrow">
          <td>Fiber {{totalNutrients.FIBTG | nutrition(servings)}}</td>
          <td>{{totalDaily.FIBTG | nutrition(servings)}}</td>
        </tr>
        <tr class="nutrition-subrow">
          <td>Sugar {{totalNutrients.SUGAR | nutrition(servings)}}</td>
          <td></td>
        </tr>
        <tr>
          <td class="thick-bottom-border"><span style="font-weight: bold;">Protein</span> {{totalNutrients.PROCNT |
            nutrition(servings)}}
          </td>
          <td class="thick-bottom-border">{{totalDaily.PROCNT | nutrition(servings)}}</td>
        </tr>

        <tr>
          <td>Vitamin A</td>
          <td>{{totalDaily.VITA_RAE | nutrition(servings)}}</td>
        </tr>
        <tr>
          <td>Vitamin C</td>
          <td>{{totalDaily.VITC | nutrition(servings)}}</td>
        </tr>
        <tr>
          <td>Calcium</td>
          <td>{{totalDaily.CA | nutrition(servings)}}</td>
        </tr>
        <tr>
          <td>Iron</td>
          <td>{{totalDaily.FE | nutrition(servings)}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </md-card>
</template>

<script>
  export default {
    name: 'nutrition-facts',
    props: [
      'servings', 'totalWeight', 'totalDaily', 'totalNutrients'
    ]
  }
</script>

<style scoped>
  .md-card {
    width: 350px;
    padding: 1rem;
  }
  h3 {
    margin-bottom: 0;
    text-align: left;
  }
  p {
    margin: 0.25rem 0;
    text-align: left;
  }
  .nutrition-table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }
  .nutrition-table td, .nutrition-table th {
    border-bottom: 1px solid;
  }
  .nutrition-table td:last-child(2) {
    border-bottom: none;
  }
  .nutrition-table tr > td:nth-child(2),
  th:nth-child(2) {
    text-align: right;
  }
  .nutrition-subrow td {
    padding-left: 1rem;
  }
  .nutrition-table .thick-up-border {
    border-top-width: 3px;
  }
  .nutrition-table .thick-bottom-border {
    border-bottom-width: 2px;
  }
</style>
