import{d as s,o as a,c as t,a as e}from"./@vue.25a72e45.js";const o={class:"markdown-body"},c=e(`<h2>\u6548\u679C</h2><p>\u{1F449}<a href="/resources/Canvas_Signature/index.html">\u70B9\u51FB\u9884\u89C8</a></p><h2>\u5B9E\u73B0</h2><p>index.html</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">html</span></div><div class="code-block language-handlebars no-line-numbers" data-lang="html" data-modifiers=""><pre class="language-handlebars" data-lang="html"><code class="code-line odd first-row line-1"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-2"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-3"></code>
<code class="code-line even line-4"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-5">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-6">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-7">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-8">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-9">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-10">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-11">    body {</code>
<code class="code-line even line-12">      margin: 0;</code>
<code class="code-line odd line-13">      width: 100vw;</code>
<code class="code-line even line-14">      height: 100vh;</code>
<code class="code-line odd line-15">      overflow: hidden;</code>
<code class="code-line even line-16">      display: flex;</code>
<code class="code-line odd line-17">      flex-direction: column;</code>
<code class="code-line even line-18">      justify-content: center;</code>
<code class="code-line odd line-19">      align-items: center;</code>
<code class="code-line even line-20">      background-color: antiquewhite;</code>
<code class="code-line odd line-21">    }</code>
<code class="code-line even line-22"></code>
<code class="code-line odd line-23">    .control {</code>
<code class="code-line even line-24">      margin-top: 50px;</code>
<code class="code-line odd line-25">    }</code>
<code class="code-line even line-26"></code>
<code class="code-line odd line-27">    .control span {</code>
<code class="code-line even line-28">      background-color: rgb(67, 169, 238);</code>
<code class="code-line odd line-29">      padding: 10px 20px 10px 20px;</code>
<code class="code-line even line-30">      color: #fff;</code>
<code class="code-line odd line-31">      border-radius: 10px;</code>
<code class="code-line even line-32">      cursor: pointer;</code>
<code class="code-line odd line-33">    }</code>
<code class="code-line even line-34">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-35"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-36"></code>
<code class="code-line odd line-37"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-38">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>700<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>250<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-39">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>control<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-40">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u4FDD\u5B58<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-41">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-42"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-43"></code>
<code class="code-line even last-row line-44"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code></pre></div></div><p>index.js</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token comment">/**</span></code>
<code class="code-line even line-2">  <span class="token operator">*</span> @type <span class="token punctuation">{</span>HTMLCanvasElement<span class="token punctuation">}</span></code>
<code class="code-line odd line-3"><span class="token operator">*</span><span class="token operator">/</span></code>
<code class="code-line even line-4"><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-5"><span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span></code>
<code class="code-line even line-6">ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">2</span></code>
<code class="code-line odd line-7"></code>
<code class="code-line even line-8"><span class="token keyword">function</span> <span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-9">  <span class="token keyword">const</span> canvasRect <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>
<code class="code-line even line-10">  <span class="token keyword">return</span> <span class="token punctuation">[</span>x <span class="token operator">-</span> canvasRect<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y <span class="token operator">-</span> canvasRect<span class="token punctuation">.</span>y<span class="token punctuation">]</span></code>
<code class="code-line odd line-11"><span class="token punctuation">}</span></code>
<code class="code-line even line-12"></code>
<code class="code-line odd line-13"><span class="token keyword">let</span> isDrawing <span class="token operator">=</span> <span class="token boolean">false</span></code>
<code class="code-line even line-14">canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-15">  isDrawing <span class="token operator">=</span> <span class="token boolean">true</span></code>
<code class="code-line even line-16">  ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">getPoint</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>x<span class="token punctuation">,</span> e<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-17"><span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line even line-18"></code>
<code class="code-line odd line-19">canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-20">  <span class="token keyword">if</span> <span class="token punctuation">(</span>isDrawing<span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-21">    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">getPoint</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>x<span class="token punctuation">,</span> e<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span></code>
<code class="code-line even line-22">    ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-23">  <span class="token punctuation">}</span></code>
<code class="code-line even line-24"><span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-25"></code>
<code class="code-line even line-26">canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mouseup&quot;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-27">  isDrawing <span class="token operator">=</span> <span class="token boolean">false</span></code>
<code class="code-line even line-28"><span class="token punctuation">}</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-29"></code>
<code class="code-line even line-30"><span class="token keyword">const</span> saveNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.control span&quot;</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-31"></code>
<code class="code-line even line-32">saveNode<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-33">  <span class="token keyword">const</span> dataURL <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>
<code class="code-line even line-34">  <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-35">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span><span class="token string">&quot;beforeend&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span></code>
<code class="code-line even line-36">  a<span class="token punctuation">.</span>href <span class="token operator">=</span> dataURL</code>
<code class="code-line odd line-37">  a<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png</span><span class="token template-punctuation string">\`</span></span></code>
<code class="code-line even line-38">  a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-39">  a<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>
<code class="code-line even last-row line-40"><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div></div>`,7),p=[c],k={title:null,tags:null,categories:null,description:"\u4F7F\u7528 canvas \u5B9E\u73B0\u7B80\u5355\u7684\u624B\u5199\u7B7E\u540D\uFF0C\u7C7B\u4F3C\u4E8E\u725B\u5BA2\u7F51\u7684\u90A3\u79CD\uFF0C\u540E\u9762\u53EF\u4EE5\u8F6C Blob, \u6216\u4FDD\u5B58\u5230\u672C\u5730",publishTime:"2022-09-28T01:53:25.000Z",updateTime:null,img:null,toc:!1,comment:!0,publish:!0},r="",g=s({__name:"index",setup(l,{expose:n}){return n({frontmatter:{title:null,tags:null,categories:null,description:"\u4F7F\u7528 canvas \u5B9E\u73B0\u7B80\u5355\u7684\u624B\u5199\u7B7E\u540D\uFF0C\u7C7B\u4F3C\u4E8E\u725B\u5BA2\u7F51\u7684\u90A3\u79CD\uFF0C\u540E\u9762\u53EF\u4EE5\u8F6C Blob, \u6216\u4FDD\u5B58\u5230\u672C\u5730",publishTime:"2022-09-28T01:53:25.000Z",updateTime:null,img:null,toc:!1,comment:!0,publish:!0},excerpt:void 0}),(u,i)=>(a(),t("div",o,p))}});export{g as default,r as excerpt,k as frontmatter};
