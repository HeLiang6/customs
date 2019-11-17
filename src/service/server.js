/**
 * 创建axios服务,对请求进行拦截操作
 * @authors Mill (876753183@qq.com)
 * @date    2017-11-20 15:29:36
 * @version 0.0.1
 */

import axios from 'axios'
import Loading from '@/components/Loading/index'

const URL =
  process.env.NODE_ENV === 'development'
    ? ''
    : ''

// 创建axios实例
const service = axios.create({
  baseURL: URL, // api的base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // Loading.open()
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    // Loading.close()
    if (response.status === 200) {
      let result = response.data
      return result
    }
    return response
  },
  error => {
    Loading.close()
    return Promise.reject(error)
  }
)

export default service
