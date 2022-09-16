Function.prototype._bind = function (context = window, ...args) {
  const self = this
  console.log(context, this, this.prototype)
  const fBond = (...args2) => {
    return self.apply(this instanceof self ? this : context, args.concat(args2))
  }
  if (this.prototype) {
    fBond.prototype = Object.create(this.prototype)
  }
  return fBond
}

function Animal (name, color) {
  this.name = name
  this.color = color
}

Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`
}

const Cat = Animal._bind(null, 'cat')
const cat = new Cat('white')

if (
  cat.say() === "I'm a white cat" &&
  cat instanceof Cat &&
  cat instanceof Animal
) {
  console.log('success')
}
