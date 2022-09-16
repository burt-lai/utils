/*******************************************************************************
 *
 *4.有一堆整数，请把它们分成三份，确保每一份和尽量相等。
 * [11,42,23,4,5,6,4,5,6,11,23,42,56,78,90]
 *
 ******************************************************************************/
//把数组分成n份，每一份的和尽量相等，返回一个二维数组
function fun(total, n) {
  //先对整个数组进行排序
  total.sort((a, b) => a - b);

  //求和
  var sum = 0;
  for (var i = 0; i < total.length; i++) {
    sum += total[i];
  }

  var avg = Math.ceil(sum / n);
  console.log('avg:', avg); // 136

  //结果数组
  var result = []; //长度为n

  for (var i = 0; i < n; i++) {
    result[i] = [total.pop()];
    result[i].sum = result[i][0];

    //组成一个分数组
    while (result[i].sum < avg && total.length > 0) {
      for (var j = 0; j < total.length; j++) {
        if (result[i].sum + total[j] >= avg) {
          result[i].push(total[j]);
          result[i].sum += total[j];
          break;
        }
      }

      if (j == total.length) {
        result[i].push(total.pop());
        result[i].sum += result[i][result[i].length - 1];
      } else {
        //从数组中移除此元素
        total.splice(j, 1);
      }
    }

    sum -= result[i].sum;
    avg = Math.ceil(sum / (n - 1 - i));

  }
  console.log(result);
  return result;
}
fun([11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90], 3)
// 平均值是136
// [
//   [ 90, 56, sum: 146 ],
//   [ 78, 42, 11, sum: 131 ],
//   [ 42, 23, 23, 11, 6, 6, 5, 5, 4, 4, sum: 129 ]
// ]
// 跟第二个解法相比，这个分法更差!下面的更好，下面的是第二个解法！
// [
//   [ 90, 42 ], => 132
//   [ 78, 56 ], => 134
//   [
//      4,  4,  5,  5,  6,
//      6, 11, 11, 23, 23,
//     42
//   ] => 140
// ]

const a = [
  4, 4, 5, 5, 6,
  6, 11, 11, 23, 23,
  42
]
const sum = a.reduce((pre, cur) => {
  pre += cur
  return pre
})
console.log(sum)