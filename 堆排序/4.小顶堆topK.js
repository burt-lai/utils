function swap(A, i, j) {
  let temp = A[i]
  A[i] = A[j]
  A[j] = temp
}

function shiftDown(A, i, length) {
  let temp
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
    temp = A[i]
    if (j + 1 < length && A[j] > A[j + 1]) {
      j++
    }
    if (temp > A[j]) {
      swap(A, i, j)
      i = j
    } else {
      break
    }
  }
}
function heapTopK(arr, k) {
  console.log('初始数组:', arr);
  let A = arr.splice(0, k)
  for (let i = Math.floor(A.length / 2 - 1); i >= 0; i--) {
    shiftDown(A, i, A.length)
  }
  console.log('中间数组:', arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > A[0]) {
      A[0] = arr[i]
      for (let i = Math.floor(A.length / 2 - 1); i >= 0; i--) {
        shiftDown(A, i, A.length)
      }
    }
  }
  console.log('topK:', A);
  return A
}
heapTopK([5, 2, 3, 4, 1], 2)
// 初始数组: [5, 2, 3, 4, 1]
// topK: [4, 5]
heapTopK([5, 2, 3, 4, 1, 6, 9, 8, 7, 10], 2)
// 初始数组: [
//   5, 2, 3, 4,  1,
//   6, 9, 8, 7, 10
// ]
// topK: [ 9, 10 ]