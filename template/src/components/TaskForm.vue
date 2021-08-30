<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="onClose">
        <v-icon>fa-times-circle</v-icon>
      </v-btn>
      <v-toolbar-title>Task</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text @click="onSave" :disabled="!valid">
          <v-icon class="px-2">far fa-save</v-icon> Save
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card-text>
      <v-container>
        <v-form v-model="valid">
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="task.title"
                :rules="titleRule"
                label="Title *"
                append-icon="fa-newspaper"
                placeholder="An awesome title"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-textarea
                v-model="task.dueTo"
                label="Due To"
                append-icon="fa-file-alt"
                placeholder="Select a date for this task be completed"
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['task'],
  data: () => ({
    valid: false,
    titleRule: [
      (v) => !!v || 'Title is required',
      (v) => v.split(' ').length > 1 || 'Add a descriptive title',
    ],
  }),
  methods: {
    onSave() {
      this.$emit('onSave', this.task)
    },
    onClose() {
      this.$emit('onClose')
    },
  },
}
</script>
