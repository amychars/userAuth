import axios from './config'

export function apiGetBaiDu () {
  return axios({
    url: 'https://www.baidu.com',
    method: 'get'
  })
}
