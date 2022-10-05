import{d as s,o as a,c as e,a as o}from"./@vue.25a72e45.js";const t={class:"markdown-body"},c=o(`<h2>\u7B80\u5355\u4F7F\u7528</h2><p>\u4ECE\u547D\u4EE4\u884C\u8BFB\u53D6\uFF1A</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token keyword">const</span> readline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;readline&#39;</span><span class="token punctuation">)</span></code>
<code class="code-line even line-2"></code>
<code class="code-line odd line-3"><span class="token keyword">const</span> rl <span class="token operator">=</span> readline<span class="token punctuation">.</span><span class="token function">createInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span></code>
<code class="code-line even line-4">  <span class="token literal-property property">input</span><span class="token operator">:</span> process<span class="token punctuation">.</span>stdin<span class="token punctuation">,</span> <span class="token comment">// \u547D\u4EE4\u884C\u8F93\u5165\u6D41</span></code>
<code class="code-line odd line-5">  <span class="token literal-property property">output</span><span class="token operator">:</span> process<span class="token punctuation">.</span>stdout <span class="token comment">// \u547D\u4EE4\u884C\u8F93\u51FA\u6D41</span></code>
<code class="code-line even line-6"><span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-7"></code>
<code class="code-line even line-8">rl<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span> <span class="token parameter">line</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-9">    <span class="token comment">// todo</span></code>
<code class="code-line even last-row line-10"><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div></div><p>\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\uFF1A</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token keyword">const</span> readline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;readline&#39;</span><span class="token punctuation">)</span></code>
<code class="code-line even line-2"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-3"></code>
<code class="code-line even line-4"><span class="token keyword">const</span> file <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-5"></code>
<code class="code-line even line-6"><span class="token keyword">const</span> rl <span class="token operator">=</span> readline<span class="token punctuation">.</span><span class="token function">createInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span></code>
<code class="code-line odd line-7">  <span class="token literal-property property">input</span><span class="token operator">:</span> file<span class="token punctuation">,</span></code>
<code class="code-line even line-8"><span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-9"></code>
<code class="code-line even line-10">rl<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">line</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-11"></code>
<code class="code-line even last-row line-12"><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div></div>`,5),p=[c],r={title:null,tags:["readline"],categories:null,description:"readline \u662FNode.js\u91CC\u5B9E\u73B0\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u7684\u5C01\u88C5\u597D\u7684\u6A21\u5757\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u6A21\u5757\u6211\u4EEC\u53EF\u4EE5\u4EE5\u9010\u884C\u7684\u65B9\u5F0F\u8BFB\u53D6\u6570\u636E\u6D41\u3002",publishTime:"2022-09-16T14:06:26.000Z",updateTime:null,img:null,toc:!1,comment:!0,publish:!0},k="",F=s({__name:"index",setup(u,{expose:n}){return n({frontmatter:{title:null,tags:["readline"],categories:null,description:"readline \u662FNode.js\u91CC\u5B9E\u73B0\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u7684\u5C01\u88C5\u597D\u7684\u6A21\u5757\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u6A21\u5757\u6211\u4EEC\u53EF\u4EE5\u4EE5\u9010\u884C\u7684\u65B9\u5F0F\u8BFB\u53D6\u6570\u636E\u6D41\u3002",publishTime:"2022-09-16T14:06:26.000Z",updateTime:null,img:null,toc:!1,comment:!0,publish:!0},excerpt:void 0}),(l,i)=>(a(),e("div",t,p))}});export{F as default,k as excerpt,r as frontmatter};
