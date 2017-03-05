<template>
  <section class="shopping-actions">
    <md-dialog md-open-from="#custom" md-close-to="#email" ref="email">
      <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

      <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('dialog1')">Cancel</md-button>
        <md-button class="md-primary" @click.native="closeDialog('dialog1')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-raised md-accent" @click.native="print">Print</md-button>
    <md-button class="md-raised" @click.native="openEmailDialog" id="email">Email</md-button>
  </section>
</template>

<script>
  export default {
    name: 'shopping-actions',
    methods: {
      print () {
        window.print()
      },
      openEmailDialog () {
        this.$refs['email'].open()
      }
    }
  }
</script>

<style scoped>
  .shopping-actions {
    text-align: center;
    margin: 2rem 0;
  }
  @media print {
    .shopping-actions {
      display: none;
    }
  }
</style>
