import { useClipboard, useTitle, useUrlSearchParams, useFileDialog } from '@vueuse/core';

/**
 * @description: 复制文本
 * @param {string} str 目标文本
 * @param {function} callBackFn 回调函数
 */
export const copyFn = (str = '', callBackFn) => {
  if (!str) return;
  const { copy } = useClipboard();
  copy(str);
  callBackFn && callBackFn();
};

/**
 * @description: 输入格式化，去除空格
 */
export const inputFormatter = (str = '') => {
  let value = str.replace(/\s/g, '');
  return value;
};

/**
 * @description: 设置页面标题
 * @param {string} str 标题文字
 */
export const setPageTitle = (str = '') => {
  if (!str) return;
  const setTitle = useTitle();
  setTitle.value = str;
};

/**
 * @description: 获取当前URL中指定参数的值
 * @param {*} url
 * @param {*} name
 */
export const getQueryByName = (name = '') => {
  if (!name) return;
  const params = useUrlSearchParams('history');
  const value = params?.[name] || '';
  return value;
};

/**
 * @description: 同步等待
 * @param {number} time 等待时间
 */
export const waitFn = (time = 2000) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, +time);
  });
  return promise;
};

/**
 * @description: 11位手机号码校验
 * @param {String} phone 手机号码
 * @return {Boolean} 验证结果 true/false
 */
export const phoneTest = (phone = '') => {
  const re = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return re.test(String(phone));
};

/**
 * @description: 真实姓名校验
 * @param {String} userName 真实姓名
 * @return {Boolean} 验证结果 true/false
 */
export const realNameTest = (userName = '') => {
  const re = /^[\u4E00-\u9FA5]+(·[\u4E00-\u9FA5]+)*$/;
  return re.test(String(userName));
};

/**
 * @description: 4位或6位短信验证码校验
 * @param {String} code 验证码
 * @return {Boolean} 验证结果 true/false
 */
export const phoneCodeTest = (code = '') => {
  const re = /^\d{4}|\d{6}$/;
  return re.test(String(code));
};

/**
 * @description: 手机号中间四位*号加密
 */
export const phoneEncrypt = (o_phone = '') => {
  if (!o_phone) return '';
  const reg = /^(\d{3})\d*(\d{4})$/;
  const res = o_phone.replace(reg, '$1****$2');
  return res;
};

/**
 * @description: 字符串超长省略
 * @param {String} str: 需要处理的字符串
 * @param {Number} maxLength:截取长度
 */
export const strElli = (str = '', maxLength = 0) => {
  if (str.length > +maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
