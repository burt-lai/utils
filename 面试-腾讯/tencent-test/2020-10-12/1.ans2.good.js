/*******************************************************************************
 *
 *4.有一堆整数，请把它们分成三份，确保每一份和尽量相等。
 * [11,42,23,4,5,6,4,5,6,11,23,42,56,78,90]
 *
 // https://blog.csdn.net/JJWanna/article/details/111190678
 
 ******************************************************************************/
function foo(arr) {
  let AMOUNT = arr.length;
  if (!AMOUNT) return false;
  if (AMOUNT === 3) return arr;
  arr.sort((a, b) => a - b);
  let total = 0;
  let maxNumberTotal = 0;
  for (let i = 0; i < AMOUNT; i++) {
    total += arr[i];
  }
  maxNumberTotal = total / 3;
  let tempTotal = arr[AMOUNT - 1];
  let firstArr = [arr[AMOUNT - 1]];
  let delIndex = [AMOUNT - 1];
  let firstIndex = -1;
  //获取第一份数据
  for (let i = AMOUNT - 2; i > 0; i--) {
    const el = arr[i];
    tempTotal += el;//每次拿最大的；
    firstArr.push(el);
    delIndex.push(i);
    if (tempTotal === maxNumberTotal) { // 刚好等于最大值跳出循环
      break;
    } else if (tempTotal > maxNumberTotal) { // 发现超过最大值，减回去
      tempTotal -= el;
      delIndex.pop();
      firstArr.pop();
    } else if (tempTotal < maxNumberTotal) { // 发现超过最小值，处理边界问题
      let nextTotal = tempTotal + arr[i + 1]
      if (maxNumberTotal - tempTotal < Math.abs(maxNumberTotal - nextTotal)) {
        //当前总值比上一个总值大；这里是临界值，说明上一个总值肯定是一个比最大值大，所以这里需要和绝对值比较
        if (maxNumberTotal - tempTotal > arr[0]) {//如果下一个平均值和总值相减，比数组第一个数还大，说明还可以继续走下去
          continue;

        } else {
          break;
        }
      }
    }
  }
  for (let i = 0; i < delIndex.length; i++) {
    arr.splice(delIndex[i], 1);
  }
  AMOUNT = arr.length;//注意每次的arr都是不一样的
  let secondArr = [arr[AMOUNT - 1]];
  delIndex = [AMOUNT - 1];
  let secondIndex = -1;
  tempTotal = arr[AMOUNT - 1];
  //获取第二份数组
  for (let i = AMOUNT - 2; i > 0; i--) {
    const el = arr[i];
    tempTotal += el;//每次拿最大的
    secondArr.push(el);
    delIndex.push(i);
    if (tempTotal === maxNumberTotal) { // 刚好等于最大值就跳出循环
      break;
    } else if (tempTotal > maxNumberTotal) { //发现超过最大值，减回去
      tempTotal -= el;
      delIndex.pop();
      secondArr.pop();
    } else if (tempTotal < maxNumberTotal) { //发现超过最小值，处理边界问题
      let nextTotal = tempTotal + arr[i + 1]
      if (maxNumberTotal - tempTotal < Math.abs(maxNumberTotal - nextTotal)) {//当前总值恒小于下一个总值，这里是临界值
        if (maxNumberTotal - tempTotal > arr[0]) {
          continue;
        } else {
          break;
        }
      }
    }
  }
  for (let i = 0; i < delIndex.length; i++) {
    arr.splice(delIndex[i], 1)
  }
  //公平处理，当出现极差情况就需要做公平处理了，这里暂时不考虑极差情况
  return [firstArr, secondArr, arr]
}
console.log(foo([11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]));
// [
//   [ 90, 42 ],
//   [ 78, 56 ],
//   [
//      4,  4,  5,  5,  6,
//      6, 11, 11, 23, 23,
//     42
//   ]
// ]
// 平均值是136
// [
//   [ 90, 42 ], => 132
//   [ 78, 56 ], => 134
//   [
//      4,  4,  5,  5,  6,
//      6, 11, 11, 23, 23,
//     42
//   ] => 140
// ]
