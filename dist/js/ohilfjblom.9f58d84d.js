import{d as F,o as E,c as C,a as B}from"./@vue.ca4ffc67.js";const n={class:"markdown-body"},s=B(`<h1>GC \u673A\u5236</h1><blockquote><p>\u5F15\u81EA\uFF1A</p><ul><li><a href="https://www.jb51.net/article/229425.htm">https://www.jb51.net/article/229425.htm</a></li><li><a href="https://blog.csdn.net/weixin_43801836/article/details/126043564">https://blog.csdn.net/weixin_43801836/article/details/126043564</a></li></ul></blockquote><h2>\u4E3A\u4EC0\u4E48\u9700\u8981\u5783\u573E\u56DE\u6536\uFF08GC\uFF09</h2><ul><li>\u5728 JavaScript \u4E2D\u7684\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\u3001\u6570\u7EC4\u7B49\u6570\u636E\u7684\u5185\u5B58\u662F\u4E0D\u56FA\u5B9A\u7684\uFF0C\u53EA\u6709\u771F\u6B63\u4F7F\u7528\u7684\u65F6\u5019\u624D\u4F1A\u52A8\u6001\u5206\u914D\u5185\u5B58\u3002</li><li>\u8FD9\u4E9B\u6570\u636E\u6240\u5360\u7684\u5185\u5B58\u5728\u4E0D\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u8FDB\u884C\u91CA\u653E\uFF0C\u4EE5\u4FBF\u518D\u6B21\u4F7F\u7528\uFF0C\u5426\u5219\u53EF\u7528\u5185\u5B58\u8017\u5C3D\u9020\u6210\u7A0B\u5E8F\u5D29\u6E83\u3002</li></ul><h2>\u4EC0\u4E48\u662F\u5783\u573E\u56DE\u6536</h2><p>\u5728 JavaScript \u4E2D\u62E5\u6709\u81EA\u52A8\u7684\u5783\u573E\u56DE\u6536\u673A\u5236\uFF0C\u901A\u8FC7\u4E00\u4E9B\u56DE\u6536\u7B97\u6CD5\uFF0C\u627E\u51FA\u4E0D\u518D\u4F7F\u7528\u5F15\u7528\u7684\u53D8\u91CF\u6216\u5C5E\u6027\uFF0C\u7531 JS \u5F15\u64CE\u6309\u7167\u56FA\u5B9A\u65F6\u95F4\u95F4\u9694\u5468\u671F\u6027\u7684\u91CA\u653E\u5176\u6240\u5360\u7684\u5185\u5B58\u7A7A\u95F4</p><h2>\u5783\u573E\u4EA7\u751F</h2><p>\u5F53\u4E00\u4E2A\u5BF9\u8C61<strong>\u6CA1\u6709\u4EFB\u4F55\u7684\u53D8\u91CF\u6216\u5C5E\u6027\u5BF9\u5B83\u8FDB\u884C\u5F15\u7528</strong>\uFF0C\u6B64\u65F6\u6211\u4EEC\u5C06\u6C38\u8FDC\u65E0\u6CD5\u64CD\u4F5C\u8BE5\u5BF9\u8C61\uFF0C\u8FD9\u79CD\u5BF9\u8C61\u5C31\u662F\u4E00\u4E2A\u5783\u573E\uFF0C\u8FD9\u79CD\u5BF9\u8C61\u8FC7\u591A\u4F1A\u5360\u7528\u5927\u91CF\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u53D8\u6162\u3002</p><p>\u8FD9\u4E2A\u8FC7\u7A0B\u6211\u4EEC\u4E0D\u9700\u8981\u4E5F\u4E0D\u80FD\u81EA\u5DF1\u8FDB\u884C\u5783\u573E\u56DE\u6536\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7684\u662F<strong>\u5C06\u4E0D\u518D\u4F7F\u7528\u7684\u5BF9\u8C61\u8BBE\u7F6E\u4E3A null</strong> \u5373\u53EF</p><h2>\u5783\u573E\u56DE\u6536\u7B56\u7565</h2><p>JavaScript \u4E2D\u4E3B\u8981\u7684\u5185\u5B58\u7BA1\u7406\u6982\u5FF5\u662F<strong>\u53EF\u8FBE\u6027</strong>\u3002\u5927\u6982\u610F\u601D\u662F<strong>\u4EE5\u67D0\u79CD\u65B9\u5F0F\u53EF\u4EE5\u8BBF\u95EE\u5230\u6216\u8005\u53EF\u4EE5\u4F7F\u7528\u7684\u503C\uFF0C\u5B83\u4EEC\u5C31\u662F\u9700\u8981\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u4E5F\u65E0\u6CD5\u4F7F\u7528\u7684\u503C\uFF0C\u5219\u9700\u8981\u88AB\u5783\u573E\u56DE\u6536\u673A\u5236\u56DE\u6536</strong></p><p>\u5783\u573E\u56DE\u6536\u8FC7\u7A0B\u662F<strong>\u4E0D\u5B9E\u65F6</strong>\u8FDB\u884C\u7684\uFF0C\u56E0\u4E3A JavaScript \u662F\u4E00\u95E8\u5355\u7EBF\u7A0B\u7684\u8BED\u8A00\uFF0C\u6BCF\u6B21\u6267\u884C\u5783\u573E\u56DE\u6536\uFF0C\u4F1A\u4F7F\u7A0B\u5E8F\u5E94\u7528<strong>\u903B\u8F91\u6682\u505C</strong>\uFF0C\u6267\u884C\u5B8C\u5783\u573E\u56DE\u6536\u540E\u5728\u6267\u884C\u5E94\u7528\u903B\u8F91\uFF0C\u8FD9\u79CD\u884C\u4E3A\u79F0\u4E3A<strong>\u5168\u505C\u987F</strong>\uFF0C\u6240\u4EE5\u4E00\u822C\u5783\u573E\u56DE\u6536\u4F1A\u5728 CPU \u7A7A\u95F2\u65F6\u8FDB\u884C</p><h3>\u5F15\u7528\u8BA1\u6570\u6807\u8BB0</h3><p><strong>\u7B56\u7565\u601D\u60F3\uFF1A</strong></p><ul><li>\u8DDF\u8E2A\u8BB0\u5F55\u6BCF\u4E2A\u53D8\u91CF\u503C\u88AB\u4F7F\u7528\u7684\u6B21\u6570</li><li>\u5F53\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u5E76\u4E14\u5C06\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u6570\u636E\u8D4B\u503C\u7ED9\u8FD9\u4E2A\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u5F15\u7528\u7C7B\u578B\u6570\u636E\u7684\u5F15\u7528\u6B21\u6570\u5C31\u6807\u8BB0\u4E3A 1</li><li>\u5982\u679C\u5F53\u8FD9\u4E2A\u5F15\u7528\u7C7B\u578B\u6570\u636E\u53C8\u8D4B\u503C\u7ED9\u53E6\u4E00\u4E2A\u53D8\u91CF\uFF0C\u90A3\u4E48\u5F15\u7528\u6B21\u6570\u5C31+1</li><li>\u5982\u679C\u53D8\u91CF\u88AB\u5176\u4ED6\u7684\u503C\u8986\u76D6\uFF0C\u5219\u5F15\u7528\u6B21\u6570-1</li><li>\u5F53\u8FD9\u4E2A\u5F15\u7528\u7C7B\u578B\u6570\u636E\u7684\u5F15\u7528\u6B21\u6570\u53D8\u4E3A0\u7684\u65F6\u5019,\u8FD9\u4E2A\u53D8\u91CF\u5C31\u6CA1\u6709\u88AB\u4F7F\u7528\u4E86\uFF0C\u4E5F\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u5783\u573E\u56DE\u6536\u5668\u5C31\u4F1A\u5728\u6267\u884C\u65F6\uFF0C\u9500\u6BC1\u5F15\u7528\u6B21\u6570\u4E3A0\u7684\u5F15\u7528\u7C7B\u578B\u6570\u636E\uFF0C\u56DE\u6536\u5176\u6240\u5360\u7528\u7684\u5185\u5B58\u7A7A\u95F4\u3002</li></ul><p>\u95EE\u9898\uFF1A<strong>\u5FAA\u73AF\u5F15\u7528</strong></p><p>\u5BF9\u8C61A\u7684\u5C5E\u6027\u6307\u5411\u5BF9\u8C61B,\u5BF9\u8C61B\u7684\u5C5E\u6027\u6307\u5411\u5BF9\u8C61A,\u8FD9\u4E2A\u51FD\u6570\u5728\u6267\u884C\u5B8C\uFF0C\u5BF9\u8C61A\u548CB\u7684\u8BA1\u6570\u5668\u4E5F\u4E0D\u4F1A\u4E3A0\uFF0C\u5F71\u54CD\u4E86\u6B63\u5E38\u7684GC</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>
<code class="code-line even line-2"><span class="token punctuation">{</span></code>
<code class="code-line odd line-3">    <span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>
<code class="code-line even line-4">    <span class="token keyword">let</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-5">    <span class="token constant">A</span><span class="token punctuation">.</span>pointer<span class="token operator">=</span> <span class="token constant">B</span><span class="token punctuation">;</span></code>
<code class="code-line even line-6">    <span class="token constant">B</span><span class="token punctuation">.</span>pointer <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">;</span></code>
<code class="code-line odd line-7"><span class="token punctuation">}</span></code>
<code class="code-line even last-row line-8"><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div></div><p>\u5F53\u5BF9\u8C61A\u548C\u5BF9\u8C61B\u7684\u5C5E\u6027\u76F8\u4E92\u5F15\u7528\u8FD9\uFF0C\u6309\u7167\u5F15\u7528\u8BA1\u6570\u7B56\u7565\uFF0C\u4ED6\u4EEC\u7684\u5F15\u7528\u8BA1\u6570\u90FD\u662F\u4E3A 2,\u4F46\u662F\u5728 test() \u6267\u884C\u5B8C\u6210\u540E\uFF0C\u5728\u51FD\u6570\u6267\u884C\u5B8C\uFF0C\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u6570\u636E\u5BF9\u8C61 A \u548C\u5BF9\u8C61 B \u90FD\u5E94\u8BE5\u88AB GC \u9500\u6BC1\u6389\u3002</p><p>\u5982\u679C\u6267\u884C\u591A\u6B21\uFF0C\u5C06\u4F1A\u9020\u6210\u4E25\u91CD\u7684\u5185\u5B58\u6CC4\u6F0F\u3002</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><p>\u5728 A \u4E0E B \u4F7F\u7528\u5B8C\u540E\u624B\u52A8\u5C06\u5176\u7F6E\u4E3A null</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display">js</span></div><div class="code-block language-javascript no-line-numbers" data-lang="js" data-modifiers=""><pre class="language-javascript" data-lang="js"><code class="code-line odd first-row line-1"><span class="token comment">//\u5207\u65AD\u5F15\u7528\u5173\u7CFB</span></code>
<code class="code-line even line-2"><span class="token constant">A</span> <span class="token operator">=</span> <span class="token keyword">null</span></code>
<code class="code-line odd last-row line-3"><span class="token constant">B</span> <span class="token operator">=</span> <span class="token keyword">null</span></code></pre></div></div><p>\u4F18\u52BF\uFF1A</p><ul><li>\u6700\u5927\u9650\u5EA6\u51CF\u5C11 GC \u65F6\u95F4\uFF0C\u51CF\u5C11\u7A0B\u5E8F\u6682\u505C\u65F6\u95F4</li></ul><p>\u7F3A\u5904\uFF1A</p><ul><li>\u65E0\u6CD5\u56DE\u6536\u5FAA\u73AF\u5F15\u7528\u7684\u5BF9\u8C61</li></ul><h3>\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5</h3><p><strong>\u5927\u6982\u8FC7\u7A0B\uFF1A</strong></p><ul><li>\u5783\u573E\u6536\u96C6\u5668\u5728\u8FD0\u884C\u65F6\u4F1A\u7ED9\u5185\u5B58\u4E2D\u6240\u6709\u7684\u53D8\u91CF\u90FD\u52A0\u4E0A\u4E00\u4E2A\u6807\u8BB0\uFF0C\u5047\u8BBE\u5185\u5B58\u4E2D\u6240\u6709\u7684\u5BF9\u8C61\u5168\u90E8\u662F\u5783\u573E\uFF0C\u5168\u90E8\u6807\u8BB0\u4E3A0</li><li>\u7136\u540E\u4ECE\u5404\u4E2A<strong>\u6839\u5BF9\u8C61</strong>\u5F00\u59CB\u904D\u5386\uFF0C\u628A\u4E0D\u662F\u5783\u573E\u7684\u8282\u70B9\u6539\u62101</li><li>\u6E05\u7406\u6240\u6709\u6807\u8BB0\u4E3A0\u7684\u5783\u573E\uFF0C\u9500\u6BC1\u5E76\u56DE\u6536\u5B83\u4EEC\u6240\u5360\u7528\u7684\u5185\u5B58\u7A7A\u95F4</li><li>\u6700\u540E\u628A\u6240\u6709\u5185\u5B58\u4E2D\u5BF9\u8C61\u6807\u8BB0\u4FEE\u6539\u4E3A0\uFF0C\u7B49\u5F85\u4E0B\u4E00\u8F6E\u7684\u5783\u573E\u56DE\u6536</li></ul><p>\u4F18\u52BF\uFF1A</p><ul><li>\u5B9E\u73B0\u7B80\u5355\uFF0C\u6807\u8BB0\u60C5\u51B5\u65E0\u975E\u4E24\u79CD\uFF0C\u901A\u8FC7\u4E8C\u8FDB\u5236\uFF080\u548C1\uFF09\u5C31\u53EF\u4EE5\u4E3A\u5176\u6807\u8BB0</li><li>\u80FD\u591F\u56DE\u6536\u5FAA\u73AF\u5F15\u7528\u7684\u5BF9\u8C61</li><li>\u662Fv8\u5F15\u64CE\u4F7F\u7528\u6700\u591A\u7684\u7B97\u6CD5</li></ul><p>\u7F3A\u5904\uFF1A</p><ul><li>\u5728\u6E05\u9664\u5783\u573E\u4E4B\u540E\uFF0C\u5269\u4F59\u5BF9\u8C61\u7684\u5185\u5B58\u4F4D\u7F6E\u662F\u4E0D\u53D8\u7684\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u7A7A\u95F2\u5185\u5B58\u7A7A\u95F4\u4E0D\u8FDE\u7EED\u3002\u8FD9\u6837\u5C31\u51FA\u73B0\u4E86\u5185\u5B58\u788E\u7247\uFF0C\u5E76\u4E14\u7531\u4E8E\u5269\u4F59\u7A7A\u95F4\u4E0D\u662F\u6574\u5757\uFF0C\u5C31\u9700\u8981\u5185\u5B58\u5206\u914D\u7684\u95EE\u9898</li></ul><h3>\u6807\u8BB0\u6574\u7406\u7B97\u6CD5</h3><p>\u6807\u8BB0\u6574\u7406\uFF08Mark-Compact\uFF09\u7B97\u6CD5\uFF0C\u5C31\u662F\u53EF\u4EE5\u6709\u6548\u7684\u89E3\u51B3\uFF0C\u5B83\u662F\u5728\u6807\u8BB0\u7ED3\u675F\u540E\u6807\u8BB0\u6574\u7406\u7B97\u6CD5\u4F1A\u5C06\u4E0D\u9700\u8981\u6E05\u7406\u7684\u5BF9\u8C61\u5411\u5185\u5B58\u4E00\u7AEF\u79FB\u52A8\uFF0C\u6700\u540E\u6E05\u7406\u8FB9\u754C\u7684\u5185\u5B58</p><h2>v8\u5F15\u64CE\u7684\u5783\u573E\u56DE\u6536</h2><h3>v8\u5185\u5B58\u5927\u5C0F</h3><p>v8\u5F15\u64CE\u4E2D\u7684\u5185\u5B58\u4F7F\u7528\uFF1A v8\u5F15\u64CE\u572864\u4F4D\u7CFB\u7EDF\u4E0B\u6700\u591A\u53EA\u80FD\u4F7F\u7528\u7EA61.4GB\u7684\u5185\u5B58\uFF0C\u572832\u4F4D\u7CFB\u7EDF\u4E0B\u6700\u591A\u53EA\u80FD\u4F7F\u7528\u7EA60.7GB\u7684\u5185\u5B58 v8\u7684\u5185\u5B58\u9650\u5236\uFF08\u4E3A\u4EC0\u4E48\u5185\u5B58\u8FD9\u4E48\u5C0F\uFF0C\u5BF9\u5185\u5B58\u8FDB\u884C\u9650\u5236\u5462\uFF1F\uFF1F\uFF09</p><ul><li>JS \u662F\u5355\u7EBF\u7A0B\uFF0Cv8 \u6267\u884C\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u7A0B\u5E8F\u4E2D\u7684\u5176\u4ED6\u5404\u79CD\u903B\u8F91\u90FD\u8981\u8FDB\u5165\u6682\u505C\u7B49\u5F85\u9636\u6BB5\uFF0C\u76F4\u5230\u5783\u573E\u56DE\u6536\u7ED3\u675F\u540E\u624D\u4F1A\u518D\u6B21\u91CD\u65B0\u6267\u884C JS \u903B\u8F91\u3002\u56E0\u6B64\uFF0C\u7531\u4E8E JS \u7684\u5355\u7EBF\u7A0B\u673A\u5236\uFF0C<strong>\u5783\u573E\u56DE\u6536\u7684\u8FC7\u7A0B\u963B\u788D\u4E86\u4E3B\u7EBF\u7A0B\u903B\u8F91\u7684\u6267\u884C</strong></li><li>\u5783\u573E\u56DE\u6536\u672C\u8EAB\u4E5F\u662F\u4E00\u4EF6\u975E\u5E38\u8017\u65F6\u7684\u64CD\u4F5C\uFF0C\u5728\u5783\u573E\u56DE\u6536\u7684\u8FC7\u7A0B\u4E2D\u6D4F\u89C8\u5668\u4E00\u76F4\u5904\u4E8E\u7B49\u5F85\u7684\u72B6\u6001\uFF0C\u540C\u65F6\u4F1A\u5931\u53BB\u5BF9\u7528\u6237\u7684\u54CD\u5E94</li></ul><p>\u56E0\u6B64\u5982\u679C\u5185\u5B58\u4F7F\u7528\u8FC7\u9AD8\uFF0C\u90A3\u4E48\u5FC5\u7136\u4F1A\u5BFC\u81F4\u5783\u573E\u56DE\u6536\u7684\u8FC7\u7A0B\u7F13\u6162\uFF0C\u4E5F\u5C31<strong>\u4F1A\u5BFC\u81F4\u4E3B\u7EBF\u7A0B\u7684\u7B49\u5F85\u65F6\u95F4\u8D8A\u957F\uFF0C\u6D4F\u89C8\u5668\u4E5F\u5C31\u8D8A\u957F\u65F6\u95F4\u5F97\u4E0D\u5230\u54CD\u5E94</strong></p><h3>v8\u7684\u5783\u573E\u56DE\u6536\u7B56\u7565</h3><ul><li>V8\u5F15\u64CE\u7684\u5783\u573E\u56DE\u6536\u91C7\u7528<strong>\u6807\u8BB0\u6E05\u9664\u6CD5\u4E0E\u5206\u4EE3\u56DE\u6536\u6CD5</strong></li><li>\u5206\u4E3A\u65B0\u751F\u4EE3\u548C\u8001\u751F\u4EE3 <ul><li>\u65B0\u751F\u4EE3\uFF1A\u5BF9\u8C61\u7684\u5B58\u6D3B\u65F6\u95F4\u8F83\u77ED\u3002\u65B0\u751F\u5BF9\u8C61\u6216\u53EA\u7ECF\u8FC7\u4E00\u6B21\u5783\u573E\u56DE\u6536\u7684\u5BF9\u8C61\u3002</li><li>\u8001\u751F\u4EE3\uFF1A\u5BF9\u8C61\u5B58\u6D3B\u65F6\u95F4\u8F83\u957F\u3002\u7ECF\u5386\u8FC7\u4E00\u6B21\u6216\u591A\u6B21\u5783\u573E\u56DE\u6536\u7684\u5BF9\u8C61\u3002</li></ul></li></ul><h4>\u65B0\u751F\u4EE3</h4><p>\u65B0\u751F\u4EE3\u7684\u5783\u573E\u56DE\u6536\u8FC7\u7A0B\u4E2D\u4E3B\u8981\u91C7\u7528\u4E86Scavenge\u7B97\u6CD5\u3002\u65B0\u751F\u4EE3\u5185\u5B58\u4E00\u5206\u4E3A\u4E8C</p><p>\u5904\u4E8E\u6FC0\u6D3B\u72B6\u6001\u7684\u533A\u57DF\u6211\u4EEC\u79F0\u4E3A<strong>From\u7A7A\u95F4</strong>\uFF0C\u672A\u6FC0\u6D3B(inactive new space)\u7684\u533A\u57DF\u6211\u4EEC\u79F0\u4E3A<strong>To\u7A7A\u95F4</strong></p><p>\u8FD9\u4E24\u4E2A\u7A7A\u95F4\u4E2D\uFF0C\u59CB\u7EC8\u53EA\u6709\u4E00\u4E2A\u5904\u4E8E\u4F7F\u7528\u72B6\u6001\uFF0C\u53E6\u4E00\u4E2A\u5904\u4E8E\u95F2\u7F6E\u72B6\u6001\u3002</p><p>\u7A0B\u5E8F\u4E2D\u58F0\u660E\u7684\u5BF9\u8C61\u9996\u5148\u4F1A\u88AB\u5206\u914D\u5230From\u7A7A\u95F4\uFF0C\u5F53\u8FDB\u884C\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u5982\u679CFrom\u7A7A\u95F4\u4E2D\u5C1A\u6709\u5B58\u6D3B\u5BF9\u8C61\uFF0C\u5219\u4F1A\u88AB\u590D\u5236\u5230To\u7A7A\u95F4\u8FDB\u884C\u4FDD\u5B58\uFF0C\u975E\u5B58\u6D3B\u7684\u5BF9\u8C61\u4F1A\u88AB\u81EA\u52A8\u56DE\u6536\u3002\u5F53\u590D\u5236\u5B8C\u6210\u540E\uFF0CFrom\u7A7A\u95F4\u548CTo\u7A7A\u95F4\u5B8C\u6210\u4E00\u6B21\u89D2\u8272\u4E92\u6362\uFF0CTo\u7A7A\u95F4\u4F1A\u53D8\u4E3A\u65B0\u7684From\u7A7A\u95F4\uFF0C\u539F\u6765\u7684From\u7A7A\u95F4\u5219\u53D8\u4E3ATo\u7A7A\u95F4</p><h4>\u664B\u5347\u5230\u8001\u751F\u4EE3</h4><p>\u5F53\u4E00\u4E2A\u5BF9\u8C61\u5728\u65B0\u751F\u4EE3\u7ECF\u8FC7\u591A\u6B21\u590D\u5236\u4E4B\u540E\u4F9D\u65E7\u5B58\u6D3B\uFF0C\u90A3\u4E48\u5B83\u4F1A\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A\u751F\u547D\u5468\u671F\u8F83\u957F\u7684\u5BF9\u8C61\uFF0C\u5728\u4E0B\u4E00\u6B21\u8FDB\u884C\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u8BE5\u5BF9\u8C61\u4F1A\u88AB\u76F4\u63A5\u8F6C\u79FB\u5230\u8001\u751F\u4EE3\u4E2D\uFF0C\u8FD9\u79CD\u5BF9\u8C61\u4ECE\u65B0\u751F\u4EE3\u8F6C\u79FB\u5230\u8001\u751F\u4EE3\u7684\u8FC7\u7A0B\u6211\u4EEC\u79F0\u4E4B\u4E3A\u664B\u5347\u3002</p><p>\u5BF9\u8C61\u664B\u5347\u7684\u6761\u4EF6\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u4E2A\uFF1A</p><ul><li>\u5BF9\u8C61\u662F\u5426\u7ECF\u5386\u8FC7\u4E00\u6B21Scavenge\u7B97\u6CD5</li><li>To\u7A7A\u95F4\u7684\u5185\u5B58\u5360\u6BD4\u662F\u5426\u5DF2\u7ECF\u8D85\u8FC725%</li></ul><h4>\u8001\u751F\u4EE3</h4><p>\u91C7\u7528Mark-Sweep(\u6807\u8BB0\u6E05\u9664)\u548CMark-Compact(\u6807\u8BB0\u6574\u7406)\u6765\u8FDB\u884C\u7BA1\u7406</p><p>\u4E3A\u4E86\u51CF\u5C11\u5783\u573E\u56DE\u6536\u5E26\u6765\u7684\u505C\u987F\u65F6\u95F4\uFF0CV8\u5F15\u64CE\u53C8\u5F15\u5165\u4E86Incremental Marking(<strong>\u589E\u91CF\u6807\u8BB0</strong>)\u7684\u6982\u5FF5\uFF0C\u5373\u5C06\u539F\u672C\u9700\u8981\u4E00\u6B21\u6027\u904D\u5386\u5806\u5185\u5B58\u7684\u64CD\u4F5C\u6539\u4E3A\u589E\u91CF\u6807\u8BB0\u7684\u65B9\u5F0F\uFF0C\u5148\u6807\u8BB0\u5806\u5185\u5B58\u4E2D\u7684\u4E00\u90E8\u5206\u5BF9\u8C61\uFF0C\u7136\u540E\u6682\u505C\uFF0C\u5C06\u6267\u884C\u6743\u91CD\u65B0\u4EA4\u7ED9JS\u4E3B\u7EBF\u7A0B\uFF0C\u5F85\u4E3B\u7EBF\u7A0B\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\u518D\u4ECE\u539F\u6765\u6682\u505C\u6807\u8BB0\u7684\u5730\u65B9\u7EE7\u7EED\u6807\u8BB0\uFF0C\u76F4\u5230\u6807\u8BB0\u5B8C\u6574\u4E2A\u5806\u5185\u5B58\u3002V8\u5F15\u64CE\u540E\u7EED\u7EE7\u7EED\u5F15\u5165\u4E86<strong>\u5EF6\u8FDF\u6E05\u7406(lazy sweeping)\u548C\u589E\u91CF\u5F0F\u6574\u7406</strong></p><h2>\u5982\u4F55\u9632\u6B62\u5185\u5B58\u6CC4\u9732?</h2><ul><li>\u907F\u514D\u4F7F\u7528\u5168\u5C40 var\uFF0C\uFF08\u539F\u56E0\uFF1A\u4F7F\u7528 var \u5168\u5C40\u5BF9\u8C61\u6302\u5728\u5230 window \u4E0A\uFF0C\u5728\u6807\u8BB0\u9636\u6BB5\u56E0\u4E3A window \u5BF9\u8C61\u53EF\u4EE5\u4F5C\u4E3A\u6839\u8282\u70B9\uFF0C\u5728 window \u4E0A\u6302\u8F7D\u7684\u5C5E\u6027\u5747\u53EF\u4EE5\u88AB\u8BBF\u95EE\u5230\uFF0C\u5E76\u5C06\u5176\u6807\u8BB0\u4E3A\u6D3B\u52A8\u7684\u4ECE\u800C\u5E38\u9A7B\u5185\u5B58\uFF0C\u56E0\u6B64\u4E5F\u5C31\u4E0D\u4F1A\u88AB\u5783\u573E\u56DE\u6536\uFF0C\u53EA\u6709\u5728\u6574\u4E2A\u8FDB\u7A0B\u9000\u51FA\u65F6\u5168\u5C40\u4F5C\u7528\u57DF\u624D\u4F1A\u88AB\u9500\u6BC1\uFF09\u5168\u5C40\u53D8\u91CF\u4F7F\u7528\u5B8C\u6BD5\u540E\u5C06\u5176\u8BBE\u7F6E\u4E3A null \u4ECE\u800C\u89E6\u53D1\u56DE\u6536\u673A\u5236</li><li>\u5C11\u7528\u95ED\u5305</li><li>\u624B\u52A8\u5173\u95ED\u5B9A\u65F6\u5668</li><li>\u4F7F\u7528\u5F31\u5F15\u7528</li></ul>`,57),a=[s],o={title:null,tags:["GC","v8"],categories:null,description:"javascript \u7684\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u8FC7\u7A0B\u4E0E\u65B9\u6CD5,v8\u5F15\u64CE\u7684\u8FD0\u8F6C\u8FC7\u7A0B",publishTime:"2022-09-04T23:35:24.000Z",updateTime:null,img:null,toc:!1,comment:!0,publish:!0},e="",p=F({__name:"index",setup(A,{expose:u}){return u({frontmatter:{title:null,tags:["GC","v8"],categories:null,description:"javascript \u7684\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u8FC7\u7A0B\u4E0E\u65B9\u6CD5,v8\u5F15\u64CE\u7684\u8FD0\u8F6C\u8FC7\u7A0B",publishTime:"2022-09-04T23:35:24.000Z",updateTime:null,img:null,toc:!1,comment:!0,publish:!0},excerpt:void 0}),(l,t)=>(E(),C("div",n,a))}});export{p as default,e as excerpt,o as frontmatter};