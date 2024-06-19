/**
 * @description: 生成方法
 * @param {object} window.localStorage 或者 window.sessionStorage
 */
function generateFn(obj = {}) {
  return {
    set(key, value) {
      if (Object.prototype.toString.call(value) === '[object String]') {
        obj.setItem(key, value)
        return
      }
      if (Object.prototype.toString.call(value) === '[object Number]') {
        obj.setItem(key, String(value))
        return
      }
      if (typeof value === 'object') {
        obj.setItem(key, JSON.stringify(value))
        return
      }
      throw '只能存字符串或者对象'
    },
    get(key) {
      let value = obj.getItem(key)
      try {
        value = JSON.parse(value)
      }
      catch (err) {
        console.log(err)
      }
      return value
    },
    remove(key) {
      obj.removeItem(key)
    },
    clear() {
      obj.clear()
    },
  }
}

export const local = generateFn(window.localStorage)
export const session = generateFn(window.sessionStorage)
