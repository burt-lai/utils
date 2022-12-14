// 考试题目和要点：

// 1、中文大写金额数字前应标明“人民币”字样。中文大写金额数字应用壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整等字样填写。（30分）

// 2、中文大写金额数字到“元”为止的，在“元”之后，应写“整字，如￥ 532.00应写成“人民币伍佰叁拾贰元整”。在”角“和”分“后面不写”整字。（30分）

// 3、阿拉伯数字中间有“0”时，中文大写要写“零”字，阿拉伯数字中间连续有几个“0”时，中文大写金额中间只写一个“零”字，如￥6007.14，应写成“人民币陆仟零柒元壹角肆分“。（40分）

// 壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整
while ((line = readline())) {
  var int = line.split('.')[0]
  var dec = line.split('.')[1]
  var rmb = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  var rmb1 = ['', '拾', '佰', '仟', '万', '亿']
  var a = ''
  var b = ''

  if (dec > 0) {
    if (dec[0] > 0) {
      b += rmb[dec[0]] + '角'
    }
    if (dec[1] > 0) {
      b += rmb[dec[1]] + '分'
    }
  } else {
    b = '整'
  }
  if (int > 0) {
    var arr = int.split('')
    for (var i = 0; i < arr.length; i++) {
      a += rmb[arr[i]] + rmb1[arr.length - 1 - i]
    }
    if (a[0] == '壹' && a[1] == '拾') {
      a = a.substr(1)
    }
    a += '元'
  } else {
    a = ''
  }
  console.log('人民币' + a + b)
}