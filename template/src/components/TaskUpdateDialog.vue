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
import ApiResponseMixin from '@/mixins/ApiResponseMixin'
import TaskForm from '@/components/TaskForm'

export default {
  props: ['showDialog', 'task'],
  mixins: [ApiResponseMixin],
  components: {
    TaskForm,
  },
  methods: {
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
