---

# 默认为文件名称
title: 

tags:
  - excel
  - xlsx
  - filer-serve

# 类别中已包含文件夹名称
categories:

description: 前端读取与保存为 excel 文件, 使用了 xlsx 与 file-sever 这两个库

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-26 2:06:50
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

## 安装

```shell
npm i file-saver xlsx
```

## 代码

```js
import XLSX from 'xlsx'
import fileSever from 'file-saver'

const s2ab = s => {
  var buf;
  if (typeof ArrayBuffer !== 'undefined') {
    buf = new ArrayBuffer(s.length)
    var view = new Uint8Array(buf)
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
    return buf
  } else {
    buf = new Array(s.length);
    for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
}

/**
 * @param data Array，表体数据 - 每一项数据都是以 titles 为 keys 的对象
 * @param titles Array，字段名
 * @param filename String，文件名
 */
export function exportExcel(data, titles, filename){
  const wb = XLSX.utils.book_new()
  const ws = XLSX.utils.json_to_sheet(data, {
    header: titles
  })
  XLSX.utils.book_append_sheet(wb, ws, filename)
  const wbout = XLSX.write(wb, { type: 'binary' })
  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' })
  fileSever.saveAs(blob, filename + '.xlsx')
}

export function importExcel(file, callback) {
  const reader = new FileReader()
  reader.readAsBinaryString(file)
  reader.onload = function (e) {
    const context = XLSX.read(e.target.result, { type: "binary" });
    const obj = XLSX.utils.sheet_to_json(
      context.Sheets[context.SheetNames[0]]
    )
    callback && callback(obj)
  }
}


```

