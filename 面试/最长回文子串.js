/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s === '') {
    return 0
  }
  let start = 0,
    end = 0
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i)
    const len2 = expandAroundCenter(s, i, i + 1)
    const len = Math.max(len1, len2)
    console.log('len:', len)
    if (len > end - start) {
      start = i - ((len - 1) / 2)
      console.log(start)
      end = i + (len / 2)
      console.log(end)
    }
  }
  return s.substring(start, end + 1)
}

var expandAroundCenter = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}

console.log(longestPalindrome('babbab'))
// babbab
console.log(longestPalindrome('ababbab'))
// ababbab
