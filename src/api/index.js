import request from '@/utils/request.js'

export function add(user, desc) {
  return request.post('/add', {
    user,
    desc
  })
}
export function list(user ) {
  return request.post('/list', {
    user,
  })
}
