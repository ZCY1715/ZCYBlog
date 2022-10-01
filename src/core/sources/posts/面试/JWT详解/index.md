---

# 默认为文件名称
title: 

tags:
  - token
  - jwt

# 类别中已包含文件夹名称
categories:

description: token认证机制中使用的 jwt 是怎样生成的，认证流程是什么样呢？

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-11 13:15:20
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

## 身份验证流程

1. 客户端使用用户名和密码请求登录
2. 服务端收到请求，验证用户名和密码
3. 验证成功后，服务端会签发一个 token，再把这个 token 返回给客户端
4. 客户端收到 token 后可以把它存储起来，比如放到 cookie，localStorage 中
5. 客户端每次向服务端请求资源时需要携带服务端签发的 token，可以在 cookie 或者 header 中携带
6. 服务端收到请求，然后去验证客户端请求里面带着的 token，如果验证成功，就向客户端返回请求数据



这种基于 token 的认证方式相比传统的 session 认证方式更节约服务器资源，并且对移动端和分布式更加友好。其优点如下：

- 支持跨域访问：cookie 是无法跨域的，而 token 由于没有用到 cookie (前提是将 token 放到请求头中)，所以跨域后不会存在信息丢失问题
- 无状态：token 机制在服务端不需要存储 session 信息，因为 token 自身包含了所有登录用户的信息，所以可以减轻服务端压力
- 更适用 CDN：可以通过内容分发网络请求服务端的所有资料
- 更适用于移动端：当客户端是非浏览器平台时，cookie 是不被支持的，此时采用 token 认证方式会简单很多
- 无需考虑 CSRF：由于不再依赖 cookie，所以采用 token 认证方式不会发生 CSRF，所以也就无需考虑 CSRF 的防御



而`JWT`就是上述流程当中`token`的一种具体实现方式，其全称是`JSON Web Token`

**JWT的本质就是一个字符串**，它是将用户信息保存到一个Json字符串中，然后进行编码后得到一个`JWT token`，**并且这个`JWT token`带有签名信息，接收后可以校验是否被篡改**，所以可以用于在各方之间安全地将信息作为Json对象传输。

JWT 的认证流程如下：

1. 首先，前端通过Web表单将自己的用户名和密码发送到后端的接口，这个过程一般是一个`POST`请求。建议的方式是通过 SSL 加密的传输(HTTPS)，从而避免敏感信息被嗅探
2. 后端核对用户名和密码成功后，**将包含用户信息的数据作为JWT的Payload，将其与JWT Header分别进行Base64编码拼接后签名**，形成一个 JWT Token ，形成的 JWT Token 就是一个如同`lll.zzz.xxx`的字符串
3. 后端将 JWT Token 字符串作为登录成功的结果返回给前端。前端可以将返回的结果保存在浏览器中，退出登录时删除保存的 JWT Token 即可
4. **前端在每次请求时将 JWT Token 放入HTTP请求头中的`Authorization`属性中**(解决XSS和XSRF问题)
5. 后端检查前端传过来的 JWT Token，验证其有效性，比如检查签名是否正确、是否过期、token 的接收方是否是自己等等
6. 验证通过后，后端解析出 JWT Token 中包含的用户信息，进行其他逻辑操作(一般是根据用户信息得到权限等)，返回结果



## JWT结构

JWT由3部分组成：**标头(Header)、有效载荷(Payload)和签名(Signature)**。在传输的时候，会将JWT的3部分分别进行Base64编码后用`.`进行连接形成最终传输的字符串

### Header

**JWT头**是一个描述JWT元数据的JSON对象，**alg属性表示签名使用的算法**，默认为HMAC SHA256（写为HS256）；**typ属性表示令牌的类型，JWT令牌统一写为JWT**。最后，使用Base64 URL算法将上述JSON对象转换为字符串保存

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload

**有效载荷**部分，是JWT的主体内容部分，也是一个**JSON对象**，包含需要传递的数据。**一般会把包含用户信息的数据放到payload中**

```json
{
  "sub": "1234567890",
  "name": "Helen",
  "admin": true
}
```

> **默认情况下JWT是未加密的，因为只是采用base64算法，拿到JWT字符串后可以转换回原本的JSON数据，任何人都可以解读其内容，因此不要构建隐私信息字段，比如用户的密码一定不能保存到JWT中**，以防止信息泄露。**JWT只是适合在网络中传输一些非敏感的信息**

### Signature

签名哈希部分是对上面两部分数据签名，需要使用base64编码后的 header 和 payload 数据，通过指定的算法生成哈希，以确保数据不会被篡改。首先，需要指定一个**密钥（secret）**。该密码仅仅为保存在服务器中，并且不能向用户公开。然后，使用 header 中指定的签名算法（默认情况下为HMAC SHA256）根据以下公式生成签名

```js
HMACSHA256(base64UrlEncode(header)+"."+base64UrlEncode(payload),secret)
```

在计算出签名哈希后，JWT头，有效载荷和签名哈希的三个部分组合成一个字符串，每个部分用`.`分隔，就构成整个JWT对象























