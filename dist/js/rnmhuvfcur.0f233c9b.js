import{d as s,u as a,o as t,c,v as n,b as u,a as E}from"./@vue.25a72e45.js";const F={class:"markdown-body"},i=u("h1",null,"Notification",-1),l=u("p",null,[u("strong",null,"Notifications API \u7684\u901A\u77E5\u63A5\u53E3\u7528\u4E8E\u5411\u7528\u6237\u914D\u7F6E\u548C\u663E\u793A\u684C\u9762\u901A\u77E5")],-1),d=E(`<p><strong>\u8C28\u614E\u4F7F\u7528\uFF0C\u517C\u5BB9\u6027\u582A\u5FE7</strong></p><h2>\u6784\u9020\u51FD\u6570</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token keyword">const</span> notification <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Notification</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> options<span class="token punctuation">)</span></code></pre></div></div><p><strong>title</strong>\uFF1A\u4E00\u5B9A\u4F1A\u88AB\u663E\u793A\u7684\u901A\u77E5\u6807\u9898</p><p><strong>options</strong>\uFF1A\u4E00\u4E2A\u88AB\u5141\u8BB8\u7528\u6765\u8BBE\u7F6E\u901A\u77E5\u7684\u5BF9\u8C61</p><ul><li><code>dir</code> : \u6587\u5B57\u7684\u65B9\u5411\uFF1B\u5B83\u7684\u503C\u53EF\u4EE5\u662F <code>auto\uFF08\u81EA\u52A8\uFF09</code>, <code>ltr\uFF08\u4ECE\u5DE6\u5230\u53F3\uFF09</code>, or <code>rtl</code>\uFF08\u4ECE\u53F3\u5230\u5DE6\uFF09</li><li><code>body</code>: \u901A\u77E5\u4E2D\u989D\u5916\u663E\u793A\u7684\u5B57\u7B26\u4E32</li><li><code>tag</code>: \u8D4B\u4E88\u901A\u77E5\u4E00\u4E2A ID</li><li><code>icon</code>: \u4E00\u4E2A\u56FE\u7247\u7684 URL\uFF0C\u5C06\u88AB\u7528\u4E8E\u663E\u793A\u901A\u77E5\u7684\u56FE\u6807</li><li><code>renotify</code>\uFF1A\u76F8\u540C tag \u7684\u901A\u77E5\u51FA\u73B0\u65F6\uFF0C\u662F\u5426\u66FF\u6362\u4E4B\u524D\u7684\uFF0C\u9ED8\u8BA4 true</li><li><code>requireInteraction</code>\uFF1A\u901A\u77E5\u4E0D\u81EA\u52A8\u5173\u95ED\uFF0C\u9ED8\u8BA4\u4E3A true</li></ul><h2>\u5C5E\u6027</h2><h3>\u9759\u6001\u5C5E\u6027</h3><p>\u8FD9\u4E9B\u5C5E\u6027\u4EC5\u5728 Notification \u5BF9\u8C61\u4E0A\u6709\u6548</p><p><code>permission</code>\uFF1A\u4E00\u4E2A\u7528\u4E8E\u8868\u660E\u5F53\u524D\u901A\u77E5\u663E\u793A\u6388\u6743\u72B6\u6001\u7684\u5B57\u7B26\u4E32</p><ul><li><code>denied</code>\uFF1A\u7528\u6237\u62D2\u7EDD\u4E86\u901A\u77E5\u7684\u663E\u793A</li><li><code>granted</code>\uFF1A\u7528\u6237\u5141\u8BB8\u4E86\u901A\u77E5\u7684\u663E\u793A</li><li><code>default</code>\uFF1A\u56E0\u4E3A\u4E0D\u77E5\u9053\u7528\u6237\u7684\u9009\u62E9\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u7684\u884C\u4E3A\u4E0E denied \u65F6\u76F8\u540C</li></ul><h3>\u5B9E\u4F8B\u5C5E\u6027</h3><p>\u8FD9\u4E9B\u5C5E\u6027\u4EC5\u5728 Notification \u7684\u5B9E\u4F8B\u4E2D\u6709\u6548</p><p>dir | body | tag | icon</p><p><strong>\u53EF\u4EE5\u624B\u52A8\u52A8\u6001\u66FF\u6362\u539F\u6765\u7684\u5B57\u6BB5\uFF01</strong></p><h2>\u4E8B\u4EF6\u5904\u7406</h2><p><code>onclick</code>\uFF1A\u6BCF\u5F53\u7528\u6237\u70B9\u51FB\u901A\u77E5\u65F6\u88AB\u89E6\u53D1</p><p><code>onshow</code>\uFF1A\u5F53\u901A\u77E5\u663E\u793A\u7684\u65F6\u5019\u88AB\u89E6\u53D1</p><p><code>onerror</code>\uFF1A\u6BCF\u5F53\u901A\u77E5\u9047\u5230\u9519\u8BEF\u65F6\u88AB\u89E6\u53D1</p><p><code>onclose</code>\uFF1A\u5F53\u7528\u6237\u5173\u95ED\u901A\u77E5\u65F6\u88AB\u89E6\u53D1</p><h2>\u65B9\u6CD5</h2><h3>\u9759\u6001\u65B9\u6CD5</h3><p><code>requestPermission()</code>\uFF1A\u7528\u4E8E\u5F53\u524D\u9875\u9762\u5411\u7528\u6237\u7533\u8BF7\u663E\u793A\u901A\u77E5\u7684\u6743\u9650\u3002\u8FD9\u4E2A\u65B9\u6CD5\u53EA\u80FD\u88AB\u7528\u6237\u884C\u4E3A\u8C03\u7528\uFF08\u6BD4\u5982\uFF1Aonclick \u4E8B\u4EF6\uFF09\uFF0C\u5E76\u4E14\u4E0D\u80FD\u88AB\u5176\u4ED6\u7684\u65B9\u5F0F\u8C03\u7528</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1">Notification<span class="token punctuation">.</span><span class="token function">requestPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">permision</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-2">    <span class="token comment">// permission = &quot;denied&quot; | &quot;granted&quot;</span></code>
<code class="code-line odd last-row line-3"><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div></div><h3>\u5B9E\u4F8B\u65B9\u6CD5</h3><p><code>close()</code>\uFF1A\u5173\u95ED\u901A\u77E5</p><p><code>addEventListener()</code> | <code>removeEventListener()</code>\uFF1A\u53EA\u6709\u4E0A\u8FF0\u4E8B\u4EF6\u652F\u6301</p>`,27),D={title:null,tags:null,categories:null,description:"\u5F53\u83B7\u53D6\u5230\u7528\u6237\u6743\u9650\u540E\uFF0C\u7F51\u7AD9\u4E2D\u4E8B\u4EF6\u53D1\u751F\u65F6\u4E3B\u52A8\u5728\u684C\u9762\u663E\u793A\u7F51\u7AD9\u7684\u901A\u77E5!",publishTime:"2022-09-12T14:33:13.000Z",updateTime:null,img:null,toc:!0,comment:!0,publish:!0},C="",g=s({__name:"index",setup(p,{expose:o}){return o({frontmatter:{title:null,tags:null,categories:null,description:"\u5F53\u83B7\u53D6\u5230\u7528\u6237\u6743\u9650\u540E\uFF0C\u7F51\u7AD9\u4E2D\u4E8B\u4EF6\u53D1\u751F\u65F6\u4E3B\u52A8\u5728\u684C\u9762\u663E\u793A\u7F51\u7AD9\u7684\u901A\u77E5!",publishTime:"2022-09-12T14:33:13.000Z",updateTime:null,img:null,toc:!0,comment:!0,publish:!0},excerpt:void 0}),(r,A)=>{const e=a("alert-bar");return t(),c("div",F,[i,l,n(e,{message:"\u5907\u6CE8\uFF1A\u6B64\u7279\u6027\u5728 Web Worker \u4E2D\u53EF\u7528"}),n(e,{message:"\u5B89\u5168\u4E0A\u4E0B\u6587: \u6B64\u9879\u529F\u80FD\u4EC5\u5728\u4E00\u4E9B\u652F\u6301\u7684\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\uFF08HTTPS\uFF09\u4E2D\u53EF\u7528"}),d])}}});export{g as default,C as excerpt,D as frontmatter};
