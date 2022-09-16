/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

  const nums = [];         //定义新的数组用来存放字符串
  let i = 0;
  while (i < s.length) {
    let start = i;
    while (i < s.length && s.charAt(i) != ' ') {      //遍历一段字符串，查出这个单词的长度
      i++;
    }
    for (let p = start; p < i; p++) {                    // 循环将字符串倒序存入数组当中
      nums.push(s.charAt(start + i - p - 1));
    }
    while (i < s.length && s.charAt(i) == ' ') {       //在倒序之后的数组中加上一个空格字符串
      nums.push(' ');
      i++;
    }
  }
  return nums.join('');               //将数组连接成为一个字符串

};

// 作者：ZJTDyzj
// 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/solution/js-fan-zhuan-zi-fu-chuan-zhong-dan-ci-ch-s412/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。