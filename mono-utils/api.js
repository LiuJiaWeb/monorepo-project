import axios from 'axios'

// 创建 axios 实例
const axiosInstance = axios.create({
  // baseURL: '', // 基础URL，根据项目实际情况配置
  timeout: 10000, // 请求超时时间
})

// 创建拦截器
function genInterceptors(options = {}) {
  const { reqInterceptor, reqInterceptorErr, resInterceptor, resInterceptorErr } = options || {}

  // 请求拦截器
  if (reqInterceptor) {
    axiosInstance.interceptors.request.use(reqInterceptor, reqInterceptorErr)
  }

  // 响应拦截器
  if (resInterceptor) {
    axiosInstance.interceptors.response.use(resInterceptor, resInterceptorErr)
  }
}

// 取消重复请求
const requestKeyMap = {}
function removeDupRequest(key = '') {
  if (requestKeyMap[key]) {
    requestKeyMap[key].abort()
    delete requestKeyMap[key]
  }
}

export { axiosInstance, genInterceptors, requestKeyMap, removeDupRequest }
