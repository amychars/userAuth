// 这个文件是我的axios的配置文件
import axios from 'axios'
import store from '@/store'
import qs from 'qs'
axios.defaults.baseURL = store.state.token

// 接下来是我的http拦截器
axios.interceptors.request.use( // 请求拦截
  config => {
    if (store.getters.token) { // 判断token是否存在，如果存在就在我的请求头上加上token
    }
    if (config.method === 'post' || config.method === 'put') {
      if (typeof (config.data) === 'string') {
        config.data = qs.stringify(config.data)
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use( // 回复拦截，主要针对部分回掉数据状态码进行处理
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios
