/*
 * @Author: laifeipeng 
 * @Date: 2019-02-10 10:00:36 
 * @Last Modified by: laifeipeng
 * @Last Modified time: 2022-09-11 16:27:18
 */

/********* 0、准备工作 **********/
// 0-1、生成数组
const genArr = length => Array.from({ length }, () => ~~(Math.random() * 100));
const arr = genArr(10);
// 彩色打印
const padZero = n => n < 10 ? ` ${n}` : `${n}`; //因为生成的数组不超过100，最多2位数
const arrStr = arr => arr.length ? arr.reduce((acc, item) => acc + '    ' + padZero(item)) : ''
const logTitle = str => console.log(`%c -------------- ${str} -------------- `, 'color:green');
const logArr = arr => console.log(`%c 初始数组 ： ${arrStr(arr)} `, 'color:blue');
const logArr2 = arr => console.log(`%c 排序后数组: ${arrStr(arr)} `, 'color:red');
const logStep = (i, leftArr, rightArr) => console.log(`%c 第${i}趟排序：%c ${arrStr(leftArr)}    %c${arrStr(rightArr)} `, 'color:green', 'color:red', 'color:blue');
const logStep2 = (i, leftArr, pivot, rightArr) => console.log(`%c 第${i}趟排序：%c ${arrStr(leftArr)}    %c${pivot}    %c${arrStr(rightArr)} `, 'color:green', 'color:red', 'color:yellow', 'color:blue');
const logQuickSort = (leftArr, pivot, rightArr) => console.log(`%c 递归排序：%c ${arrStr(leftArr)}    %c${pivot}    %c${arrStr(rightArr)} `, 'color:green', 'color:red', 'color:yellow', 'color:blue');


/********* 1、冒泡排序 **********/
const bubbleSort = arr => {
  const list = arr.slice(); //保证函数为纯函数
  const len = list.length;
  logTitle('1、冒泡排序')
  logArr(list)
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (list[j] < list[j - 1]) {
        const tmp = list[j - 1];
        list[j - 1] = list[j];
        list[j] = tmp;
      }
    }
    i && logStep(i, list.slice(0, i), list.slice(i))//去除i==0
  }
  logArr2(list)
  return list;
}
bubbleSort(arr);

/********* 2、改进版冒泡排序 **********/
const bubbleSort2 = arr => {
  const list = arr.slice(); //保证函数为纯函数
  const len = list.length;
  logTitle('2、改进版冒泡排序')
  logArr(list)
  for (let i = 0; i < len; i++) {
    let exchange = false;
    for (let j = len - 1; j > i; j--) {
      if (list[j] < list[j - 1]) {
        const tmp = list[j - 1];
        list[j - 1] = list[j];
        list[j] = tmp;
        exchange = true;
      }
    }
    i && logStep(i, list.slice(0, i), list.slice(i))//去除i==0
    !exchange && logArr2(list)
    if (!exchange) return list
  }
  logArr2(list)
  return list;
}
bubbleSort2(arr);

/********* 3、选择排序 **********/
const selectionSort = arr => {
  const list = arr.slice(); //保证函数为纯函数
  const len = list.length;
  logTitle('3、选择排序')
  logArr(list)
  for (let i = 0; i < len; i++) {
    let k = i
    for (let j = len - 1; j > i; j--) {
      if (list[j] < list[k]) k = j;
    }
    if (k !== i) {
      const tmp = list[k];
      list[k] = list[i];
      list[i] = tmp;
    }
    i && logStep(i, list.slice(0, i), list.slice(i))//去除i==0
  }
  logArr2(list)
  return list;
}
selectionSort(arr);

/********* 4、直接插入排序 **********/
const insertSort = arr => {
  const list = arr.slice(); //保证函数为纯函数
  const len = list.length;
  logTitle('4、直接插入排序')
  logArr(list)
  logStep(0, list.slice(0, 1), list.slice(1))
  for (let i = 1; i < len; i++) {
    const tmp = list[i];
    let j = i - 1;
    while (j >= 0 && tmp < list[j]) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = tmp;
    logStep(i, list.slice(0, i + 1), list.slice(i + 1))
  }
  logArr2(list)
  return list;
}
insertSort(arr);


/********* 5、二分插入排序 **********/
const insertSort2 = arr => {
  const list = arr.slice(); //保证函数为纯函数
  const len = list.length;
  logTitle('5、二分插入排序')
  logArr(list)
  logStep(0, list.slice(0, 1), list.slice(1))
  for (let i = 1; i < len; i++) {
    const tmp = list[i];
    let low = 0;
    let high = i - 1;
    let j = i - 1;
    while (low <= high) {
      const mid = ~~((low + high) / 2);
      if (tmp < list[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    while (j > high) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = tmp;
    logStep(i, list.slice(0, i + 1), list.slice(i + 1))
  }
  logArr2(list)
  return list;
}
insertSort2(arr);

/********* 6、快速排序 **********/
const quickSort1 = arr => {
  const list = arr.slice(); //为了保证这个函数是纯函数，拷贝一次数组  
  if (list.length <= 1) return list;
  const pivot = list.splice(0, 1)[0]; //选第一个作为基数，并把基数从数组里面删除
  const left = [];
  const right = [];
  for (let i = 0, len = list.length; i < len; i++) { //从0开始
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  return [...quickSort1(left), pivot, ...quickSort1(right)];
}
logTitle('6、快速排序')
logArr(arr)
logArr2(quickSort1(arr))

// 上面const pivot = list.splice(0, 1)[0]; 如果想直接改为list[0],那么后面循环的时候要从i=1开始
const quickSort2 = arr => {
  const list = arr.slice(); //为了保证这个函数是纯函数，拷贝一次数组
  if (list.length <= 1) return list;
  const pivot = list[0]; //选第一个作为基数
  const left = [];
  const right = [];
  for (let i = 1, len = list.length; i < len; i++) { //从1开始
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  return [...quickSort2(left), pivot, ...quickSort2(right)];
}

/********* 7、原地算法快速排序 **********/
const quickSort = arr => {
  const list = arr.slice() // 为了保证这个函数是纯函数拷贝一次数组
  logTitle('7、原地算法快速排序')
  logArr(list)
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
      return;
    }
    let i = left;
    let j = right;
    const baseVal = arr[j]; // 取无序数组最后一个数为基准值
    while (i < j) {         //把所有比基准值小的数放在左边大的数放在右边
      while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
        i++;
      }
      arr[j] = arr[i];    // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
        j--;
      }
      arr[i] = arr[j]; // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal; // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j - 1); // 将左边的无序数组重复上面的操作
    sort(arr, j + 1, right); // 将右边的无序数组重复上面的操作
  }
  sort(list);
  return list;
}
logArr2(quickSort(arr))

/********* 7、原地算法快速排序-3.0版本 **********/

function swap(arr, l, r) {
  if (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
  }
}
const quickSort3 = arr => {
  logTitle('7、原地算法快速排序-3.0')
  logArr(arr)
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      // 为了得到比较均匀的时间复杂度，这里要随机选择一个数，放到最后，来作为基准值
      // swap(arr, left + Math.floor(Math.random() * (right - left + 1)), right)
      const [start, end] = partition(arr, left, right) // 返回等于基准值的数组区间的下标范围[start,end]
      sort(arr, left, start - 1) // < 区
      sort(arr, end + 1, right) // > 区
    }
  }
  const partition = (arr, L, R) => {
    let less = L // < 区 右边界
    let more = R // > 区 左边界
    while (L < more) {
      // arr[R]为基准值；arr[L]为当前位置值，需要比较
      if (arr[L] < arr[R]) { // 当前值 < 基准值
        console.log('<', arr, arr[L], arr[R], less, L);
        swap(arr, less++, L++)
        console.log('<', arr, arr[L], arr[R], less, L);
      } else if (arr[L] > arr[R]) { // 当前值 > 基准值
        console.log('>', arr, arr[L], arr[R], more, L);
        swap(arr, more--, L)
        console.log('>', arr, arr[L], arr[R], more, L);
      } else {
        L++
      }
    }
    console.log(arr[R]);
    swap(arr, more, R)
    console.log(less, more, arr);
    return [less, more]
  }
  sort(arr)
  logArr2(arr)
}

quickSort3(arr.slice())

/********* 8、希尔排序 **********/
// 排序思路：先将整个待排序记录序列分割成若干个子序列，在序列内分别进行直接插入排序，待整个序列基本有序时，再对全体记录进行一次直接插入排序。
const shellSort = arr => {
  const list = arr.slice(); //保证函数为纯函数
  const len = list.length;
  logTitle('8、希尔排序')
  logArr(list)
  let gap = ~~(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const tmp = list[i];
      let j = i - gap;
      while (j >= 0 && tmp < list[j]) {
        list[j + gap] = list[j];
        j = j - gap;
      }
      list[j + gap] = tmp;
    }
    gap = ~~(gap / 2);
  }
  return list;
}
logArr2(shellSort(arr))