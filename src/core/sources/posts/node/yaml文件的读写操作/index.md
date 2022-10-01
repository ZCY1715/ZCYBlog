---

# 默认为文件名称
title: 

tags:
  - yaml

# 类别中已包含文件夹名称
categories:

description: 配置文件使用 yaml 非常方便的，一看就知道怎么配置

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-23 17:39:25
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
npm i js-yaml
```

## 使用

```js
const yaml = require('js-yaml')

function readYaml(path) {
  const fileContents = fs.readFileSync(path, 'utf8')
  return yaml.load(fileContents)
}

function writeYaml(path, data) {
  const yamlStr = yaml.dump(data)
  fs.writeFileSync(path, yamlStr, 'utf8')
}
```

