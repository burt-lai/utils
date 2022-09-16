// Function.prototype.bind = function (context = window, ...args) {
//   const self = this
//   const fBond = (...args2) => {
//     return self.call(this instanceof self ? this : context, ...args, ...args2)
//   }
//   fBond.prototype = Object.create(this.prototype)
//   return fBond
// }
Function.prototype.bind = function (context = window, ...args) {
  const self = this
  const fBond = (...args2) => {
    console.log(this)
    return self.call(this instanceof self ? this : context, ...args, ...args2)
  }
  fBond.prototype = Object.create(this.prototype)
  return fBond
}