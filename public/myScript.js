// 百度统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script")
  hm.src = "https://hm.baidu.com/hm.js?2cdb75f096101640242cfa2813a686ed"
  var s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(hm, s)
})()

// 禁止右键
document.addEventListener("contextmenu", function () {
  return false;
});
document.oncontextmenu = function () {
  return false;
};

// 禁止打开控制台与查看源代码
document.onkeydown = function (e) {
  // if (event.keyCode == 123) {
  //   return false;
  // }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}