import{d as s,o as a,c as e,a as o}from"./@vue.b664db41.js";const p={class:"markdown-body"},t=o(`<div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></code>
<code class="code-line even line-2"></code>
<code class="code-line odd line-3"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-4">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-5">    <span class="token keyword">return</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-6">      <span class="token literal-property property">timer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></code>
<code class="code-line odd line-7">      <span class="token literal-property property">pointNum</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></code>
<code class="code-line even line-8">    <span class="token punctuation">}</span></code>
<code class="code-line odd line-9">  <span class="token punctuation">}</span><span class="token punctuation">,</span></code>
<code class="code-line even line-10">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;el&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></code>
<code class="code-line odd line-11">  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;update:modelValue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></code>
<code class="code-line even line-12">  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-13">      <span class="token function">targetNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></code>
<code class="code-line even line-14">          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">||</span> document<span class="token punctuation">.</span>body</code>
<code class="code-line odd line-15">      <span class="token punctuation">}</span><span class="token punctuation">,</span></code>
<code class="code-line even line-16">      <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-17">          <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></code>
<code class="code-line even line-18">              <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modelValue</code>
<code class="code-line odd line-19">          <span class="token punctuation">}</span><span class="token punctuation">,</span></code>
<code class="code-line even line-20">          <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span></code>
<code class="code-line odd line-21">              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;update:modelValue&quot;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span></code>
<code class="code-line even line-22">          <span class="token punctuation">}</span></code>
<code class="code-line odd line-23">      <span class="token punctuation">}</span></code>
<code class="code-line even line-24">  <span class="token punctuation">}</span></code>
<code class="code-line odd line-25">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-26">    <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-27">      <span class="token keyword">this</span><span class="token punctuation">.</span>pointNum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pointNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">6</span></code>
<code class="code-line even line-28">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span></code>
<code class="code-line odd line-29">  <span class="token punctuation">}</span><span class="token punctuation">,</span></code>
<code class="code-line even line-30">  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-31">    <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span></code>
<code class="code-line even line-32">  <span class="token punctuation">}</span></code>
<code class="code-line odd line-33"><span class="token punctuation">}</span></code>
<code class="code-line even line-34"></code>
<code class="code-line odd line-35"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></code>
<code class="code-line even line-36"></code>
<code class="code-line odd line-37"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></code>
<code class="code-line even line-38">	<span class="token operator">&lt;</span>Teleport <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;targetNode&quot;</span><span class="token operator">&gt;</span></code>
<code class="code-line odd line-39">  		<span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style.conatiner&quot;</span> v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;isShow&quot;</span><span class="token operator">&gt;</span></code>
<code class="code-line even line-40">    		<span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style[&#39;sk-chase&#39;]&quot;</span><span class="token operator">&gt;</span></code>
<code class="code-line odd line-41">                <span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style[&#39;sk-chase-dot&#39;]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line even line-42">                <span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style[&#39;sk-chase-dot&#39;]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line odd line-43">                <span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style[&#39;sk-chase-dot&#39;]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line even line-44">                <span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style[&#39;sk-chase-dot&#39;]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line odd line-45">                <span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style[&#39;sk-chase-dot&#39;]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line even line-46">                <span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style[&#39;sk-chase-dot&#39;]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line odd line-47">            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line even line-48">            <span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;$style.description&quot;</span> v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;message&quot;</span><span class="token operator">&gt;</span></code>
<code class="code-line odd line-49">                <span class="token punctuation">{</span><span class="token punctuation">{</span> message <span class="token punctuation">}</span><span class="token punctuation">}</span></code>
<code class="code-line even line-50">                <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>pointNum<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></code>
<code class="code-line odd line-51">                <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token string">&quot;visibility: hidden;&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">6</span> <span class="token operator">-</span> pointNum<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></code>
<code class="code-line even line-52">            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line odd line-53">  		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></code>
<code class="code-line even line-54">	<span class="token operator">&lt;</span><span class="token operator">/</span>Teleport<span class="token operator">&gt;</span></code>
<code class="code-line odd line-55"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></code>
<code class="code-line even line-56"></code>
<code class="code-line odd line-57"><span class="token operator">&lt;</span>style module<span class="token operator">&gt;</span></code>
<code class="code-line even line-58"><span class="token punctuation">.</span>conatiner <span class="token punctuation">{</span></code>
<code class="code-line odd line-59">  <span class="token literal-property property">width</span><span class="token operator">:</span> 100vw<span class="token punctuation">;</span></code>
<code class="code-line even line-60">  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span></code>
<code class="code-line odd line-61">  <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span></code>
<code class="code-line even line-62">  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-63">  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></code>
<code class="code-line even line-64">  z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-65">  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span></code>
<code class="code-line even line-66">  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span></code>
<code class="code-line odd line-67">  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span></code>
<code class="code-line even line-68">  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span></code>
<code class="code-line odd line-69">  background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span></code>
<code class="code-line even line-70"><span class="token punctuation">}</span></code>
<code class="code-line odd line-71"></code>
<code class="code-line even line-72"><span class="token punctuation">.</span>description <span class="token punctuation">{</span></code>
<code class="code-line odd line-73">  margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span></code>
<code class="code-line even line-74"><span class="token punctuation">}</span></code>
<code class="code-line odd line-75"></code>
<code class="code-line even line-76"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase <span class="token punctuation">{</span></code>
<code class="code-line odd line-77">  <span class="token literal-property property">width</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span></code>
<code class="code-line even line-78">  <span class="token literal-property property">height</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span></code>
<code class="code-line odd line-79">  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span></code>
<code class="code-line even line-80">  <span class="token literal-property property">animation</span><span class="token operator">:</span> sk<span class="token operator">-</span>chase <span class="token number">2</span><span class="token punctuation">.</span>5s infinite linear both<span class="token punctuation">;</span></code>
<code class="code-line odd line-81"><span class="token punctuation">}</span></code>
<code class="code-line even line-82"></code>
<code class="code-line odd line-83"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot <span class="token punctuation">{</span></code>
<code class="code-line even line-84">  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-85">  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></code>
<code class="code-line even line-86">  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span></code>
<code class="code-line odd line-87">  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></code>
<code class="code-line even line-88">  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-89">  <span class="token literal-property property">animation</span><span class="token operator">:</span> sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot <span class="token number">2</span><span class="token punctuation">.</span>0s infinite ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out both<span class="token punctuation">;</span></code>
<code class="code-line even line-90"><span class="token punctuation">}</span></code>
<code class="code-line odd line-91"></code>
<code class="code-line even line-92"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>before <span class="token punctuation">{</span></code>
<code class="code-line odd line-93">  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></code>
<code class="code-line even line-94">  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span></code>
<code class="code-line odd line-95">  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token operator">%</span><span class="token punctuation">;</span></code>
<code class="code-line even line-96">  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">30</span><span class="token operator">%</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-97">  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span></code>
<code class="code-line even line-98">  <span class="token literal-property property">left</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span></code>
<code class="code-line odd line-99">  <span class="token literal-property property">top</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span></code>
<code class="code-line even line-100">  background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token constant">F4AF43</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-101">  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></code>
<code class="code-line even line-102">  <span class="token literal-property property">animation</span><span class="token operator">:</span> sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">-</span>before <span class="token number">2</span><span class="token punctuation">.</span>0s infinite ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out both<span class="token punctuation">;</span></code>
<code class="code-line odd line-103"><span class="token punctuation">}</span></code>
<code class="code-line even line-104"></code>
<code class="code-line odd line-105"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-106">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">.</span>1s<span class="token punctuation">;</span></code>
<code class="code-line odd line-107"><span class="token punctuation">}</span></code>
<code class="code-line even line-108"></code>
<code class="code-line odd line-109"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">2</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-110">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">.</span>0s<span class="token punctuation">;</span></code>
<code class="code-line odd line-111"><span class="token punctuation">}</span></code>
<code class="code-line even line-112"></code>
<code class="code-line odd line-113"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-114">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>9s<span class="token punctuation">;</span></code>
<code class="code-line odd line-115"><span class="token punctuation">}</span></code>
<code class="code-line even line-116"></code>
<code class="code-line odd line-117"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">4</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-118">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>8s<span class="token punctuation">;</span></code>
<code class="code-line odd line-119"><span class="token punctuation">}</span></code>
<code class="code-line even line-120"></code>
<code class="code-line odd line-121"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-122">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>7s<span class="token punctuation">;</span></code>
<code class="code-line odd line-123"><span class="token punctuation">}</span></code>
<code class="code-line even line-124"></code>
<code class="code-line odd line-125"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">6</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-126">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>6s<span class="token punctuation">;</span></code>
<code class="code-line odd line-127"><span class="token punctuation">}</span></code>
<code class="code-line even line-128"></code>
<code class="code-line odd line-129"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span></code>
<code class="code-line even line-130">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">.</span>1s<span class="token punctuation">;</span></code>
<code class="code-line odd line-131"><span class="token punctuation">}</span></code>
<code class="code-line even line-132"></code>
<code class="code-line odd line-133"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span></code>
<code class="code-line even line-134">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">.</span>0s<span class="token punctuation">;</span></code>
<code class="code-line odd line-135"><span class="token punctuation">}</span></code>
<code class="code-line even line-136"></code>
<code class="code-line odd line-137"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span></code>
<code class="code-line even line-138">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>9s<span class="token punctuation">;</span></code>
<code class="code-line odd line-139"><span class="token punctuation">}</span></code>
<code class="code-line even line-140"></code>
<code class="code-line odd line-141"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span></code>
<code class="code-line even line-142">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>8s<span class="token punctuation">;</span></code>
<code class="code-line odd line-143"><span class="token punctuation">}</span></code>
<code class="code-line even line-144"></code>
<code class="code-line odd line-145"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span></code>
<code class="code-line even line-146">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>7s<span class="token punctuation">;</span></code>
<code class="code-line odd line-147"><span class="token punctuation">}</span></code>
<code class="code-line even line-148"></code>
<code class="code-line odd line-149"><span class="token punctuation">.</span>sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span></code>
<code class="code-line even line-150">  animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>6s<span class="token punctuation">;</span></code>
<code class="code-line odd line-151"><span class="token punctuation">}</span></code>
<code class="code-line even line-152"></code>
<code class="code-line odd line-153">@keyframes sk<span class="token operator">-</span>chase <span class="token punctuation">{</span></code>
<code class="code-line even line-154">  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-155">    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span></code>
<code class="code-line even line-156">  <span class="token punctuation">}</span></code>
<code class="code-line odd line-157"><span class="token punctuation">}</span></code>
<code class="code-line even line-158"></code>
<code class="code-line odd line-159">@keyframes sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot <span class="token punctuation">{</span></code>
<code class="code-line even line-160"></code>
<code class="code-line odd line-161">  <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">,</span></code>
<code class="code-line even line-162">  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-163">    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span></code>
<code class="code-line even line-164">  <span class="token punctuation">}</span></code>
<code class="code-line odd line-165"><span class="token punctuation">}</span></code>
<code class="code-line even line-166"></code>
<code class="code-line odd line-167">@keyframes sk<span class="token operator">-</span>chase<span class="token operator">-</span>dot<span class="token operator">-</span>before <span class="token punctuation">{</span></code>
<code class="code-line even line-168">  <span class="token number">50</span><span class="token operator">%</span> <span class="token punctuation">{</span></code>
<code class="code-line odd line-169">    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>
<code class="code-line even line-170">  <span class="token punctuation">}</span></code>
<code class="code-line odd line-171"></code>
<code class="code-line even line-172">  <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span></code>
<code class="code-line odd line-173">  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span></code>
<code class="code-line even line-174">    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-175">  <span class="token punctuation">}</span></code>
<code class="code-line even line-176"><span class="token punctuation">}</span></code>
<code class="code-line odd last-row line-177"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></code></pre></div></div>`,1),c=[t],k={title:null,tags:["loading"],categories:null,description:null,publishTime:"2022-08-23T16:19:00.000Z",updateTime:"2022-08-27T16:03:20.000Z",img:null,toc:!1,comment:!0},u="",y=s({__name:"index",setup(l,{expose:n}){return n({frontmatter:{title:null,tags:["loading"],categories:null,description:null,publishTime:"2022-08-23T16:19:00.000Z",updateTime:"2022-08-27T16:03:20.000Z",img:null,toc:!1,comment:!0},excerpt:void 0}),(r,d)=>(a(),e("div",p,c))}});export{y as default,u as excerpt,k as frontmatter};
