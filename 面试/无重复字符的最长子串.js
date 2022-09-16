/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
   let ans = 0
  const m = new Map()
  for (let start = 0, end = 0; end < s.length; end++) {
    const char = s.charAt(end)
    if (m.has(char)) {
      start = Math.max(m.get(char), start)
    }
    ans = Math.max(ans, end - start + 1)
    m.set(char, end + 1)
  }
  return ans
};

console.log(lengthOfLongestSubstring('abcabcbb'))


// var lengthOfLongestSubstring = function(s) {
//   // 哈希集合，记录每个字符是否出现过
//   const occ = new Set();
//   const n = s.length;
//   // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//   let rk = -1, ans = 0;
//   for (let i = 0; i < n; ++i) {
//       if (i != 0) {
//           // 左指针向右移动一格，移除一个字符
//           occ.delete(s.charAt(i - 1));
//       }
//       while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
//           // 不断地移动右指针
//           occ.add(s.charAt(rk + 1));
//           ++rk;
//       }
//       // 第 i 到 rk 个字符是一个极长的无重复字符子串
//       ans = Math.max(ans, rk - i + 1);
//   }
//   return ans;
// };

// // 作者：LeetCode-Solution
// // 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
// // 来源：力扣（LeetCode）
// // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// var lengthOfLongestSubstring = function(s) {
//   // 哈希集合，记录每个字符是否出现过
//   const occ = new Set();
//   const n = s.length;
//   // 右指针，初始值为 0，相当于我们在字符串的左边界的左侧，还没有开始移动
//   let rk = 0, ans = 0;
//   for (let i = 0; i < n; ++i) {
//       if (i != 0) {
//           // 左指针向右移动一格，移除一个字符
//           occ.delete(s.charAt(i - 1));
//       }
//       while (rk  < n && !occ.has(s.charAt(rk ))) {
//           // 不断地移动右指针
//           occ.add(s.charAt(rk));
//           ++rk;
//       }
//       // 第 i 到 rk 个字符是一个极长的无重复字符子串
//       ans = Math.max(ans, rk - i);
//   }
//   return ans;
// };