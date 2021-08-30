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
import ApiResponseMixin from '@/mixins/ApiResponseMixin'
import TaskForm from '@/components/TaskForm'

export default {
  props: ['showDialog'],
  mixins: [ApiResponseMixin],
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
