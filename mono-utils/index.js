import { local, session } from './storage'
import {
  isAndroidOs,
  isAndroidWeb,
  isAppWeb,
  isIosOs,
  isIosWeb,
  isMiniWeb,
  isWebview,
  isWechatWeb,
} from './env'

import {
  copyFn,
  getQueryByName,
  inputFormatter,
  phoneCodeTest,
  phoneEncrypt,
  phoneTest,
  realNameTest,
  setPageTitle,
  strElli,
  waitFn,
} from './tools'

import { axiosInstance, genInterceptors, removeDupRequest, requestKeyMap } from './api'

export {
  isWechatWeb,
  isAndroidWeb,
  isIosWeb,
  isMiniWeb,
  isAppWeb,
  isWebview,
  isAndroidOs,
  isIosOs,
  local,
  session,
  copyFn,
  inputFormatter,
  setPageTitle,
  getQueryByName,
  waitFn,
  phoneTest,
  realNameTest,
  phoneCodeTest,
  phoneEncrypt,
  strElli,
  axiosInstance,
  genInterceptors,
  requestKeyMap,
  removeDupRequest,
}
