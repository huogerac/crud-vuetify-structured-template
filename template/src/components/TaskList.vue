<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn class="ma-2" outlined small color="indigo" @click="createTask"
          >New</v-btn
        >
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pa-1" cols="12" v-for="task in tasks" :key="task.id">
        <task-card
          :id="task.id"
          :title="task.title"
          :description="task.description"
          @onEdit="editTask"
          @onRemove="removeTask"
        ></task-card>
      </v-col>
    </v-row>

    <v-row class="pa-5">
      <v-col cols="12">
        <div v-if="tasks && tasks.length == 0">
          <h2>Your list is empty 🥺</h2>
        </div>
        <div v-if="tasks && tasks.length > 3" class="pb-7">
          <h2>You've reached the end! 👋</h2>
        </div>
      </v-col>
    </v-row>

    <!-- Create Task Dialog -->
    <task-create-dialog
      :showDialog="showTaskCreateDialog"
      @onUpdated="taskCreated"
      @onClose="showTaskCreateDialog = false"
    />

    <!-- Update Task Dialog -->
    <task-update-dialog
      :showDialog="showTaskUpdateDialog"
      :task="task"
      @onUpdated="taskSaved"
      @onClose="showTaskUpdateDialog = false"
    />

    <!-- SNACKBAR TOAST -->
    <v-snackbar v-model="snackbar" :vertical="true" :top="true">
      \{{ snackbar_text }}
    </v-snackbar>
  </v-container>
</template>

<script>
import TasksApi from '@/api/tasks.api.js'
import TaskCard from './visual/TaskCard.vue'
import TaskCreateDialog from '@/components/TaskCreateDialog.vue'
import TaskUpdateDialog from '@/components/TaskUpdateDialog.vue'

export default {
  data: () => ({
    loading: false,
    tasks: [],
    showTaskCreateDialog: false,
    showTaskUpdateDialog: false,
    task: null,
    snackbar: false,
    snackbar_text: null,
  }),
  created() {
    this.loadTasks()
  },
  methods: {
    loadTasks() {
      this.loading = true
      TasksApi.list().then((response) => {
        this.tasks = response
        this.loading = false
      })
    },
    createTask() {
      this.showTaskCreateDialog = true
    },
    taskCreated() {
      this.loadTasks()
      this.showTaskCreateDialog = false
      this.snackbar_text = 'Task has been created!'
      this.snackbar = true
    },
    editTask(task) {
      TasksApi.get(task.id).then((task) => {
        this.task = task
        this.showTaskUpdateDialog = true
      })
    },
    taskSaved() {
      this.loadTasks()
      this.showTaskUpdateDialog = false
      this.snackbar_text = 'Task saved successfuly!'
      this.snackbar = true
    },
    removeTask(task) {
      TasksApi.delete(task.id).then(() => {
        this.loadTasks()
      })
    },
  },
  components: { TaskCard, TaskCreateDialog, TaskUpdateDialog },
}
</script>
