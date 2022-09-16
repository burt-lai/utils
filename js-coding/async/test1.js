console.log(1)

setTimeout(() => {
  console.log(2)
})

new Promise((resolve, reject) => {
  console.log(3)
  // resolve()
  reject()
  console.log(4);
}).then(() => {
  console.log(5);
}).catch(() => {
  console.log(6);
}).then(() => {
  console.log(7);
}).then(() => {
  console.log(77);
}).then(() => {
  console.log(777);
})

setTimeout(() => {
  console.log(8)
  Promise.resolve().then(() => {
    console.log(9);
  })
})


setTimeout(() => {
  console.log(10)
})

// 1
// 3
// 4
// 6
// 7
// 77
// 777
// 2
// 8
// 9
10