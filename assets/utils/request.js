import axios from 'axios'
import {
  getCookie,
  logoutAccount
} from '@/assets/utils'
import {
  Message
} from 'iview'

export const baseURL =
  process.env.NODE_ENV === 'development' ?
  'http://192.168.50.166:9192' :
  'http://58.241.32.18:9192'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(config => {
  const token = getCookie(document.cookie, 'token')

  if (token) {
    config.headers['x-auth-token'] = token
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(
  response => {
    if (response.data.flag !== 'success') {
      const message = response.data.message
      Message.error(message)

      return Promise.reject(Error(message))
    }

    return response
  },
  error => {
    console.log('xxxx', Object.keys(error))

    if (error.response) {
      if (error.response.status === 403) {
        Message.error('账号过期，请重新登录')

        logoutAccount()
      } else {
        if (error.response.status === 500) {
          if (error.response.data.message.search('Subject') === 0) {
            Message.error('该功能暂无使用权限')
          } else {
            Message.error(error.response.data.message)
          }
        } else {
          Message.error(error.response.data.message)
        }
      }
    } else {
      Message.error(error.toString())
    }

    return Promise.reject(error)
  }
)

export default async (url, options = {
  method: 'GET'
}) => {
  const methodGet = !['POST', 'PUT', 'PATCH', 'DELETE'].includes(options.method)

  return axiosInstance({
    url,
    method: options.method,

    // GET
    params: methodGet ? options.body : null,

    // POST, PUT, PATCH
    data: !methodGet ? options.body : null
  })
}
