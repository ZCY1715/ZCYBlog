---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 现在火热的 vite 前端工具链, 我一直都是使用这个了, 整理一下它所有的用法

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-10-03 20:19:20
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

# Vite

## 配置 Vite

### 智能提示

`vite.config.js`

```js
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
})
```

### 情景配置

根据 command  的值判断生产或是开发模式返回不同的配置

```js
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      // dev 独有配置
    }
  } else {
    // command === 'build'
    return {
      // build 独有配置
    }
  }
})
```

需要注意的是，在 Vite 的 API 中，在开发环境下 command 的值为 serve（在 CLI 中， vite dev 和 vite serve 是 vite 的别名），而在生产环境下为 build（vite build）。

### 异步配置

defineConfig 支持异步回调函数

```js
export default defineConfig(async ({ command, mode }) => {
  const data = await asyncFunction()
  return {
    // vite 配置
  }
})
```



### 环境变量

环境变量通常可以从 `process.env` 获得

```js
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})
```



## 共享选项

### `root`

项目根目录（`index.html` 文件所在的位置），默认为 `process.cwd()`

### `base`

开发或生产环境服务的公共基础路径，默认 ‘/’，可以设置为：

- 绝对 URL 路径名，例如 `/foo/`
- 完整的 URL，例如 `https://foo.com/`
- 空字符串或 `./`（用于嵌入形式的开发）

### `mode`

`development | production` ，在配置中指明将会把 **serve 和 build** 时的模式 **都** 覆盖掉。也可以通过命令行 `--mode` 选项来重写

### `define`

定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换

只能用于 string 替换 string，却必须加上 JSON.stringify

```js
import { defineConfig } from 'vite'
export default defineConfig({
    define: {
        appName: JSON.stringify("my-app-name")
    }
})
```

### `plugins`

需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）

### `publicDir`

默认为 `public`，设置为 false 可以关闭该功能

作为静态资源服务的文件夹。该目录中的文件在开发期间在 `/` 处提供，并在构建期间复制到 `outDir` 的根目录，并且始终按原样提供或复制而无需进行转换。该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径

### `resolve.alias`

当使用文件系统路径的别名时，请始终使用绝对路径。相对路径的别名值会原封不动地被使用，因此无法被正常解析

将会被传递到 `@rollup/plugin-alias` 作为 entries 的选项。也可以是一个对象，或一个 `{ find, replacement, customResolver }` 的数组

```js
import { defineConfig } from 'vite'
import path from 'path'
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve( __dirname, "src")
        }
        alias: [
        	find: "@",
        	replacement: path.resolve( __dirname, "src")
        ]
    }
})
```

### `resolve.extensions`

默认为 `['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']`

导入时想要省略的扩展名列表，注意，**不**建议忽略自定义导入类型的扩展名（例如：`.vue`），因为它会影响 IDE 和类型支持

### `css.modules`

配置 CSS modules 的行为

```tsx
interface CSSModulesOptions {
  // 指定生成范围, 默认为 local
  // local: 不同的 css 文件之间隔离, 同一个文件中不隔离, 开启模块化
  // global: 全局, 没用呀, 相当于只是将 css 翻译成了 json
  scopeBehaviour?: 'global' | 'local'
  // 不参与 css 模块化的路径
  globalModulePaths?: RegExp[]
  // 生成独特的 classname
  generateScopedName?:
    | string // "[name]_[local]_[hash:5]"
    | ((name: string, filename: string, css: string) => string) // 自定义函数
  
  // classname 前缀
  hashPrefix?: string
  /**
   * 默认：null
   */
  localsConvention?:
    | 'camelCase' // 驼峰化, 原类名不会被移除
    | 'camelCaseOnly' // 驼峰化, 原类名会被移除
    | 'dashes' // 破折号驼峰化，原类名不会被移除
    | 'dashesOnly' // 破折号驼峰化，原类名会被移除
    | null
}
```

### `css.preprocessorOptions`

指定传递给 CSS 预处理器的选项。文件扩展名用作选项的键

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
          math: "always",
          globalVars: {   // 设置全局变量
              themeColor: "red"
          }
      },
      sass: {}
    }
  }
})
```

### `json.stringify`

默认为 false，若设置为 `true`，导入的 JSON 会被转换为 `export default JSON.parse("...")`，这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。

开启此项，则会禁用按名导入

### `assetsInclude`

将 import 引入的资源解析为 URL 形式

```js
export default defineConfig({
  assetsInclude: ['**/*.gltf']
})
```

### `envPrefix`

默认为 `VITE_`，以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中

### `appType`

默认为 `spa`，可选有 `spa | mpa | custom`

- spa：包含 SPA 回退中间件以及在预览中将 sirv 配置为 `single: true`
- mpa：仅包含非 SPA HTML 中间件
- custom：不包含 HTML 中间件



## 服务器选项

### `server.host`

默认 `localhost`，指定服务器应该监听哪个 IP 地址

### `server.port`

默认为 5137，监听的端口号

### `server.https`

开启 https

需要安装使用 `@vitejs/plugin-basic-ssl` 插件

```js
import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
  plugins: [
    basicSsl()
  ],
  server: {
      https: true
  }
}
```

### `server.open`

默认为 false，在开发服务器启动时自动在浏览器中打开应用程序

### `server.proxy`

为开发服务器配置自定义代理规则

```js
export default defineConfig({
  server: {
    proxy: {
      // key 以 ^ 开头为正则
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
```

`server.origin`

用于定义开发调试阶段生成资产的 origin



## 构建选项

### `build.outDir`

默认为 dist，指定输出路径（相对于项目根目录)

### `build.assetsDir`

指定生成静态资源的存放路径（相对于 build.outDir）

### `build.assetsInlineLimit`

默认为 4096 b (4KB) ，小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。

### `build.rollupOptions`

自定义底层的 Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup 选项合并.查看 [Rollup 选项文档](https://rollupjs.org/guide/en/#big-list-of-options) 获取更多细节

### `build.commonjsOptions`

传递给 [@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs) 插件的选项

### `build.dynamicImportVarsOptions`

动态导入，传递给 [@rollup/plugin-dynamic-import-vars](https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars) 的选项

























