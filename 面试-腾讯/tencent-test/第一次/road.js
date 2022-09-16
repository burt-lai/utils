// 7*3 网格，路径
function getRoadLength (m, n) {
  const dp = []
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === 1) {
        dp[(i, j)] = 1
      } else {
        dp[(i, j)] = dp[(i, j - 1)] + dp[(i - 1, j)]
      }
    }
  }

  return dp[(m, n)]
}
console.log(getRoadLength(7, 3))

function getRoadLength2 (m, n) {
  return C(m - 1 + n - 1, n - 1)
}
function C (m, n) {
  return A(m) / A(n) / A(m - n)
}
function A (n) {
  if (n === 1) {
    return 1
  }
  return n * A(n - 1)
}
console.log(getRoadLength2(7, 3))
