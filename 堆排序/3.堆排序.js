// https://www.cnblogs.com/ckAng/p/12390124.html
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

function heapSort(A) {
  console.log('before:', A);
  for (let i = Math.floor(A.length / 2 - 1); i >= 0; i--) {
    shiftDown(A, i, A.length)
  }
  for (let i = Math.floor(A.length - 1); i > 0; i--) {
    swap(A, 0, i)
    shiftDown(A, 0, i)
  }
  console.log('after:', A);
  return A
}

heapSort([5, 2, 3, 4, 1])
// before: [ 5, 2, 3, 4, 1 ]
// after: [ 5, 4, 3, 2, 1 ]
heapSort([5, 2, 3, 4, 1, 6, 9, 8, 7, 10])
// before: [
//   5, 2, 3, 4,  1,
//   6, 9, 8, 7, 10
// ]
// after: [
//   10, 9, 8, 7, 6,
//    5, 4, 3, 2, 1
// ]