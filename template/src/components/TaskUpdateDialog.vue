<template>
  <v-container>
    <v-dialog
      v-model="showDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <task-form
        :task="task"
        @onSave="updateTask"
        @onClose="$emit('onClose')"
      ></task-form>
    </v-dialog>
  </v-container>
</template>

<script>
import TasksApi from '@/api/tasks.api.js'
import TaskForm from '@/components/visual/TaskForm'

export default {
  props: ['showDialog', 'task'],
  components: {
    TaskForm,
  },
  methods: {
    extractErrorFromResponse(error) {
      let errorText = error
      if (error && error.response && error.response.status == 400) {
        errorText = error.response.data.detail || error
      }
      return `Opps! ${errorText}`
    },
    updateTask(task) {
      TasksApi.update(task.id, task.title, task.dueTo)
        .then(() => {
          this.$emit('onUpdated')
        })
        .catch((error) => {
          this.$emit('onError', this.extractErrorFromResponse(error))
        })
    },
  },
}
</script>
