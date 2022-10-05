import{d as n,o as s,c as a,a as e}from"./@vue.25a72e45.js";const o={class:"markdown-body"},c=e(`<h1>Geolocation</h1><p><strong>Geolocation</strong> \u63A5\u53E3\u662F\u4E00\u4E2A\u7528\u6765\u83B7\u53D6\u8BBE\u5907\u5730\u7406\u4F4D\u7F6E\u7684\u53EF\u7F16\u7A0B\u7684\u5BF9\u8C61\uFF0C\u5B83\u53EF\u4EE5\u8BA9 Web \u5185\u5BB9\u8BBF\u95EE\u5230\u8BBE\u5907\u7684\u5730\u7406\u4F4D\u7F6E\uFF0C\u8FD9\u5C06\u5141\u8BB8 Web \u5E94\u7528\u57FA\u4E8E\u7528\u6237\u7684\u5730\u7406\u4F4D\u7F6E\u63D0\u4F9B\u5B9A\u5236\u7684\u4FE1\u606F\u3002\u8BF4\u5B9E\u8BDD\uFF1A\u5176\u5B9E Geolocation \u5C31\u662F\u7528\u6765<strong>\u83B7\u53D6\u5230\u5F53\u524D\u8BBE\u5907\u7684\u7ECF\u7EAC\u5EA6</strong>\uFF08\u4F4D\u7F6E\uFF09</p><p>\u5E26\u6709\u6B64\u63A5\u53E3\u7684\u5BF9\u8C61\u53EF\u4EE5\u7528\u7531 <code>Navigator</code> \u5B9E\u73B0\u7684\u5C5E\u6027 <strong>NavigatorGeolocation.geolocation</strong> \u6765\u83B7\u5F97</p><h2>\u65B9\u6CD5</h2><h3>getCurrentPosition()</h3><p>\u7528\u6765\u83B7\u53D6\u8BBE\u5907\u5F53\u524D\u4F4D\u7F6E</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1">navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> error<span class="token punctuation">,</span> options<span class="token punctuation">)</span></code></pre></div></div><ul><li>success\uFF1A\u6210\u529F\u7684\u56DE\u8C03</li><li>error\uFF1A\u9519\u8BEF\u7684\u56DE\u8C03</li><li>options\uFF1A\u914D\u7F6E\u5BF9\u8C61</li></ul><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token comment">// success</span></code>
<code class="code-line even line-2"><span class="token parameter">postion</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-3">    <span class="token comment">// postion.coords \`Coordinates\` \u5BF9\u8C61</span></code>
<code class="code-line even line-4">    		<span class="token comment">// latitude\uFF1A\u7EF4\u5EA6</span></code>
<code class="code-line odd line-5">    		<span class="token comment">// longitude\uFF1A\u7ECF\u5EA6</span></code>
<code class="code-line even line-6">    <span class="token comment">// positon.timestamp \u83B7\u53D6\u4F4D\u7F6E\u65F6\u7684\u65F6\u95F4\u6233</span></code>
<code class="code-line odd line-7"><span class="token punctuation">}</span></code>
<code class="code-line even line-8"></code>
<code class="code-line odd line-9"><span class="token comment">// error</span></code>
<code class="code-line even line-10"><span class="token parameter">postionError</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-11">    <span class="token comment">// postionError.code \u9519\u8BEF\u4EE3\u7801</span></code>
<code class="code-line even line-12">    		<span class="token comment">// 1\uFF1APERMISSION_DENIED \u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u7684\u83B7\u53D6\u5931\u8D25\uFF0C\u56E0\u4E3A\u8BE5\u9875\u9762\u6CA1\u6709\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u7684\u6743\u9650\u3002</span></code>
<code class="code-line odd line-13">    		<span class="token comment">// 2\uFF1APOSITION_UNAVAILABLE \u5730\u7406\u4F4D\u7F6E\u83B7\u53D6\u5931\u8D25\uFF0C\u56E0\u4E3A\u81F3\u5C11\u6709\u4E00\u4E2A\u5185\u90E8\u4F4D\u7F6E\u6E90\u8FD4\u56DE\u4E00\u4E2A\u5185\u90E8\u9519\u8BEF\u3002</span></code>
<code class="code-line even line-14">    		<span class="token comment">// 3\uFF1ATIMEOUT \u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u8D85\u65F6\uFF0C\u901A\u8FC7\u5B9A\u4E49PositionOptions.timeout \u6765\u8BBE\u7F6E\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u7684\u8D85\u65F6\u65F6\u957F\u3002</span></code>
<code class="code-line odd line-15">    <span class="token comment">// postionError.message \u9519\u8BEF\u4FE1\u606F</span></code>
<code class="code-line even line-16"><span class="token punctuation">}</span></code>
<code class="code-line odd line-17"></code>
<code class="code-line even line-18"><span class="token comment">// options</span></code>
<code class="code-line odd line-19"><span class="token punctuation">{</span></code>
<code class="code-line even line-20">    <span class="token literal-property property">enableHighAcuracy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u542F\u52A8\u9AD8\u7CBE\u5EA6\u6A21\u5F0F</span></code>
<code class="code-line odd line-21">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token comment">// \u8D85\u65F6\u65F6\u95F4, \u89E6\u53D1 Error</span></code>
<code class="code-line even line-22">    <span class="token literal-property property">maximumAge</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token comment">// \u8868\u793A\u6D4F\u89C8\u5668\u91CD\u65B0\u83B7\u53D6\u4F4D\u7F6E\u4FE1\u606F\u7684\u65F6\u95F4\u95F4\u9694</span></code>
<code class="code-line odd last-row line-23"><span class="token punctuation">}</span></code></pre></div></div><h3>watchPosition()</h3><p>\u7528\u4E8E\u6CE8\u518C\u76D1\u542C\u5668\uFF0C\u5728\u8BBE\u5907\u7684\u5730\u7406\u4F4D\u7F6E\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u81EA\u52A8\u88AB\u8C03\u7528\u3002\u4E5F\u53EF\u4EE5\u9009\u62E9\u7279\u5B9A\u7684\u9519\u8BEF\u5904\u7406\u51FD\u6570\u3002</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token keyword">const</span> id <span class="token operator">=</span> navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">watchPosition</span><span class="token punctuation">(</span>success<span class="token punctuation">[</span><span class="token punctuation">,</span> error<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre></div></div><p>\u914D\u7F6E\u4E0E\u524D\u8005\u76F8\u540C</p><h3>clearWatch()</h3><p>\u79FB\u9664\u76D1\u542C\u5668</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1">navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">clearWatch</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div></div>`,16),t=[c],F={title:null,tags:["Geolocation"],categories:null,description:"\u5728 js \u4E2D\u83B7\u53D6\u7528\u6237\u4F4D\u7F6E\u4FE1\u606F\u5B8C\u6210\u76F8\u5173\u5B9A\u5236\u529F\u80FD\uFF0C\u76D1\u542C\u7528\u6237\u4F4D\u7F6E\u53D8\u5316",publishTime:"2022-09-11T15:55:25.000Z",updateTime:null,img:null,toc:!0,comment:!0,publish:!0},r="",E=n({__name:"index",setup(l,{expose:u}){return u({frontmatter:{title:null,tags:["Geolocation"],categories:null,description:"\u5728 js \u4E2D\u83B7\u53D6\u7528\u6237\u4F4D\u7F6E\u4FE1\u606F\u5B8C\u6210\u76F8\u5173\u5B9A\u5236\u529F\u80FD\uFF0C\u76D1\u542C\u7528\u6237\u4F4D\u7F6E\u53D8\u5316",publishTime:"2022-09-11T15:55:25.000Z",updateTime:null,img:null,toc:!0,comment:!0,publish:!0},excerpt:void 0}),(p,i)=>(s(),a("div",o,t))}});export{E as default,r as excerpt,F as frontmatter};
