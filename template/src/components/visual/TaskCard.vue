<template>
  <v-card>
    <v-card-text>
      <div>#{{ id }}</div>
      <p class="ma-0 pa-0 text-h5 text--primary">{{ title }}</p>
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item-title>Last update: {{ dueTo }}</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-btn icon color="grey" @click="edit"
            ><v-icon>fas fa-pen</v-icon></v-btn
          >
          <v-btn icon color="grey" @click="remove"
            ><v-icon>far fa-trash-alt</v-icon></v-btn
          >
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['id', 'title', 'dueTo', 'createdAt', 'updatedAt'],
  methods: {
    edit() {
      this.$emit('onEdit', { id: this.id })
    },
    remove() {
      this.$emit('onRemove', { id: this.id })
    },
  },
}
</script>
