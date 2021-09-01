<template>
  <v-card>
    <v-card-text>
      <div>#\{{ task.id }}</div>
      <p class="ma-0 pa-0 text-h5 text--primary">\{{ task.title }}</p>
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item-title
            >Due to: \{{ task.dueTo | shortDateFilter }}, Last update:
            \{{ task.updatedAt | shortDateFilter }}</v-list-item-title
          >
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-btn icon color="grey" @click="edit" :loading="updateLoading"
            ><v-icon>fas fa-pen</v-icon></v-btn
          >
          <v-btn icon color="grey" @click="remove" :loading="removeLoading"
            ><v-icon>far fa-trash-alt</v-icon></v-btn
          >
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['task'],
  data: () => ({
    updateLoading: false,
    removeLoading: false,
  }),
  methods: {
    edit() {
      this.updateLoading = true
      this.$emit('onEdit', this.task)
    },
    remove() {
      this.removeLoading = true
      this.$emit('onRemove', this.task)
    },
  },
}
</script>
