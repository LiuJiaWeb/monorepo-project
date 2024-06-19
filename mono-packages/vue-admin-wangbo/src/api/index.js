import {
  axiosInstance,
  genInterceptors,
  removeDupRequest,
  requestKeyMap,
} from '@mono/utils'
import { message } from 'ant-design-vue'
import { useLoading } from '@/useLoading.js'

const { setLoading } = useLoading()

// 配置拦截器
genInterceptors({
  // 请求前拦截处理
  reqInterceptor: (config) => {
    setLoading(true)
    const { url, method } = config || {}
    // config.headers.Authorization = `Bearer ttt12313`;

    const key = `${url}_${method}`
    removeDupRequest(key)
    const controller = new AbortController()
    config.signal = controller.signal
    requestKeyMap[key] = controller

    config.headers.test = 'test123456'
    return config
  },

  // 请求错误处理
  reqInterceptorErr: (err) => {
    setLoading(false)
    console.error('reqInterceptorErr', err)
    return Promise.reject(err)
  },

  // 处理响应数据
  resInterceptor: (res) => {
    setLoading(false)
    const { url, method } = res?.config || {}
    const { status, data } = res || {}

    removeDupRequest(`${url}_${method}`)

    if (+status !== 200) {
      return Promise.reject(new Error('请求失败'))
    }

    return data
  },

  // 响应错误处理
  resInterceptorErr: (err) => {
    setLoading(false)
    console.error('reqInterceptorErr', err)
    const msg = err?.message || ''
    msg && message.error(msg)
    return Promise.reject(err)
  },
})

const apiRequest = async() => {
  try {
    const res = await axiosInstance({
      responseType: 'json',
      responseEncoding: 'utf8',
      method: 'get',
      url: 'http://localhost:3000/api/v1/user',
      params: { age: 18, username: 'abc' },
    })
    console.log(res)
  }
  catch (err) {
    console.error(err)
  }
}

export { apiRequest }
