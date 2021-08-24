import axios from 'axios'
import settings from '@/settings'
import router from '@/router'

const api = axios.create({
  baseURL: settings.apiBaseUrl,
})

export function requestSuccess(config) {
  return config
}

export function requestError(error) {
  return Promise.reject(error)
}

export function responseSuccess(response) {
  return response
}

export function responseError(error) {
  if (!error.response) {
    router.push({ name: '500', params: { error } })
  }
  return Promise.reject(error)
}

api.interceptors.request.use(requestSuccess, requestError)
api.interceptors.response.use(responseSuccess, responseError)

export default api
