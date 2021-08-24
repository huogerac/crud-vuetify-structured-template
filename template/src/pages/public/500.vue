<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="6" offset-md="3">
        <v-img
          class="mx-auto"
          max-width="280"
          src="../../assets/500_server_down.png"
        ></v-img>

        <span class="pa-4">
          <h2 class="text-center">Opps! Something is wrong!</h2>
        </span>

        <p class="py-4">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Details</v-expansion-panel-header>
              <v-expansion-panel-content>
                \{{ error }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </p>

        <v-btn block color="secondary" class="mr-4" x-large @click="home"
          >Home <v-icon class="pl-3">fa-arrow-right</v-icon></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //error
  data: () => ({
    error: '',
  }),
  created() {
    this.error =
      this.$route.params.error || 'Network error. Try later...'
  },
  methods: {
    home() {
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
