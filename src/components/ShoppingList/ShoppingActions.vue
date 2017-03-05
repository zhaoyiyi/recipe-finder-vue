<template>
  <section class="shopping-actions">
    <md-dialog md-open-from="#custom" md-close-to="#email" ref="email">
      <md-dialog-title>Email to:</md-dialog-title>

      <md-dialog-content>
        <md-input-container>
          <label>Email</label>
          <md-input v-model="email" type="email"></md-input>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-accent" @click.native="$refs.email.close()">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="sendEmail">Send</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-snackbar md-position="top center" ref="snackbar" :md-duration=5000>
      <span>Email sent to {{ email }}</span>
      <md-button class="md-accent" @click.native="$refs.snackbar.close()">Close</md-button>
    </md-snackbar>

    <md-button class="md-raised md-accent" @click.native="print">Print</md-button>
    <md-button class="md-raised" @click.native="$refs.email.open()" id="email">Email</md-button>
  </section>
</template>

<script>
  export default {
    name: 'shopping-actions',
    data () {
      return { email: '' }
    },
    methods: {
      print () {
        window.print()
      },
      sendEmail () {
        this.$refs.email.close()
        this.$refs.snackbar.open()
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
