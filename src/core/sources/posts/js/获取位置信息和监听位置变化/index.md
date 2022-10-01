---

# 默认为文件名称
title: 

tags:
  - Geolocation

# 类别中已包含文件夹名称
categories:

description: 在 js 中获取用户位置信息完成相关定制功能，监听用户位置变化

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-11 15:55:25
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

# Geolocation

**Geolocation** 接口是一个用来获取设备地理位置的可编程的对象，它可以让 Web 内容访问到设备的地理位置，这将允许 Web 应用基于用户的地理位置提供定制的信息。说实话：其实 Geolocation 就是用来**获取到当前设备的经纬度**（位置）

带有此接口的对象可以用由 `Navigator` 实现的属性 **NavigatorGeolocation.geolocation** 来获得



## 方法

### getCurrentPosition()

用来获取设备当前位置

```js
navigator.geolocation.getCurrentPosition(success, error, options)
```

- success：成功的回调
- error：错误的回调
- options：配置对象

```js
// success
postion => {
    // postion.coords `Coordinates` 对象
    		// latitude：维度
    		// longitude：经度
    // positon.timestamp 获取位置时的时间戳
}

// error
postionError => {
    // postionError.code 错误代码
    		// 1：PERMISSION_DENIED 地理位置信息的获取失败，因为该页面没有获取地理位置信息的权限。
    		// 2：POSITION_UNAVAILABLE 地理位置获取失败，因为至少有一个内部位置源返回一个内部错误。
    		// 3：TIMEOUT 获取地理位置超时，通过定义PositionOptions.timeout 来设置获取地理位置的超时时长。
    // postionError.message 错误信息
}

// options
{
    enableHighAcuracy: true, // 是否启动高精度模式
    timeout: 2000, // 超时时间, 触发 Error
    maximumAge: 2000 // 表示浏览器重新获取位置信息的时间间隔
}
```



### watchPosition()

用于注册监听器，在设备的地理位置发生改变的时候自动被调用。也可以选择特定的错误处理函数。

```js
const id = navigator.geolocation.watchPosition(success[, error[, options]])
```

配置与前者相同

### clearWatch()

移除监听器

```js
navigator.geolocation.clearWatch(id);
```

















