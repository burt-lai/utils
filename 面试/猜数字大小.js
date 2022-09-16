/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1, right = n
  while (left <= right) {
    const mid = ~~((left+right)/2)
    const r = guess(mid)
    if (r === 0) {
      return mid
    }
    if (r === -1) {
      left = mid+1
    } else {
      right = mid -1
    }
  }
};