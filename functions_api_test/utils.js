import axios from 'axios'

let r = axios.create({ baseURL: 'http://127.0.0.1:8788/api' })

export async function get(url) {
  let axiosResponse = await r.get(url)
  console.log(axiosResponse)
}
