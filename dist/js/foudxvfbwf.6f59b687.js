import{d as s,o as a,c as u,a as o}from"./@vue.25a72e45.js";const e={class:"markdown-body"},t=o(`<h3>bug \u63CF\u8FF0</h3><p>\u5728 onMounted \u4E2D\u4F7F\u7528ref\u83B7\u53D6\u7684dom\u6267\u884Cdom\u539F\u751F\u65B9\u6CD5(scrollTo)\u65E0\u6548</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token keyword">const</span> main <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></code>
<code class="code-line even line-2"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-3">  main<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line even line-4"><span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-5"></code>
<code class="code-line even last-row line-6"><span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;main&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code></pre></div></div><p>\u9AD8\u5EA6\u662F\u6CA1\u6709\u95EE\u9898\u7684\u3002\u800C\u4E14\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u6570\u636E\u66F4\u65B0\u540E\u518D\u6267\u884C\u4E00\u904D onMounted \u6062\u590D\u6B63\u5E38\uFF0C\u5237\u65B0\u540E\u51FA\u73B0\u53C8\u76F8\u540C\u7684\u95EE\u9898</p><h3>bug \u539F\u56E0</h3><p><strong>\u4E0D\u592A\u6E05\u695A</strong>\uFF01\u521D\u6B65\u731C\u6D4B\u662F\u8BE5 dom \u7684\u5B50\u6811\u6CA1\u6709\u52A0\u8F7D\u5B8C\u6BD5\u5BFC\u81F4\u7684</p><h3>\u4E34\u65F6\u65B9\u6CD5</h3><p>\u4F7F\u7528 setTimeout \u5EF6\u65F6\u6267\u884C\uFF0C\u6062\u590D\u6B63\u5E38</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"></code>
<code class="code-line even line-2"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-3">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-4">    main<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-5">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>
<code class="code-line even last-row line-6"><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div></div>`,9),p=[t],r={title:null,tags:null,categories:["vue3"],description:"\u901A\u8FC7ref\u83B7\u53D6dom\u662F\u53EF\u884C\u7684\uFF0C\u6253\u5370\u663E\u793A\u7684\u786E\u662F\u76EE\u6807dom,\u4F46\u662F\u4F7F\u7528dom\u6267\u884Cdom\u539F\u751F\u65B9\u6CD5(scrollTo)\u65F6\u65E0\u6548\u4E86\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F",publishTime:"2022-08-31T15:16:20.000Z",updateTime:null,img:null,toc:!1,comment:!0},k="",F=s({__name:"index",setup(c,{expose:n}){return n({frontmatter:{title:null,tags:null,categories:["vue3"],description:"\u901A\u8FC7ref\u83B7\u53D6dom\u662F\u53EF\u884C\u7684\uFF0C\u6253\u5370\u663E\u793A\u7684\u786E\u662F\u76EE\u6807dom,\u4F46\u662F\u4F7F\u7528dom\u6267\u884Cdom\u539F\u751F\u65B9\u6CD5(scrollTo)\u65F6\u65E0\u6548\u4E86\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F",publishTime:"2022-08-31T15:16:20.000Z",updateTime:null,img:null,toc:!1,comment:!0},excerpt:void 0}),(l,i)=>(a(),u("div",e,p))}});export{F as default,k as excerpt,r as frontmatter};