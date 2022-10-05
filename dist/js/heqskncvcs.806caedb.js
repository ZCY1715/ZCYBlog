import{d as e,o as F,c as o,a as c}from"./@vue.25a72e45.js";const s={class:"markdown-body"},d=c('<h1>Process</h1><p>Process \u6A21\u5757\u662F\u4E00\u4E2A\u65E0\u987B\u4F7F\u7528require()\u5C31\u53EF\u4EE5\u4ECEnode.js\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u8BBF\u95EE\u7684\u5168\u5C40\u5BF9\u8C61\u3001</p><h2>I/O \u63A7\u5236</h2><p>Process \u4E3A\u8FDB\u7A0B stdin\u3001stdout\u3001stderr \u63D0\u4F9B\u4E86\u5BF9\u6807\u51C6I/O\u7BA1\u9053\u7684\u8BBF\u95EE</p><p><code>stdin</code>\uFF1A\u63A7\u5236\u53F0\u8F93\u5165\u6D41</p><p><code>stdout</code>\uFF1A\u63A7\u5236\u53F0\u8F93\u51FA\u6D41</p><p><code>stderr</code>\uFF1A\u63A7\u5236\u53F0\u5F02\u5E38\u8F93\u51FA\u6D41</p><h2>\u4FE1\u53F7\u76D1\u542C</h2><p>Node.js \u5141\u8BB8\u6CE8\u518C\u76D1\u542C\u5668\u6765\u5904\u7406\u64CD\u4F5C\u7CFB\u7EDF\u53D1\u9001\u7ED9\u4E00\u4E2A\u8FDB\u7A0B\u7684\u4FE1\u53F7</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1">process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> listener<span class="token punctuation">)</span></code></pre></div></div><p>event \u5305\u62EC\u5F88\u591A\u53EF\u4EE5\u89E6\u53D1\u7684\u4FE1\u53F7</p><h2>\u8FDB\u7A0B\u63A7\u5236</h2><p><code>abort()</code>\uFF1A\u4F7F\u5F53\u524D\u7684 Node.js \u5E94\u7528\u7A0B\u5E8F\u53D1\u51FA abort \u4E8B\u4EF6\uFF0C\u9000\u51FA\uFF0C\u5E76\u4EA7\u751F\u4E00\u4E2A\u5185\u5B58\u6838\u5FC3\u8F6C\u50A8\u6587\u4EF6</p><p><code>exit([code])</code>\uFF1A\u4F7F\u5F53\u524D Node.js \u5E94\u7528\u9000\u51FA\uFF0C\u5E76\u8FD4\u56DE\u6307\u5B9A\u7684 code</p><p><code>kill(pid,[signall])</code>\uFF1A\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u5411\u6307\u5B9A\u7684 pid \u7684\u8FDB\u7A0B\u53D1\u9001\u4E00\u4E2A kill \u4FE1\u53F7\uFF0C\u9ED8\u8BA4\u662FSIGTERM</p><p><code>nexttick(callback)</code>\uFF1A\u5C06\u56DE\u8C03\u51FD\u6570\u653E\u5230 nexttick \u8C03\u5EA6\u961F\u5217\u4E2D</p><h2>\u5C5E\u6027\u65B9\u6CD5</h2><p><code>cwd()</code>\uFF1A\u8FD4\u56DE\u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55</p><p><code>env</code>\uFF1A\u8FD4\u56DE\u8FDB\u7A0B\u73AF\u5883\u4E2D\u6307\u5B9A\u7684\u952E/\u503C\u5BF9</p><p><code>argv</code>\uFF1A\u542F\u52A8 Node.js \u5E94\u7528\u7A0B\u5E8F\u7684\u6240\u6709\u547D\u4EE4\u53C2\u6570\uFF0C\u547D\u4EE4\u548C\u6587\u4EF6\u90FD\u4F1A\u8F6C\u6210\u7EDD\u5BF9\u5730\u5740\uFF0C[node, path, \u2026args]</p><p><code>argv0</code>\uFF1A\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u503C\uFF0Cnode</p><p><code>execPath</code>\uFF1Anode.js \u7684\u7EDD\u5BF9\u5730\u5740</p><p><code>execArgv</code>\uFF1A\u8C03\u7528 node.js \u4F20\u5165\u7684\u7279\u6B8A\u53C2\u6570 <code>node --inspect demo.js</code></p><p><code>version</code>\uFF1Anode.js \u7684\u7248\u672C\u53F7</p><p><code>versions</code>\uFF1A\u5305\u542B Node.js \u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u6A21\u5757\u548C\u7248\u672C</p><p><code>config</code>\uFF1A\u7528\u4E8E\u7F16\u8BD1\u5F53\u524D\u8282\u70B9\u53EF\u6267\u884C\u7A0B\u5E8F\u7684\u914D\u7F6E\u9009\u9879</p><p><code>pid</code>\uFF1A\u5F53\u524D\u8FDB\u7A0B\u53F7</p><p><code>title</code>\uFF1A\u5F53\u524D\u8FDB\u7A0B\u6807\u9898</p><p><code>platform</code>\uFF1A\u64CD\u4F5C\u7CFB\u7EDF</p><p><code>arch</code>\uFF1A\u8FDB\u7A0B\u6B63\u5728\u8FD0\u884C\u7684\u5904\u7406\u5668\u4F53\u7CFB\u7ED3\u6784</p><p><code>memoryUsage()</code>\uFF1Anode.js \u8FDB\u7A0B\u7684\u5F53\u524D\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\u53EF\u4F7F\u7528 <code>util.inspect()</code> \u8BFB\u53D6</p>',31),E=[d],i={title:null,tags:null,categories:null,description:"Process \u6A21\u5757\u662F\u4E00\u4E2A\u65E0\u987B\u4F7F\u7528 require() \u5C31\u53EF\u4EE5\u4ECE node.js \u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u8BBF\u95EE\u7684\u5168\u5C40\u5BF9\u8C61",publishTime:"2022-10-03T15:21:44.000Z",updateTime:null,img:null,toc:!0,comment:!0,publish:!0},A="",B=e({__name:"index",setup(n,{expose:u}){return u({frontmatter:{title:null,tags:null,categories:null,description:"Process \u6A21\u5757\u662F\u4E00\u4E2A\u65E0\u987B\u4F7F\u7528 require() \u5C31\u53EF\u4EE5\u4ECE node.js \u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u8BBF\u95EE\u7684\u5168\u5C40\u5BF9\u8C61",publishTime:"2022-10-03T15:21:44.000Z",updateTime:null,img:null,toc:!0,comment:!0,publish:!0},excerpt:void 0}),(t,p)=>(F(),o("div",s,E))}});export{B as default,A as excerpt,i as frontmatter};