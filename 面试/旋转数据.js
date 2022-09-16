var rotate = function (nums, k) {
  const ans = []
  const n = nums.length
  for (let i = 0; i < k; i++) {
    ans.unshift(nums[n - 1 - i])
  }
  for (let j = 0; j < n - k; j++) {
    ans.push(nums[j])
  }
  return ans
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
