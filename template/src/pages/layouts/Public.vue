<script>
import Footer from '@/components/visual/Footer.vue'
export default {
  data: () => ({}),
  components: {
    Footer,
  },
}
</script>

<style></style>

<template>
  <v-main>
    <router-view />
    <Footer />
  </v-main>
</template>
