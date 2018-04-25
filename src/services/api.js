import axios from 'axios'
import { apiBase } from 'utils/constants'
import tokenService from 'services/token'
import { history } from 'routes'

function errorMessage(err) {
  if (err.response.status === 401) {
    tokenService.delete()
    history.replace('/login')
  }
  return err.response.data.errors[0]
    ? err.response.data.errors[0]
    : 'Server Error'
}

let api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? apiBase : '',
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  config => {
    // Do something before request is sent
    let user = tokenService.get()
    if (user) {
      config.headers['access-token'] = `${user.token}`
    }
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  error => {
    // Do something with response error
    return Promise.reject(errorMessage(error))
  }
)

export default api
