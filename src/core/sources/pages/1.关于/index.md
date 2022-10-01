---

# 默认为文件夹名
title: 

# 默认为文件夹序号, 作为展示顺序
rank: 

# 英文且不能包含空格, 作为URL路径
# 必填项
path: about

# 配置项
config:

  img: 

  description: 勿意、勿必、勿固、勿我

---

<script setup>
// 配置引用
import { inject } from 'vue'
const _config = inject('config')
import PrivateInfo from './PrivateInfo.vue'

</script>

<PrivateInfo :info="_config.PrivateInfo" />

## 关于我

<span style="font-size: 28px; color: var(--theme-color);">{{_config.motto}}</span>

在校大学生，软件工程专业，专注于前端技术，正处在学习积累阶段。
希望在这里留下自己的学习足迹，供自己以及他人后来参考。
如果：
- 博文中出现**错误**
- 对博文内容有**疑问**
- 以及其他相关情形

可以通过以下方式联系我！

- wechat : zcy1715614103
- qq     : 1715614103
- github : https://github.com/ZCY1715

**非诚勿扰，谢谢**!


## 关于博客

本博客是本人自己开发，目前可用版本@1.0.0已开源，并在持续更新中，有需要的朋友可自行使用，敬请期待后续版本发布...

代码以及使用教程地址在 👉[这里](https://github.com/ZCY1715/ZCYBlog)
