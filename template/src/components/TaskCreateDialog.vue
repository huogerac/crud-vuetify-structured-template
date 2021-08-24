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
        @onSave="createTask"
        @onClose="$emit('onClose')"
      ></task-form>
    </v-dialog>
  </v-container>
</template>

<script>
import TasksApi from '@/api/tasks.api.js'
import TaskForm from '@/components/visual/TaskForm'

export default {
  props: ['showDialog'],
  data: () => ({
    task: {
      title: '',
      dueTo: '',
    },
  }),
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
    clearFields() {
      this.task.title = ''
      this.task.dueTo = ''
    },
    createTask(task) {
      TasksApi.create(task.title, task.dueTo)
        .then(() => {
          this.$emit('onUpdated')
          this.clearFields()
        })
        .catch((error) => {
          this.$emit('onError', this.extractErrorFromResponse(error))
        })
    },
  },
}
</script>
