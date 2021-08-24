<template>
  <v-main class="overflow-hidden">
    <app-bar
      :background="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
      :user="user"
    ></app-bar>

    <task-list />
  </v-main>
</template>

<script>
import AppBar from '@/components/visual/AppBar.vue'
import TaskList from '@/components/TaskList.vue'

export default {
  data: () => ({
    user: null,
  }),
  components: {
    AppBar,
    TaskList,
  },
}
</script>

<style lang="scss"></style>
