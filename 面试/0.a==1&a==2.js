const a = {
  value: 0,
  valueOf () {
    this.value++
    return this.value
  }
}
if (a == 1 && a == 2) {
  console.log('right')
} else {
  console.log('wrong')
}
