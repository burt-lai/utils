const debounce = function (fn, wait) {
  let timer = null
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
// 时间戳版
const throttle = function (fn, wait) {
  let prev = 0
  return function (...args) {
    const now = Date.now()
    if (now - prev >= wait) {
      prev = now
      fn.apply(this, args)
    }
  }
}
// 定时器版
const throttle2 = function (fn, wait) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, args)
      }, wait)
    }
  }
}

const debounce100 = (func, wait, immediate) => {
  let timeout, result
  const debounced = function (...args) {
    const context = this
    if (timeout) { clearTimeout(timeout) }
    if (immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) { result = func.apply(context, args) }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return result
  }
  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}

// options.leading 表示是否可以立即执行一次，options.trailing表示结束调用是是否还要执行一次，默认都是true（注意两者不允许同时为false）
const throttle100 = (func, wait, options = {}) => {
  let timeout, result, context, args
  let previous = 0
  const later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) { context = args = null }
  }

  const throttled = function (...params) {
    let now = Date.now()
    if (!previous && options.leading === false) { previous = now }
    const remaining = wait - (now - previous)
    context = this
    args = params
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) { context = args = null }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
  throttled.cancel = function () {
    clearTimeout(timeout)
    timeout = null
    previous = 0
  }
  return throttled
}