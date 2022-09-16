// 20:22
// 面试官
// 第一个题：
// 写出执行结果，并解释一下原因
function side(arr) {
  arr[0] = arr[2]
}
function a(a, b, c = 3) {
  c = 10
  side(arguments) // arguments 是只读的
  return a + b + c
}
a(1, 1, 1) // 12

// 第二个题：
// 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）
function f(arr) {
  const res = []
  res[0] = []
  res[1] = []
  res[2] = []

  if (arr.length <= 3) {
    // 每一堆最多1个
    for (let i = 0; i < length; i++) {
      res[i].push(arr[i])
    }
  }
  // 多于3个，则一堆都要找出一些元素，使这些元素的和最接近sum/3
  const sum = arr.reduce((acc, cur) => (acc += cur, acc))
  const target = sum / 3
  // 贪心算法
  const dp = [] // 


}
// 面试官
// 第三个题：
// 介绍下 promise 的特性、优缺点，内部是如何实现的，动手实现 Promise
class MyPromise {
  constructor() {
    this.state = 'pending'
    this.res = undefined
    if (this.state === 'fullfil') {

    } else (this.state === 'reject'){

    }
  }
  then(res) {

  }
  catch() { }
}

// 第四个题：
// 介绍防抖节流原理、区别以及应用，并用JavaScript进行实现
function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
// 定时器版
function throttle(fn, wait) {
  let timer = null
  return function (...args) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, wait)
  }
}
function throttle2(fn, delay) {
  let canRun = true
  return function (...args) {
    if (!canRun) {
      return
    }
    canRun = false
    setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
