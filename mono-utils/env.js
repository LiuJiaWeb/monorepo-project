// VITE_ENV说明:
// VITE_ENV === 'local', 本地开发环境
// VITE_ENV === 'dev', 线上测试环境
// VITE_ENV === 'pre', 线上预发环境
// VITE_ENV === 'prod', 线上正式环境
const app_env = import.meta.env.VITE_ENV

const ua = window.navigator.userAgent.toLocaleLowerCase()

// 网页在微信环境中
export const isWechatWeb = () => ua.includes('micromessenger')

// android app嵌套网页
export const isAndroidWeb = () => !isWechatWeb() && ua.includes('android')

// ios app嵌套网页
export const isIosWeb = () => !isWechatWeb() && ua.includes('iphone os')

// 微信小程序嵌套网页
export const isMiniWeb = () => ua.includes('miniprogram')

// android || ios 嵌套网页
export function isAppWeb() {
  if (app_env === 'local')
    return false
  return isAndroidWeb() || isIosWeb()
}

// android || ios 嵌套网页
export const isWebview = () => isAppWeb() || isMiniWeb()

// 当前设备的系统，不管是不是webview嵌套H5，只判断设备的系统
export const isAndroidOs = () => ua.includes('android')
export const isIosOs = () => ua.includes('iphone os')
