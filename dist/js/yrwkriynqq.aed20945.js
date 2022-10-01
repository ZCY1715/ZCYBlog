import{d as s,o as a,c as e,a as t}from"./@vue.b664db41.js";const o={class:"markdown-body"},c=t(`<h2>\u5B89\u88C5</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">shell</span></div><div class="code-block language-shell no-line-numbers" data-lang="shell" data-modifiers=""><pre class="language-shell" data-lang="shell"><code class="code-line odd first-row line-1"><span class="token function">npm</span> i js-yaml</code></pre></div></div><h2>\u4F7F\u7528</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token keyword">const</span> yaml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;js-yaml&#39;</span><span class="token punctuation">)</span></code>
<code class="code-line even line-2"></code>
<code class="code-line odd line-3"><span class="token keyword">function</span> <span class="token function">readYaml</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-4">  <span class="token keyword">const</span> fileContents <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-5">  <span class="token keyword">return</span> yaml<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>fileContents<span class="token punctuation">)</span></code>
<code class="code-line even line-6"><span class="token punctuation">}</span></code>
<code class="code-line odd line-7"></code>
<code class="code-line even line-8"><span class="token keyword">function</span> <span class="token function">writeYaml</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-9">  <span class="token keyword">const</span> yamlStr <span class="token operator">=</span> yaml<span class="token punctuation">.</span><span class="token function">dump</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></code>
<code class="code-line even line-10">  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> yamlStr<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span></code>
<code class="code-line odd last-row line-11"><span class="token punctuation">}</span></code></pre></div></div>`,4),l=[c],r={title:null,tags:["yaml"],categories:null,description:"\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528 yaml \u975E\u5E38\u65B9\u4FBF\u7684\uFF0C\u4E00\u770B\u5C31\u77E5\u9053\u600E\u4E48\u914D\u7F6E",publishTime:"2022-08-23T17:39:25.000Z",updateTime:null,img:null,toc:!1,comment:!0},k="",m=s({__name:"index",setup(p,{expose:n}){return n({frontmatter:{title:null,tags:["yaml"],categories:null,description:"\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528 yaml \u975E\u5E38\u65B9\u4FBF\u7684\uFF0C\u4E00\u770B\u5C31\u77E5\u9053\u600E\u4E48\u914D\u7F6E",publishTime:"2022-08-23T17:39:25.000Z",updateTime:null,img:null,toc:!1,comment:!0},excerpt:void 0}),(u,i)=>(a(),e("div",o,l))}});export{m as default,k as excerpt,r as frontmatter};
