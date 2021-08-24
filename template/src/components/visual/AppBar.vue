<template>
  <v-toolbar dark prominent :src="background">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>{{name}}</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  props: ['background', 'user'],
}
</script>
