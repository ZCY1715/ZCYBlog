import{d as s,o as e,c as a,a as o}from"./@vue.25a72e45.js";const c={class:"markdown-body"},u=o(`<h1>IntersectionObserver</h1><p>Intersection Observer API \u63D0\u4F9B\u4E86\u4E00\u79CD<strong>\u5F02\u6B65\u68C0\u6D4B\u76EE\u6807\u5143\u7D20\u4E0E\u7956\u5148\u5143\u7D20\u6216 viewport \u76F8\u4EA4\u60C5\u51B5\u53D8\u5316</strong>\u7684\u65B9\u6CD5\uFF0C\u5F53\u5143\u7D20\u7684\u53EF\u89C6\u8303\u56F4\u53D8\u5316\u65F6\u6267\u884C\u76F8\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u505A\u51FA\u5BF9\u5E94\u6539\u53D8</p><h2>ObserverOption \u914D\u7F6E</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">tsx</span></div><div class="code-block language-tsx no-line-numbers" data-lang="tsx" data-modifiers=""><pre class="language-tsx" data-lang="tsx"><code class="code-line odd first-row line-1"><span class="token keyword">interface</span> <span class="token class-name">IntersectionObserverInit</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-2">    <span class="token comment">// \u6ED1\u52A8\u5BF9\u8C61 \u9ED8\u8BA4\u662F\u6D4F\u89C8\u5668\u53EF\u89C6\u7A97\u53E3</span></code>
<code class="code-line odd line-3">    root<span class="token operator">?</span><span class="token operator">:</span> Element <span class="token operator">|</span> Document <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></code>
<code class="code-line even line-4">    <span class="token comment">// \u7528\u4E8E\u4F7F root \u5BF9\u8C61\u4E0E\u76EE\u6807\u5BF9\u8C61\u4E4B\u95F4\u6709\u4E00\u5B9A\u7684\u95F4\u8DDD\uFF0C\u53EF\u4EE5\u63A7\u5236 root \u5143\u7D20\u6BCF\u4E00\u8FB9\u7684\u6536\u7F29\u6216\u8005\u6269\u5F20</span></code>
<code class="code-line odd line-5">    rootMargin<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></code>
<code class="code-line even line-6">    <span class="token comment">// \u5F53\u76EE\u6807\u5BF9\u8C61\u4E0E root \u5BF9\u8C61\u76F8\u4EA4\u8FBE\u5230\u4E00\u5B9A\u7684\u6BD4\u4F8B\u65F6\uFF0C\u6267\u884C\u56DE\u8C03\u51FD\u6570</span></code>
<code class="code-line odd line-7">    threshold<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></code>
<code class="code-line even last-row line-8"><span class="token punctuation">}</span></code></pre></div></div><h2>IntersectionObserverEntry \u5BF9\u8C61</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">tsx</span></div><div class="code-block language-tsx no-line-numbers" data-lang="tsx" data-modifiers=""><pre class="language-tsx" data-lang="tsx"><code class="code-line odd first-row line-1"><span class="token keyword">interface</span> <span class="token class-name">IntersectionObserverEntryInit</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-2">    <span class="token comment">// target.getBoundingClientRect() \u5BF9\u8C61</span></code>
<code class="code-line odd line-3">    boundingClientRect<span class="token operator">:</span> DOMRectInit<span class="token punctuation">;</span></code>
<code class="code-line even line-4">    <span class="token comment">// root \u5143\u7D20\u4E0E target \u5143\u7D20\u7684\u4EA4\u53C9\u6BD4\u4F8B</span></code>
<code class="code-line odd line-5">    intersectionRatio<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line even line-6">    <span class="token comment">// root \u4E0E target \u5BF9\u8C61\u4EA4\u53C9\u90E8\u5206\u7684 getBoundingClientRect() \u5BF9\u8C61</span></code>
<code class="code-line odd line-7">    intersectionRect<span class="token operator">:</span> DOMRectInit<span class="token punctuation">;</span></code>
<code class="code-line even line-8">    <span class="token comment">// root \u4E0E target \u662F\u5426\u76F8\u4EA4\uFF0C \u7528\u4E8E\u5224\u65AD\u72B6\u6001\u8F6C\u53D8</span></code>
<code class="code-line odd line-9">    isIntersecting<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></code>
<code class="code-line even line-10">    <span class="token comment">// root.getBoundingClientRect() \u5BF9\u8C61</span></code>
<code class="code-line odd line-11">    rootBounds<span class="token operator">:</span> DOMRectInit <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></code>
<code class="code-line even line-12">    <span class="token comment">// \u76EE\u6807\u5143\u7D20</span></code>
<code class="code-line odd line-13">    target<span class="token operator">:</span> Element<span class="token punctuation">;</span></code>
<code class="code-line even line-14">    <span class="token comment">// \u4ECE\u89E6\u53D1\u65F6\u523B\u5230\u65F6\u95F4\u539F\u70B9(time Origin)\u7684\u65F6\u95F4\u6233</span></code>
<code class="code-line odd line-15">    time<span class="token operator">:</span> DOMHighResTimeStamp<span class="token punctuation">;</span></code>
<code class="code-line even last-row line-16"><span class="token punctuation">}</span></code></pre></div></div><p>\u5176\u4E2D <code>getBoundingClientRect()</code>\u5BF9\u8C61 \u7C7B\u578B\u5982\u4E0B\uFF1A</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">tsx</span></div><div class="code-block language-tsx no-line-numbers" data-lang="tsx" data-modifiers=""><pre class="language-tsx" data-lang="tsx"><code class="code-line odd first-row line-1"><span class="token keyword">interface</span> <span class="token class-name">DOMRectReadOnly</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-2">    <span class="token keyword">readonly</span> bottom<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-3">    <span class="token keyword">readonly</span> height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line even line-4">    <span class="token keyword">readonly</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-5">    <span class="token keyword">readonly</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line even line-6">    <span class="token keyword">readonly</span> top<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-7">    <span class="token keyword">readonly</span> width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line even line-8">    <span class="token keyword">readonly</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-9">    <span class="token keyword">readonly</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></code>
<code class="code-line even line-10">    <span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></code>
<code class="code-line odd last-row line-11"><span class="token punctuation">}</span></code></pre></div></div><p><strong>\u65F6\u95F4\u539F\u70B9</strong>\u662F\u6307<strong>\u521B\u5EFA\u6D4F\u89C8\u5668\u4E0A\u4E0B\u6587\u7684\u65F6\u95F4</strong></p><h2>\u7528\u6CD5</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token comment">// \u76EE\u6807\u5143\u7D20</span></code>
<code class="code-line even line-2"><span class="token keyword">const</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#target&quot;</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-3"></code>
<code class="code-line even line-4"><span class="token comment">// \u914D\u7F6E\u5BF9\u8C61</span></code>
<code class="code-line odd line-5"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-6">  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span></code>
<code class="code-line odd line-7"><span class="token punctuation">}</span></code>
<code class="code-line even line-8"></code>
<code class="code-line odd line-9"><span class="token comment">// \u56DE\u8C03\u51FD\u6570</span></code>
<code class="code-line even line-10"><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entries <span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-11">  <span class="token comment">// entries \u662F IntersectionObserverEntry \u6570\u7EC4</span></code>
<code class="code-line even line-12">  <span class="token comment">// observer \u662F\u76D1\u542C\u5668\u5BF9\u8C61</span></code>
<code class="code-line odd line-13">  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-14">    <span class="token comment">// todo</span></code>
<code class="code-line odd line-15"></code>
<code class="code-line even line-16">  <span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-17"><span class="token punctuation">}</span></code>
<code class="code-line even line-18"></code>
<code class="code-line odd line-19"><span class="token comment">// \u4F7F\u7528\u76F8\u5E94\u7684\u56DE\u8C03\u548C\u914D\u7F6E\u5B9E\u4F8B\u5316\u76D1\u542C\u5668</span></code>
<code class="code-line even line-20"><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span></code>
<code class="code-line odd line-21"></code>
<code class="code-line even line-22"><span class="token comment">// \u5F00\u59CB\u76D1\u542C\u76EE\u6807\u5143\u7D20\uFF1A\u662F\u5426\u51FA\u73B0\u5728\u53EF\u89C6\u7A97\u53E3\u8303\u56F4\u5185</span></code>
<code class="code-line odd line-23">observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span></code>
<code class="code-line even line-24"></code>
<code class="code-line odd line-25"><span class="token comment">// \u53D6\u6D88\u76D1\u542C</span></code>
<code class="code-line even last-row line-26">observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div></div>`,11),t=[u],r={title:null,tags:["IntersectionObserver"],categories:null,description:"\u5F53\u5728\u505A\u6807\u9898\u5BFC\u822A\u65F6\u7ECF\u5E38\u4F1A\u7528\u5230\uFF0C\u5224\u65AD\u4E00\u7CFB\u5217\u5143\u7D20\u662F\u5426\u624B\u52A8\u6ED1\u5230\u53EF\u89C6\u8303\u56F4\u5185\uFF0C\u8FDB\u800C\u5C06\u5BFC\u822A\u680F\u8C03\u6574\u5230\u5BF9\u5E94\u7684\u9009\u9879",publishTime:"2022-08-18T14:19:18.000Z",updateTime:"2022-08-26T01:30:50.000Z",img:null,toc:!0,comment:!0},k="",F=s({__name:"index",setup(l,{expose:n}){return n({frontmatter:{title:null,tags:["IntersectionObserver"],categories:null,description:"\u5F53\u5728\u505A\u6807\u9898\u5BFC\u822A\u65F6\u7ECF\u5E38\u4F1A\u7528\u5230\uFF0C\u5224\u65AD\u4E00\u7CFB\u5217\u5143\u7D20\u662F\u5426\u624B\u52A8\u6ED1\u5230\u53EF\u89C6\u8303\u56F4\u5185\uFF0C\u8FDB\u800C\u5C06\u5BFC\u822A\u680F\u8C03\u6574\u5230\u5BF9\u5E94\u7684\u9009\u9879",publishTime:"2022-08-18T14:19:18.000Z",updateTime:"2022-08-26T01:30:50.000Z",img:null,toc:!0,comment:!0},excerpt:void 0}),(p,d)=>(e(),a("div",c,t))}});export{F as default,k as excerpt,r as frontmatter};