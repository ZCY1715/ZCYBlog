---

# 默认为文件名称
title: 

tags:
  - Headers
  - URLSearchParams
  - ReadableStream
  - AbortController

# 类别中已包含文件夹名称
categories:

description: 这是两种浏览器的Http请求方式，其中XMLHttpRequest比较老了，但是兼容性好，axios就是使用它封装的。Fetch比较是比较新的,且是用 Promise 封装的,使用更简单。

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-23 17:39:30
updateTime:
 
# 默认随机
img: 

# 目录
toc: true

# 评论
comment: true

# 发布
publish: true

---

## XMLHttpRequest

```jsx
// 构造函数
const xhr = new XMLhttpRequest()

/* xhr 的状态 readyState 包括：
	UNSENT(0): 刚被创建时
	OPENED(1): open() 方法已经被调用，开启了一个请求
	HEADERS_RECEIVED(2): send() 方法已经被调用，并且头部和状态已经可获得
	LOADING(3): 下载中；responseText 属性已经包含部分数据
	DONE(4): 下载操作已完成，一次请求已完成
*/

// 状态的监听
// 1. onreadystatechange: readystate 发生变化时触发
xhr.onreadystatechange = () => {
    const {UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE} = XMLHttpRequest
    switch(xhr.readyState){
        case UNSENT: // 0
            break
        case OPENED: // 1
            break
        case HEADERS_RECEIVED: // 2
            break
        case LOADING: // 3
            break
        case DONE: // 4
            break
    }
}

// 2. 对每一种状态的监听
const xhr = new XMLHttpRequest()
// 'UNSENT': open 调用之前或者 abort 中止后
xhr.open('GET', '/api', true)
// 'OPENED': open 调用之后, send 调用之前
xhr.send()
// 'HEADERS_RECEIVED': send 调用之后，服务器反馈之前

// 'LOADING': 服务器开始发送数据, 可以多次触发
xhr.onprogress = function () {
    
}

// 'DONE': 服务器数据发送完了或者请求失败(404、500)
xhr.onload = function () {
    
}


// xhr 中的属性
/*
1. onreadystatechange
2. readyState
3. response: 响应的正文对象, 类型取决于 responseType
4. responseText: 响应的文本对象, 如果 responseType = 'text' 的话
5. responseXML: 响应的 xml 对象，如果 responseType = 'document' 的话
6. responseType: 响应数据类型, 默认为 text, 可以更改来对响应数据转化处理
	- '' | 'text': 文本类型
	- 'arraybuffer'
	- 'blob'
	- 'document'
	- 'json'
7. status: 响应的状态码 (200、404、500)
8. timeout: 最大请求时间，超时自动中止
9. upload: 用于给数据上传时添加事件
10. withCredentials: 是否携带 cookie 或授权信息
*/


// xhr 中的方法
/*
1. abort(): 如果请求已被发出，则立刻中止请求，同时状态变为 UNSENT(0)
	可以使用 onAbort 监听操作
2. setRequestHeader(name, value): 设置请求头，必须在 open 与 send 之间完成
3. getAllResponseHeaders(): 返回所有的响应头，没有为 null, 字符串类型, 以 '\t\n' 分割
4. getResponseHeader(name): 返回指定的响应头，没有为 null, 字符串类型，如果有多个同名以 ', ' 分割
5. open(): 初始化一个新创建的请求，或重新初始化一个请求
	open(method, url, async)
	- method: 请求方法
	- url: 请求地址
	- async: 请求是否为异步，默认为 true，不为异步会导致JS阻塞
		为同步时，send() 方法直到收到答复前不会返回
6. send(): 发送请求
	send(body)
	- body: 要发送的数据体 Document | Blob | FormData | URLSearchParams | String
		类型为 Document 时发送前会被序列化
*/

// xhr 中的事件
/* 上述的状态监听事件，还有以下：
1. onerror
2. onloadstart: 接收到响应数据时触发，后面就进入 progress(readystate === 3) 阶段
3. onloadend: 当请求结束时触发，无论请求成功(load)还是失败(abort 或 error)
4. ontimeout: 请求超时时触发
*/
```

### 上传与下载进度

```jsx
const xhr = new XMLHttpRequest()

function whenUploadProgress(progress) {
  // todo
}

function ProgressHandler(e){
    if (e.lengthComputable) { // 请求头包含 `Content-Length`
    	const progress = e.loaded / e.target
    	whenUploadProgress && whenUploadProgress(progress)
    }
}

// 上传
xhr.upload.addEventListener("progress", ProgressHandler)
// 下载
xhr.addEventListener("progress", ProgressHandler)
```

### 响应头规格化

```js
const xhr = new XMLHttpRequest()

function formatHeaders(headerStr){
    const headers = new Headers()
    headerStr.trim().split('\t\n').forEach(item => {
        const [key, value] = item.split(': ')
        headers.set(key, value)
    })
    return headers
}

const headers = formatHeaders(xhr.getResponseHeaders())
```



## Fetch

```js
fetch(url, {
    /* 基本参数 */ 
	method,
	headers, 
	body,
	/* 安全参数 */ 
	referrer,
	referrerPolicy,
	credential,
	/* 请求模式 */ 
	mode,
	/* 响应模式 */ 
	redirect,
	/* 缓存模式 */ 
	cache
}).then(response => {
   	// 相当于 XMLHttpRequest 中 readystate === 3
}).then(data => {
    // 相当于 XMLHttpRequest 中 readystate === 4
})


/*
1. headers: new Headers() 对象或 Json 对象
	{
        'Authorization': `Bear ${token}`
	}

2. body: POST 请求的数据体，Blob | FormData | URLSearchParams | String

3. referrer: 设置请求来源，用于资源防盗
	服务器可以通过这个字段判断请求来自哪个位置，从而有选择地返回内容。 比如某个网站的图片不允许外链，则当从另一个网站请求该图片时，服务器从该字段得知请求来自另一个网站而非自己的网站，于是拒绝提供该资源的访问。
	- "client": 默认，当前 URL
	- "" | "no-referrer" : 不携带该字段
	- url: 自定义的 URL
	
4. referrerPolicy: 请求来源策略，指定了 HTTP 头部 referer 字段的值，优先级高于 referrer
	- "no-referrer": 不携带该字段
	- "no-referrer-when-downgrade": 默认，Https请求携带, Http时不携带
	- "origin": 只发送 host 部分
	- "origin-when-cross-origin": 跨域时发送 host 部分, 同源时不限制
	- "unsafe-url": 总是发送

5. credential: 是否发送 cookie
	- "omit": 不发送
	- "include": 都发送
	- "same-origin": 默认，同源发送，跨域不发送
	
6. mode: 请求的模式
	- "same-origin": 只允许同源请求
	- "no-cors": 允许同源或简单跨域请求
	- "cors": 默认，允许非简单跨域请求
	
7. redirect: 重定向的模式
	- "follow": 默认，遵循重定向响应跳转
	- "error": 视重定向为错误
	- "manual": 拦截重定向并手动处理，不跟随 HTTP 跳转，但是 response.url 属性会指向新的 URL，response.redirected 属性会变为 true，由开发者自己决定后续如何处理跳转

8. cache：缓存模式
	- "default": 默认，先读本地缓存，无则请求服务器，保存缓存
	- "no-store": 直接请求服务器，且不更新本地缓存
	- "reload": 直接请求服务器，但更新本地缓存
	- "no-cache": 协商缓存
	- "force-cache": 强制缓存
	- "only-if-cached": 只检查缓存，如果缓存里面不存在，将返回504错误
*/


// 对于 fetch 的返回值：Promise(Response => {})
/* 
Response 属性：
1. ok: 表示请求是否成功。true对应 HTTP 请求的状态码 200 到 299，false对应其他状态码
2. status: 响应的状态码
3. statusText: 响应状态信息
4. headers: 响应头 Headers 对象
5. redirected: Response 是否来自一个重定向(301、302)，如果是的话，它的 URL 列表将会有多个条目
6. url: 完整 URL
7. type: 类型
	- "basic": 默认，同源响应
	- "cors": 跨域响应
	- "opaque": 同源或简单跨域响应
	- "error": 网络错误
8. body: 暴露其 body 内容的 ReadableStream（流读取）
	

Response 方法：
1. text(): 得到文本字符串，如html数据
2. json(): 得到 JSON 对象
3. blob(): 得到二进制 Blob 对象
4. formData(): 得到 FormData 表单对象
5. arrayBuffer(): 得到二进制 ArrayBuffer 对象，如流媒体文件，视频音频类

*/
```

### Header

请求头对象

```js
const headers = new Headers()
// 类似于 Map 的用法
headers.append(key, value) // 字段追加，无则创建
headers.delete(key)
headers.get(key)
headers.set(key, value) // 字段重写，无则创建
headers.has(key)
headers.keys()
headers.values()
headers.entries()
```

### URLSearchParams

创建GET参数对象

```js
// 对 str 解析
const urlSearchParams = new URLSearchParams(str)
// 类似于 Map 的用法
urlSearchParams.append(key, value) // 字段追加，无则创建
urlSearchParams.delete(key)
URLSearchParams.get(key) // 返回第一个值
URLSearchParams.getAll(key) // 返回所有值的数组
URLSearchParams.set(key, value) // 字段重写，无则创建
URLSearchParams.has()
URLSearchParams.keys()
URLSearchParams.values()
URLSearchParams.entries()
URLSearchParams.sort() // 按字段名排序
URLSearchParams.toString() // 所有字段组成的字符串，可直接使用在 URL 上
```

### ReadableStream

一个可读取的二进制流操作

```js
// 对于怎么构建的，暂不做说明
// Fetch API 中的 Response.body 就是一个创建好的实例对象
const readableStream = new ReadableStream(/* */)

/*
属性: 
1. locked: 返回该可读流是否被锁定到一个 reader

方法: 
1. cancel(): 取消读取流，读取方发出一个信号，表示对这束流失去兴趣
2. getReader(): 创建一个读取器并将流锁定于其上。一旦流被锁定，其他读取器将不能读取它，直到它被释放。
3. pipeTo(WritableStream): 将读取流传递给自定义的可写流中

*/

// 可以用它来循环读取后端发来的数据，做下载进度条
const reader = readableStream.getReader()
// 返回一个 Promise 对象, 当读取成功后触发
reader.read().then(({done, value}) => {})
// value 为 ArrayBuffer 类型
```

### 下载进度

```js
function whenUploadProgress(progress) {
  // todo
}

// 传入 Fetch API 的 Response 对象
async function ProgressHandler(response){
    // 必须要有该字段
    const contentLength = response.headers.get('Content-Length')
    if(!contentLength) return
    let receivedLength = 0
    const chunks = []
    const reader = response.body.getReader()
    while(true){
        const {done, value} = await reader.read()
        if(done) break
        receivedLength += value.length
        whenUploadProgress && whenUploadProgress( receivedLength / contentLength )
        chunks.push(value)
    }
    const chunksAll = new Uint8Array(receivedLength)
    let position = 0
    for (let chunk of chunks) {
        chunksAll.set(chunk, position)
        position += chunk.length
    }
    const result = new TextDecoder().decode(chunksAll)
    return result
}
```

### AbortController

控制器对象，允许你根据需要中止一个或多个 Web 请求

```js
// 实例一个信号量控制器
const abortController = new AbortController()

/*
属性：
1. signal: 信号量对象 AbortSignal
	属性：
	1. aborted: 是否被中止
	2. reason: 中止的原因
	方法:
	1. throwIfAborted(): 当信号被中止时，抛出这个错误
	2. abort(): 返回一个已经是中止态的 AbortSignal, 它不会触发该信号量控制器的 abort() 方法
	3. timeout(): 返回一个在指定时间后将自动终止的 AbortSignal
	事件:
	onabort: 当该信号量控制器触发 abort() 时执行
	
方法:
1. abort(reason): 向信号量发出中止信号(可携带原因字符串)
*/
```

### 取消请求

```js
const abortController = new AbortController()
const signal = abortController.signal

// 配置 options 中的 signal 为控制器的 signal
fetch(url, { signal }).then(/* */)

// 触发取消请求
function abort(){
    abortController.abort()
}

// 超时机制: 超出时间后自动取消请求
fetch(url, {
    signal: signal.timeout(2000)
}).then(/* */)
```

## 注意

1. **两者发送 Json 数据都需要将其转化成 String**，`JSON.stringify(data)`
2. 两者对于返回的错误的 HTTP 状态码(404、500等)，请求本身不会被认为是错误的，不会触发 `onerror`，**当且仅当网络故障时或请求被阻止(Abort)时**。XMLHttpRequest 中通过 `xhr.status`，Fetch 通过 `response.ok | response.status` 判断！
3. **Fetch API 对上传的进度监控暂时还不支持，可能后面会在 options 中添加 observe 监听的方法，也可能会在请求的 body 参数中支持 ReadableStream 类型**













