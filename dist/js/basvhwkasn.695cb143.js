import{d as e,o as s,c as a,a as o}from"./@vue.25a72e45.js";const c={class:"markdown-body"},l=o(`<h2>popup.vue \u7EC4\u4EF6\u4E2D</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">vue</span></div><div class="code-block language-handlebars no-line-numbers" data-lang="vue" data-modifiers=""><pre class="language-handlebars" data-lang="vue"><code class="code-line odd first-row line-1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-2">export default {</code>
<code class="code-line odd line-3">  props: [&#39;modelValue&#39;],</code>
<code class="code-line even line-4">  emits: [&#39;update:modelValue&#39;],</code>
<code class="code-line odd line-5">  computed: {</code>
<code class="code-line even line-6">    showPanel: {</code>
<code class="code-line odd line-7">      get() {</code>
<code class="code-line even line-8">        return this.modelValue</code>
<code class="code-line odd line-9">      },</code>
<code class="code-line even line-10">      set(value) {</code>
<code class="code-line odd line-11">        this.$emit(&quot;update:modelValue&quot;, value)</code>
<code class="code-line even line-12">      }</code>
<code class="code-line odd line-13">    },</code>
<code class="code-line even line-14">  },</code>
<code class="code-line odd line-15">  watch: {</code>
<code class="code-line even line-16">    $route() {</code>
<code class="code-line odd line-17">      this.showPanel = false</code>
<code class="code-line even line-18">    }</code>
<code class="code-line odd line-19">  }</code>
<code class="code-line even line-20">}</code>
<code class="code-line odd line-21"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-22"></code>
<code class="code-line odd line-23"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-24">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-25">  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$style.container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.self</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; showPanel = false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showPanel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-26">    			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$style.wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-27">				<span class="token comment">&lt;!-- content --&gt;</span></code>
<code class="code-line even line-28">    			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-29">  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-30">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Teleport</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line odd line-31"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-32"></code>
<code class="code-line odd line-33"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">module</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-34">.container {</code>
<code class="code-line odd line-35">  position: fixed;</code>
<code class="code-line even line-36">  top: 0;</code>
<code class="code-line odd line-37">  left: 0;</code>
<code class="code-line even line-38">  width: 100vw;</code>
<code class="code-line odd line-39">  height: 100vh;</code>
<code class="code-line even line-40">  z-index: 10000;</code>
<code class="code-line odd line-41">  display: flex;</code>
<code class="code-line even line-42">  justify-content: center;</code>
<code class="code-line odd line-43">  align-items: center;</code>
<code class="code-line even line-44">  animation: showAnimation 1s;</code>
<code class="code-line odd line-45">}</code>
<code class="code-line even line-46"></code>
<code class="code-line odd line-47">@keyframes showAnimation {</code>
<code class="code-line even line-48">  from {</code>
<code class="code-line odd line-49">    width: 0;</code>
<code class="code-line even line-50">    height: 0;</code>
<code class="code-line odd line-51">    top: 50%;</code>
<code class="code-line even line-52">    left: 50%;</code>
<code class="code-line odd line-53">  }</code>
<code class="code-line even line-54"></code>
<code class="code-line odd line-55">  to {</code>
<code class="code-line even line-56">    width: 100vw;</code>
<code class="code-line odd line-57">    height: 100vh;</code>
<code class="code-line even line-58">    top: 0;</code>
<code class="code-line odd line-59">    left: 0;</code>
<code class="code-line even line-60">  }</code>
<code class="code-line odd line-61">}</code>
<code class="code-line even line-62"></code>
<code class="code-line odd line-63">.wrap {}</code>
<code class="code-line even last-row line-64"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></code></pre></div></div><h2>\u7236\u7EC4\u4EF6\u4E2D</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">vue</span></div><div class="code-block language-handlebars no-line-numbers" data-lang="vue" data-modifiers=""><pre class="language-handlebars" data-lang="vue"><code class="code-line odd first-row line-1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-2">import Popup from &#39;./Popup.vue&#39;</code>
<code class="code-line odd line-3"></code>
<code class="code-line even line-4">export default {</code>
<code class="code-line odd line-5">  data() {</code>
<code class="code-line even line-6">    return {</code>
<code class="code-line odd line-7">      showPopup: false,</code>
<code class="code-line even line-8">    }</code>
<code class="code-line odd line-9">  },</code>
<code class="code-line even line-10">  components: { Popup },</code>
<code class="code-line odd line-11">}</code>
<code class="code-line even line-12"></code>
<code class="code-line odd line-13"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-14"></code>
<code class="code-line odd line-15"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></code>
<code class="code-line even line-16">  <span class="token comment">&lt;!-- you can put this anywhere --&gt;</span></code>
<code class="code-line odd line-17">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popup</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showPopup<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></code>
<code class="code-line even line-18">  <span class="token comment">&lt;!-- click to show Popup --&gt;</span></code>
<code class="code-line odd line-19">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; showPopup = true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></code>
<code class="code-line even last-row line-20"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></code></pre></div></div>`,4),t=[l],k={title:null,tags:["Popup"],categories:null,description:"\u5FEB\u901F\u5B9E\u73B0Popup\u7EC4\u4EF6\uFF0C\u81EA\u5B9A\u4E49\u5F00\u542F\u4E0E\u5173\u95ED",publishTime:"2022-08-15T14:24:41.000Z",updateTime:"2022-08-26T21:33:30.000Z",img:null,toc:!1},r="",g=e({__name:"index",setup(d,{expose:n}){return n({frontmatter:{title:null,tags:["Popup"],categories:null,description:"\u5FEB\u901F\u5B9E\u73B0Popup\u7EC4\u4EF6\uFF0C\u81EA\u5B9A\u4E49\u5F00\u542F\u4E0E\u5173\u95ED",publishTime:"2022-08-15T14:24:41.000Z",updateTime:"2022-08-26T21:33:30.000Z",img:null,toc:!1},excerpt:void 0}),(p,i)=>(s(),a("div",c,t))}});export{g as default,r as excerpt,k as frontmatter};
