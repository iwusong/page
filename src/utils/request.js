import axios from 'axios'


const instance = axios.create({
  // baseURL: import.meta.env.DEV ? 'http://127.0.0.1:8788/api' : '/api'
  baseURL: '/api'
})
instance.interceptors.response.use(
  function(response) {
    // 检测HTTP状态码
    // if (response.status === 200) {
    return response.data
    // } else {
    //   return Promise.reject(response)
    // }

  },
  function(error) {
    // 对响应错误做些事
    return Promise.reject(error)
  }
)

export default instance
