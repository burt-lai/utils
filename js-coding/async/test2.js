const a = 2
const obj = {
  a: 1,
  f1: function () {
    console.log(this);
    console.log(this.a);
  },
  f2: () => {
    console.log(this);
    console.log(this.a);
  },
}
obj.f1()
// { a: 1, f1: [Function: f1], f2: [Function: f2] }
// 1
obj.f2()
// Window
// undefined
obj.f2.bind(obj)()
// Window
// undefined