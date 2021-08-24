import api from '@/api'

export default {
  list: () => api.get('/api/tasks').then((response) => response.data),
  get: (taskId) =>
    api.get(`/api/tasks/${taskId}`).then((response) => response.data),
  create: (title, dueTo) =>
    api
      .post('/api/tasks', {
        title,
        dueTo,
      })
      .then((response) => response),
  update: (taskId, title, dueTo) =>
    api
      .put(`/api/tasks/${taskId}`, { title, dueTo })
      .then((response) => response),
  delete: (taskId) =>
    api.delete(`/api/tasks/${taskId}`).then((response) => response),
}
