---

# 默认为文件名称
title: 

tags:
  - crypto-js
  - 加密|解密

# 类别中已包含文件夹名称
categories:

description: 当数据需要加密后保存到文帝文件中时，可以用到它

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-23 17:36:30
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
npm i crypto-js
```



## 使用

```js
const CryptoJS = require("crypto-js")

// 用于生成 key 和 iv
function randomHex() {
  const randomUnit = () => "0123456789abcdef".charAt(Math.min(Math.floor(Math.random() * 16), 15))
  return Array.from({ length: 16 }, () => randomUnit()).join("")
}

function Decrypt(word, key, iv) {
  key = CryptoJS.enc.Utf8.parse(key)
  iv = CryptoJS.enc.Utf8.parse(iv)
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

function Encrypt(word, key, iv) {
  key = CryptoJS.enc.Utf8.parse(key)
  iv = CryptoJS.enc.Utf8.parse(iv)
  let srcs = CryptoJS.enc.Utf8.parse(word)
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.ciphertext.toString().toUpperCase()
}

```



