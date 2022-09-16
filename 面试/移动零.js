

/**
 * @description 把0全部移动到最右边·
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/
var moveZeroes = function (nums) {
  let left = 0, right = 0
  // left: 0区的第一个下标，right待定区的第一个下标
  while (right < nums.length) {
    //遇上非0元素，交换left和right对应的元素
    if (nums[right] !== 0) {
      if (left !== right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      left++//交换之后left++
    }
    right++
  }
  console.log(nums);
};

moveZeroes([1, 0, 2, 3, 0, 0, 5])
// => [  1, 2, 3, 5,  0, 0, 0]
