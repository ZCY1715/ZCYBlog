import{d as F,o as D,c as C,a as E}from"./@vue.1f188819.js";const B={class:"markdown-body"},l=E('<blockquote><p>\u5F15\u81EA\uFF1A<a href="https://blog.csdn.net/qq_44870156/article/details/123768179">https://blog.csdn.net/qq_44870156/article/details/123768179</a></p></blockquote><h2>\u6E32\u67D3\u6D41\u7A0B</h2><ol><li>\u6E32\u67D3\u5F15\u64CE\u9996\u5148\u4F1A\u5C06html\u5143\u7D20\u751F\u4EA7\u8282\u70B9\u6811\uFF08dom\u6811\uFF09</li><li>css\u4F1A\u88AB\u89E3\u6790\u6210\u7C7B\u4F3Cdom\u6811\u4E00\u6837\u7684css\u6811\uFF1A\u8FD9\u4E2A\u8FC7\u7A0B\u6BD4\u8F83\u6D88\u8017\u6027\u80FD\uFF0C\u6837\u5F0F\u6709\u53EF\u80FD\u662F\u7EE7\u627F\u548C\u81EA\u8EAB\u83B7\u53D6\uFF0C\u9700\u8981\u904D\u5386\uFF0C\u6240\u4EE5\u6211\u4EEC\u7684 <strong>dom \u6811\u5C42\u7EA7\u5C3D\u91CF\u8981\u5C0F\uFF0C\u4F7F\u7528id\u6216\u8005class\u9009\u62E9\u5668\uFF0C\u540E\u4EE3\u9009\u62E9\u5668\u4E0D\u8981\u592A\u6DF1</strong></li><li>\u6D4F\u89C8\u5668\u5C06dom\u6811\u548Ccss\u6811\u5408\u6210\u4E3A\u6E32\u67D3\u6811</li><li>\u6D4F\u89C8\u5668\u6839\u636E\u6E32\u67D3\u6811\u8FDB\u884C\u5E03\u5C40\uFF0C\u8F93\u5165\u4E00\u4E2A\u76D2\u5B50\u6A21\u578B\uFF0C\u5B83\u7CBE\u786E\u7684\u6355\u83B7\u6BCF\u4E2A\u8282\u70B9\u5728\u89C6\u56FE\u5185\u7684\u786E\u5207\u7684\u4F4D\u7F6E\u548C\u5C3A\u5BF8\uFF0C\u6240\u6709\u76F8\u5BF9\u7684\u6D4B\u91CF\u6307\u503C\u90FD\u4F1A\u8F6C\u6362\u6210\u4E3A\u5C4F\u5E55\u4E0A\u7684\u7EDD\u5BF9\u50CF\u7D20\uFF0C\u901A\u5E38\u8FD9\u4E00\u884C\u4E3A\u88AB\u79F0\u4E3A<strong>\u56DE\u6D41\u548C\u81EA\u52A8\u91CD\u6392</strong></li><li>.\u5728\u5E03\u5C40\u5B8C\u6210\u4E4B\u540E\u6D4F\u89C8\u5668\u4F1A\u7ACB\u5373\u53D1\u51FApaint setup\u4E8B\u4EF6\uFF0C\u5C06\u6E32\u67D3\u6811\u8F6C\u6362\u6210\u5C4F\u5E55\u7684\u50CF\u7D20\uFF0C\u8FD9\u4E00\u4E2A\u8FC7\u7A0B\u6211\u4EEC\u901A\u5E38\u88AB\u79F0\u4E3A\u7ED8\u5236\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u7684\u9875\u9762\u5C06\u663E\u793A\u5728\u6211\u4EEC\u7684\u5C4F\u5E55\u4E0A\u9762</li></ol><h2>\u91CD\u6392</h2><p>\u5F53 DOM \u7684\u53D8\u5316\u5F71\u54CD\u4E86\u5143\u7D20\u7684\u51E0\u4F55\u4FE1\u606F(\u5143\u7D20\u7684\u7684\u4F4D\u7F6E\u548C\u5C3A\u5BF8\u5927\u5C0F)\uFF0C<strong>\u4F7F\u5F97\u90E8\u5206\u6E32\u67D3\u6811\uFF08\u6216\u8005\u6574\u4E2A\u6E32\u67D3\u6811\uFF09\u9700\u8981\u91CD\u65B0\u5206\u6790\u5E76\u4E14\u8282\u70B9\u5C3A\u5BF8\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\uFF0C\u8868\u73B0\u4E3A\u91CD\u65B0\u751F\u6210\u5E03\u5C40\uFF0C\u91CD\u65B0\u6392\u5217\u5143\u7D20</strong></p><p>\u4E0B\u9762\u60C5\u51B5\u4F1A\u53D1\u751F\u91CD\u6392\uFF1A</p><ul><li>\u9875\u9762\u521D\u59CB\u6E32\u67D3\uFF0C\u8FD9\u662F\u5F00\u9500\u6700\u5927\u7684\u4E00\u6B21\u91CD\u6392</li><li>\u6DFB\u52A0/\u5220\u9664\u53EF\u89C1\u7684DOM\u5143\u7D20</li><li>\u6539\u53D8\u5143\u7D20\u4F4D\u7F6E</li><li>\u6539\u53D8\u5143\u7D20\u5C3A\u5BF8\uFF0C\u6BD4\u5982\u8FB9\u8DDD\uFF08margin\uFF09\u3001\u586B\u5145\uFF08padding\uFF09\u3001\u8FB9\u6846\uFF08border\uFF09\u3001\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7B49</li><li>\u6539\u53D8\u5143\u7D20\u5185\u5BB9\uFF0C\u6BD4\u5982\u6587\u5B57\u6570\u91CF\uFF0C\u56FE\u7247\u5927\u5C0F\u7B49</li><li>\u6539\u53D8\u5143\u7D20\u5B57\u4F53\u5927\u5C0F</li><li>\u6539\u53D8\u6D4F\u89C8\u5668\u7A97\u53E3\u5C3A\u5BF8\uFF0C\u6BD4\u5982resize\u4E8B\u4EF6\u53D1\u751F\u65F6</li><li>\u6FC0\u6D3BCSS\u4F2A\u7C7B\uFF08\u4F8B\u5982\uFF1A:hover\uFF09</li><li>\u901A\u8FC7display\uFF1Anone\u9690\u85CF\u4E00\u4E2ADOM\u8282\u70B9</li><li>\u7ED9\u9875\u9762\u4E2D\u7684DOM\u8282\u70B9\u6DFB\u52A0\u52A8\u753B</li><li>\u2026</li></ul><p><strong>\u5C40\u90E8\u91CD\u6392\u53D1\u751F\u7684\u60C5\u51B5\uFF1A</strong> \u628A\u4E00\u4E2ADOM\u5143\u7D20\u7684\u5BBD\u9AD8\u7B49\u51E0\u4F55\u7279\u6027\u5B9A\u6B7B\uFF0C\u7136\u540E\u6539\u53D8\u8BE5\u5143\u7D20\u5185\u90E8\u7684\u51E0\u4F55\u5C5E\u6027\uFF0C\u5219\u4F1A\u89E6\u53D1\u5C40\u90E8\u91CD\u6392</p><h2>\u91CD\u7ED8</h2><p>\u7531\u4E8E\u8282\u70B9\u7684\u6837\u5F0F\u53D1\u751F\u6539\u53D8\uFF0C\u4F8B\u5982\u6539\u53D8\u5143\u7D20\u80CC\u666F\u8272\u65F6\uFF0C\u5C4F\u5E55\u4E0A\u7684\u90E8\u5206\u5185\u5BB9\u9700\u8981\u66F4\u65B0\uFF0C\u8868\u73B0\u4E3A\u67D0\u4E9B\u5143\u7D20\u7684\u5916\u89C2\u88AB\u6539\u53D8\uFF0C\u4F46\u6CA1\u6709\u6539\u53D8\u5E03\u5C40\u3002\u9664\u6B64\u4E4B\u5916\uFF0C<strong>\u91CD\u6392\u4E5F\u5FC5\u7136\u4F1A\u89E6\u53D1\u91CD\u7ED8</strong></p><p>\u9664\u4E86\u91CD\u6392\u89E6\u53D1\u91CD\u7ED8\uFF0C\u4E0B\u9762\u60C5\u51B5\u4F1A\u53D1\u751F\u91CD\u6392\uFF1A</p><ul><li>\u6539\u53D8\u989C\u8272</li><li>\u901A\u8FC7<code>visibility\uFF1Ahidden</code>\u9690\u85CF\u5143\u7D20</li><li>\u6539\u53D8<code>border-style</code></li><li>\u6DFB\u52A0\u5706\u89D2\u3001\u9634\u5F71</li><li><code>outline</code></li><li>\u2026</li></ul><h2>\u5982\u4F55\u907F\u514D\u91CD\u6392\u91CD\u7ED8</h2><ol><li>\u51CF\u5C11\u91CD\u6392\u7684\u8303\u56F4</li></ol><p>\u5C3D\u91CF\u4EE5\u5C40\u90E8\u5E03\u5C40\u7684\u5F62\u5F0F\u7EC4\u7EC7html\u7ED3\u6784\uFF0C\u5C3D\u53EF\u80FD\u5C0F\u7684\u5F71\u54CD\u91CD\u6392\u7684\u8303\u56F4\u3002\u6BD4\u5982\u89E6\u53D1BFC\uFF0C\u6539\u53D8BFC\u5185\u90E8\u7684\u5143\u7D20\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u90E8\u3002</p><ol start="2"><li>\u51CF\u5C11\u91CD\u6392\u91CD\u7ED8\u7684\u6B21\u6570</li></ol><ul><li>\u96C6\u4E2D\u6539\u53D8\u6837\u5F0F</li></ul><p>\u5F53\u9700\u8981\u4E00\u6B21\u6027\u5BF9\u67D0\u4E2A\u5143\u7D20\u6539\u53D8\u591A\u79CD\u6837\u5F0F\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u589E\u5220 class \u7684\u65B9\u5F0F</p><ul><li>\u5C06 DOM \u79BB\u7EBF</li><li><code>display:none</code>\uFF1A\u4E00\u65E6\u6211\u4EEC\u7ED9\u5143\u7D20\u8BBE\u7F6E display:none \u65F6\uFF08\u53EA\u6709\u4E00\u6B21\u91CD\u6392\u91CD\u7ED8\uFF09\uFF0C\u5143\u7D20\u4FBF\u4E0D\u4F1A\u518D\u5B58\u5728\u5728\u6E32\u67D3\u6811\u4E2D\uFF0C\u76F8\u5F53\u4E8E\u5C06\u5176\u4ECE\u9875\u9762\u4E0A\u201C\u62FF\u6389\u201D\uFF0C\u6211\u4EEC\u4E4B\u540E\u7684\u64CD\u4F5C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u91CD\u6392\u548C\u91CD\u7ED8\uFF0C\u6DFB\u52A0\u8DB3\u591F\u591A\u7684\u53D8\u66F4\u540E\uFF0C\u901A\u8FC7 display:block \u5C5E\u6027\u663E\u793A\uFF08\u53E6\u4E00\u6B21\u91CD\u6392\u91CD\u7ED8\uFF09\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u5373\u4F7F\u5927\u91CF\u53D8\u66F4\u4E5F\u53EA\u89E6\u53D1\u4E24\u6B21\u91CD\u6392\u91CD\u7ED8\u3002</li><li><code>documentFragment</code>\uFF1Adocument.createDocumentFragment \u521B\u5EFA\u4E00\u4E2A\u6E38\u79BB\u4E8E DOM \u6811\u4E4B\u5916\u7684\u8282\u70B9\uFF0C\u7136\u540E\u5728\u6B64\u8282\u70B9\u4E0A\u6279\u91CF\u64CD\u4F5C\uFF0C\u6700\u540E\u63D2\u5165 DOM \u6811\u4E2D\uFF0C\u53EA\u89E6\u53D1\u4E00\u6B21\u91CD\u6392\u91CD\u7ED8</li><li>\u5206\u79BB\u8BFB\u5199\u64CD\u4F5C</li></ul><p><strong>\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u961F\u5217\u673A\u5236\uFF1A</strong> \u5F53\u6211\u4EEC\u4FEE\u6539\u4E86\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027\uFF0C\u5BFC\u81F4\u6D4F\u89C8\u5668\u89E6\u53D1\u91CD\u6392\u6216\u91CD\u7ED8\u65F6\u3002\u5B83\u4F1A\u628A\u8BE5\u64CD\u4F5C\u653E\u8FDB\u6E32\u67D3\u961F\u5217\uFF0C\u7B49\u5230\u961F\u5217\u4E2D\u7684\u64CD\u4F5C\u5230\u4E86\u4E00\u5B9A\u7684\u6570\u91CF\u6216\u8005\u5230\u4E86\u4E00\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u6279\u91CF\u6267\u884C\u8FD9\u4E9B\u64CD\u4F5C\u3002</p><p>\u4F46\u662F\uFF0C\u4E00\u4E9B\u8BFB\u53D6\u5143\u7D20\u5C5E\u6027\u7684\u64CD\u4F5C\u4F1A\u5F3A\u5236\u5237\u65B0\u6E32\u67D3\u961F\u5217\uFF0C\u4ECE\u800C\u4F7F\u91CD\u7ED8\u4E0E\u91CD\u6392\u63D0\u524D\u53D1\u751F\u3002</p><p>\u5305\u62EC\uFF1AoffsetTop, offsetLeft, offsetWidth, offsetHeight\uFF1BscrollTop, scrollLeft, scrollWidth, scrollHeight\uFF1BclientTop, clientLeft, clientWidth, clientHeight\uFF1BgetComputedStyle() \u7B49</p><p><strong>\u5F53\u5728\u5FAA\u73AF\u4FEE\u6539\u5143\u7D20\u6837\u5F0F\u65F6\uFF0C\u5C06\u8BFB\u53D6\u64CD\u4F5C\u63D0\u5230\u5FAA\u73AF\u5916\u7528\u53D8\u91CF\u5B58\u50A8\u3002</strong></p>',23),i=[l],s={title:null,tags:["\u6E32\u67D3","\u91CD\u7ED8","\u91CD\u6392","\u56DE\u6D41"],categories:null,description:"\u6D4F\u89C8\u5668\u6E32\u67D3\u9875\u9762\u7684\u6D41\u7A0B\uFF0C\u91CD\u7ED8\u4E0E\u91CD\u62CD\u4F55\u65F6\u53D1\u751F\uFF0C\u600E\u4E48\u51CF\u5C11\u5B83\u4EEC\u6765\u63D0\u9AD8\u6027\u80FD\uFF1F",publishTime:"2022-09-10T18:45:15.000Z",updateTime:null,img:null,toc:!0,comment:!0,publish:!0},n="",c=F({__name:"index",setup(A,{expose:u}){return u({frontmatter:{title:null,tags:["\u6E32\u67D3","\u91CD\u7ED8","\u91CD\u6392","\u56DE\u6D41"],categories:null,description:"\u6D4F\u89C8\u5668\u6E32\u67D3\u9875\u9762\u7684\u6D41\u7A0B\uFF0C\u91CD\u7ED8\u4E0E\u91CD\u62CD\u4F55\u65F6\u53D1\u751F\uFF0C\u600E\u4E48\u51CF\u5C11\u5B83\u4EEC\u6765\u63D0\u9AD8\u6027\u80FD\uFF1F",publishTime:"2022-09-10T18:45:15.000Z",updateTime:null,img:null,toc:!0,comment:!0,publish:!0},excerpt:void 0}),(t,e)=>(D(),C("div",B,i))}});export{c as default,n as excerpt,s as frontmatter};