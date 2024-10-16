import axios from 'axios'


const instance = axios.create({
  // baseURL: import.meta.env.DEV ? 'http://127.0.0.1:8788/api' : '/api'
  baseURL: '/api'
})

export default instance