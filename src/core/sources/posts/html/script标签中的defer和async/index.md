---

# 默认为文件名称
title: 

tags:
  - async
  - defer

# 类别中已包含文件夹名称
categories:

description: script的下载、执行与html渲染的关系，defer与async的作用

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-02 16:34:48
updateTime:
 
# 默认随机
img: 

# 目录
toc: true

# 评论
comment: true
---

> 引自 ： https://blog.csdn.net/chenrongwei92/article/details/120691770

## 普通script

1.  文档解析的过程中，如果遇到 script 脚本，**停止页面的解析渲染，下载 script 脚本**。
2.  如果是多个 script 脚本，近似于同时**并行下载 script 脚本**。(虽然说是遇到 script 脚本，就停止后面标签的解析渲染; 但 chrome 做了优化，遇到 script 脚本，会快速的查看后边有没有需要下载其他资源的，一起并行下载，为了节省一部分下载的时间。)
3. 不论 script 脚本哪个先下载好，都按照 html 中的先后**顺序依此执行**。 即如果后面的 script 脚本先下载好，要等前面的 script 脚本下载好并执行后，才能执行。
4. 执行 script 脚本时，停止页面的解析渲染；执行完 script 脚本，继续页面的解析渲染。
5. 执行完script脚本和页面解析渲染完，才会依此触发`DOMContentLoaded`事件

关键点：

- 下载和执行都阻塞渲染
- 并行下载，顺序执行
- 执行与渲染交替进行，都完毕后触发 DOMContentLoaded

推荐使用：

- 将 script 放在 body 底部，避免阻塞页面的解析渲染

## defer

1. 文档解析时，遇到设置了 defer 的script脚本，就会在后台进行下载，**下载并不会阻止文档的解析渲染**。
2. 如果是多个设置了 defer 的 script 脚本, 近似于同时**并行下载** defer 脚本。
3. 当**页面解析渲染完毕后**，会等到所有的 defer 脚本下载完毕并按照**顺序执行**，执行完毕后会触发 DOMContentLoaded 事件。
4. 如果 defer 脚本下载较快，会等到页面解析渲染完毕后, 才按照顺序执行defer脚本。执行完毕后会触发 DOMContentLoaded。
5. 如果 defer 脚本下载较慢，在下载完前，页面解析渲染已完毕，会推迟 DOMContentLoaded 执行的时间；等defer脚本下载完后，才按照顺序执行 defer 脚本。执行完毕后会触发 DOMContentLoaded。

关键点：

- 下载和执行不阻塞渲染
- 并行下载，顺序执行
- 优先渲染，渲染同时开始下载，渲染完毕后且下载完成后执行，执行完毕后触发 DOMContentLoaded

推荐使用：

- 脚本代码依赖于页面中的 DOM 元素（文档是否解析完毕），或者被其他脚本文件依赖。

## async

1. 文档解析时，遇到设置了 async 的 script 脚本，就会在后台进行下载，**下载并不会阻止文档的解析渲染**。
2. 如果是多个设置了 async 的 script 脚本, 近似于同时**并行下载** async 脚本。
3.  async 脚本的**执行会阻止文档的解析渲染**。
4. 哪个 async 脚本先下载完，就立刻执行，执行时阻止文档的解析渲染。 async 脚本执**行顺序不按照页面中的脚本先后顺序**。
5.  **async 脚本的下载和执行不计入 DOMContentLoaded 事件统计**。
6.  因 async 脚本下载不阻塞文档的解析渲染；如果 async 脚本下载较快，趁 async 脚本下载很短时间内，文档的解析渲染未完成， async 下载后立即执行，执行时会阻塞文档的解析渲染；执行后，继续文档的解析渲染, 等页面的解析渲染完毕后，触发 DOMContentLoaded 事件。这种场景，async脚本的执行如果慢, 会延迟 DOMContentLoaded 事件的触发时间。
7. 如果 async 脚本下载较慢, 当 async 还在下载时, 文档的解析渲染已完成, 这时不会等待 async 的下载, 会直接触发 DOMContentLoaded 事件。这种场景， async 脚本的下载和执行不会延迟 DOMContentLoaded 事件的触发时间。

总结:

- 下载不阻塞渲染，执行阻塞渲染
- 并行下载，执行按下载完成的先后顺序
- DOMContentLoaded 触发仅在渲染完成之后，无关 async

推荐使用：

- 如果你的脚本并不关心页面中的 DOM 元素（文档是否解析完毕），并且也不会产生其他脚本需要的数据