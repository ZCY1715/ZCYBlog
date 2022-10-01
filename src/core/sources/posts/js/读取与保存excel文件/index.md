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

/**
 * @param data Array，表体数据
 * @param key Array，字段名
 * @param filename String，文件名
 */
export const exportJsonToExcel = (
  data,
  key,
  filename
) => {
  const wb = XLSX.utils.book_new()

  const ws = XLSX.utils.json_to_sheet(data, {
    header: key,
  })

  XLSX.utils.book_append_sheet(wb, ws, filename)
  const wbout = XLSX.write(wb, { type: 'buffer' })
  const blob = new Blob([wbout], { type: 'application/octet-stream' })
  fileSever.saveAs(blob, filename + '.xlsx')
}

export function importExcel(file, callback) {
  const reader = new FileReader()
  reader.readAsArrayBuffer(file)
  reader.onload = () => {
    const context = XLSX.read(reader.result, { type: "buffer" });
    const obj = XLSX.utils.sheet_to_json(
      context.Sheets[context.SheetNames[0]]
    )
    callback && callback(obj)
  }
}

```

