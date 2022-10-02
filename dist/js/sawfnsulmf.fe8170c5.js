import{d as n,o,c,a as d}from"./@vue.1f188819.js";const l={class:"markdown-body"},s=d(`<h1>Nginx</h1><h2>\u5B89\u88C5</h2><p>\u5728<a href="https://nginx.org/en/download.html"><code>Nginx\u5B98\u7F51</code></a>\u4E0B\u8F7D\uFF0C\u5E76\u4E0A\u4F20\u81F3\u670D\u52A1\u5668 /root \u8DEF\u5F84\u4E0B, \u4EE5\u4E0B\u662F 1.21.6\u7248\u672C</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">tar zxvf nginx-1.21.6.tar.gz // \u89E3\u538B</code>
<code class="code-line even line-2">cd nginx-1.21.6</code>
<code class="code-line odd line-3"></code>
<code class="code-line even line-4"><span class="token title important"><span class="token punctuation">#</span> \u68C0\u67E5: \u5982\u679C\u7F3A\u5C11\u4F9D\u8D56, \u5148\u5B89\u88C5\u4F9D\u8D56, \u518D\u6B21\u68C0\u67E5</span></code>
<code class="code-line odd line-5">./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module</code>
<code class="code-line even line-6"></code>
<code class="code-line odd line-7"><span class="token title important"><span class="token punctuation">#</span> \u4F9D\u8D56</span></code>
<code class="code-line even line-8">yum install -y gcc</code>
<code class="code-line odd line-9">yum install -y pcre pcre-devel</code>
<code class="code-line even line-10">yum install -y zlib zlib-devel</code>
<code class="code-line odd line-11"></code>
<code class="code-line even line-12"><span class="token title important"><span class="token punctuation">#</span> \u7F16\u8BD1</span></code>
<code class="code-line odd line-13">make</code>
<code class="code-line even line-14">make install</code>
<code class="code-line odd line-15"></code>
<code class="code-line even line-16"><span class="token title important"><span class="token punctuation">#</span> \u5728 usr/local/nginx/sbin \u76EE\u5F55\u4E0B</span></code>
<code class="code-line odd line-17">./nginx // \u542F\u52A8</code>
<code class="code-line even line-18">./nginx -s stop // \u5FEB\u901F\u505C\u6B62</code>
<code class="code-line odd line-19">./nginx -s quit // \u5B8C\u6210\u5DF2\u7ECF\u63A5\u53D7\u7684\u8BF7\u6C42\u540E\u9000\u51FA</code>
<code class="code-line even line-20">./nginx -s reload // \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</code>
<code class="code-line odd line-21"></code>
<code class="code-line even line-22"><span class="token title important"><span class="token punctuation">#</span> \u5B89\u88C5\u6210\u7CFB\u7EDF\u6587\u4EF6, \u5373\u53EF\u7528 systemctl \u63A7\u5236</span></code>
<code class="code-line odd line-23">vi /usr/lib/systemd/system/nginx.service</code>
<code class="code-line even line-24"><span class="token title important"><span class="token punctuation">#</span> \u586B\u5199\u4EE5\u4E0B:</span></code>
<code class="code-line odd line-25">[Unit]</code>
<code class="code-line even line-26">Description=nginx - web server</code>
<code class="code-line odd line-27">After=network.target remote-fs.target nss-lookup.target</code>
<code class="code-line even line-28"></code>
<code class="code-line odd line-29">[Service]</code>
<code class="code-line even line-30">Type=forking</code>
<code class="code-line odd line-31">PIDFile=/usr/local/nginx/logs/nginx.pid</code>
<code class="code-line even line-32">ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf</code>
<code class="code-line odd line-33">ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf</code>
<code class="code-line even line-34">ExecReload=/usr/local/nginx/sbin/nginx -s reload</code>
<code class="code-line odd line-35">ExecStop=/usr/local/nginx/sbin/nginx -s stop</code>
<code class="code-line even line-36">ExecQuit=/usr/local/nginx/sbin/nginx -s quit</code>
<code class="code-line odd line-37">PrivateTmp=true</code>
<code class="code-line even line-38"></code>
<code class="code-line odd line-39">[Install]</code>
<code class="code-line even line-40">WantedBy=multi-user.target</code>
<code class="code-line odd line-41"></code>
<code class="code-line even line-42"><span class="token title important"><span class="token punctuation">#</span> \u91CD\u65B0\u52A0\u8F7D\u7CFB\u7EDF\u670D\u52A1</span></code>
<code class="code-line odd last-row line-43">systemctl daemon-reload</code></pre></div></div><h2>\u6838\u5FC3\u914D\u7F6E</h2><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1"><span class="token title important"><span class="token punctuation">#</span> \u5DE5\u4F5C\u8FDB\u7A0B\u6570</span></code>
<code class="code-line even line-2">worker_processes  1;</code>
<code class="code-line odd line-3"></code>
<code class="code-line even line-4">events {</code>
<code class="code-line odd line-5">	<span class="token title important"><span class="token punctuation">#</span> \u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u521B\u5EFA\u7684\u8FDE\u63A5\u6570</span></code>
<code class="code-line even line-6">	worker_connections  1024;</code>
<code class="code-line odd line-7">}</code>
<code class="code-line even line-8"></code>
<code class="code-line odd line-9">http {</code>
<code class="code-line even line-10">	<span class="token title important"><span class="token punctuation">#</span> include \u5F15\u7528\u8BE5\u76EE\u5F55\u7684\u5176\u4ED6\u6587\u4EF6</span></code>
<code class="code-line odd line-11">	<span class="token title important"><span class="token punctuation">#</span> \u5F53\u670D\u52A1\u5668\u7ED9\u6D4F\u89C8\u5668\u4F20\u8F93\u6587\u4EF6\u65F6, \u6839\u636E mime.types \u7ED9\u5B9A\u7684\u65B9\u5F0F\u6765\u89E3\u6790\u6587\u4EF6</span></code>
<code class="code-line even line-12">	<span class="token title important"><span class="token punctuation">#</span> \u5F53\u4E0D\u5B58\u5728\u4E8E mime.types \u4E2D\u7684\u6587\u4EF6\u7C7B\u578B\u65F6, \u9ED8\u8BA4\u6309 application/octet-stream \u89E3\u6790</span></code>
<code class="code-line odd line-13">	<span class="token title important"><span class="token punctuation">#</span> \u9700\u8981\u624B\u52A8\u5728 mime.tupes \u4E2D\u6DFB\u52A0\u81EA\u5DF1\u7684\u9700\u8981\u7684\u6587\u4EF6\u7C7B\u578B\u7684\u89E3\u6790\u65B9\u5F0F</span></code>
<code class="code-line even line-14">    include       mime.types;</code>
<code class="code-line odd line-15">    default_type  application/octet-stream;</code>
<code class="code-line even line-16"></code>
<code class="code-line odd line-17">	<span class="token title important"><span class="token punctuation">#</span> \u5F53\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u6587\u4EF6\u65F6, nginx \u4E0D\u8BFB\u53D6\u6587\u4EF6, \u76F4\u63A5\u901A\u8FC7 sendfile \u65B9\u5F0F\u63A8\u9001\u7ED9\u7F51\u7EDC\u63A5\u53E3</span></code>
<code class="code-line even line-18">    sendfile        on;</code>
<code class="code-line odd line-19">    </code>
<code class="code-line even line-20">    <span class="token title important"><span class="token punctuation">#</span> \u5F00\u542F gzip</span></code>
<code class="code-line odd line-21">    gzip  		    on;</code>
<code class="code-line even line-22"></code>
<code class="code-line odd line-23">    keepalive_timeout  65;</code>
<code class="code-line even line-24"></code>
<code class="code-line odd line-25">	<span class="token title important"><span class="token punctuation">#</span> \u865A\u62DF\u4E3B\u673A vhost</span></code>
<code class="code-line even line-26">    <span class="token title important"><span class="token punctuation">#</span> \u4E00\u4E2A server \u5BF9\u5E94\u4E00\u4E2A\u4E3B\u673A, \u76F8\u4E92\u4E4B\u95F4\u4E0D\u5E72\u6270</span></code>
<code class="code-line odd line-27">    server {</code>
<code class="code-line even line-28">    	<span class="token title important"><span class="token punctuation">#</span> \u76D1\u542C\u7684\u7AEF\u53E3\u53F7</span></code>
<code class="code-line odd line-29">        listen       80;</code>
<code class="code-line even line-30">        server_name  localhost; # \u57DF\u540D\u3001\u4E3B\u673A\u540D</code>
<code class="code-line odd line-31"></code>
<code class="code-line even line-32">		<span class="token title important"><span class="token punctuation">#</span> \u8BBF\u95EE &#39;/&#39; \u7684\u8DEF\u7531</span></code>
<code class="code-line odd line-33">        location / {</code>
<code class="code-line even line-34">            root   html; # nginx\u6839\u76EE\u5F55\u4E0B\u7684\u8DEF\u5F84\u76EE\u5F55</code>
<code class="code-line odd line-35">            index  index.html index.htm; # \u5165\u53E3\u6587\u4EF6</code>
<code class="code-line even line-36">        }</code>
<code class="code-line odd line-37">		</code>
<code class="code-line even line-38">		<span class="token title important"><span class="token punctuation">#</span> \u670D\u52A1\u5668\u9519\u8BEF \u9519\u8BEF\u7801 \u91CD\u5B9A\u5411\u5730\u5740</span></code>
<code class="code-line odd line-39">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line even line-40">        <span class="token title important"><span class="token punctuation">#</span> \u8BBF\u95EE &#39;/50x.html&#39; \u7684\u8DEF\u7531</span></code>
<code class="code-line odd line-41">        location = /50x.html {</code>
<code class="code-line even line-42">            root   html;</code>
<code class="code-line odd line-43">        }</code>
<code class="code-line even line-44">    }</code>
<code class="code-line odd last-row line-45">}</code></pre></div></div><h2>\u591A\u7AD9\u70B9\u914D\u7F6E</h2><p><strong>\u5C06\u57DF\u540D\u89E3\u6790\u5230IP\uFF1A\u4E3B\u673A\u8BB0\u5F55\u4E3A <code>@</code></strong></p><p><strong>\u5C06\u57DF\u540D\u6CDB\u89E3\u6790\u5230IP\uFF1A\u4E3B\u673A\u8BB0\u5F55\u4E3A <code>*</code></strong></p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1"><span class="token title important"><span class="token punctuation">#</span> \u5728 nginx \u6839\u76EE\u5F55(/usr/local/nginx)\u65B0\u5EFA\u5B58\u653E\u5404\u7AD9\u70B9\u6587\u4EF6\u7684 www \u6587\u4EF6</span></code>
<code class="code-line even line-2">mkdir www</code>
<code class="code-line odd line-3"><span class="token title important"><span class="token punctuation">#</span> \u521B\u5EFA\u5404\u7AD9\u70B9\u6587\u4EF6\u6587\u4EF6\u5939\u5E76\u653E\u5165\u76F8\u5E94\u7684\u8D44\u6E90</span></code>
<code class="code-line even line-4"><span class="token title important"><span class="token punctuation">#</span> \u4F8B :</span></code>
<code class="code-line odd line-5">mkdir ROOT &amp;&amp; mkdir blog &amp;&amp; mkdir music</code>
<code class="code-line even line-6"></code>
<code class="code-line odd line-7"><span class="token title important"><span class="token punctuation">#</span> \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF1A</span></code>
<code class="code-line even line-8">    server {</code>
<code class="code-line odd line-9">        listen       80;</code>
<code class="code-line even line-10">        server_name  bigzcy.club; # \u57DF\u540D</code>
<code class="code-line odd line-11">        </code>
<code class="code-line even line-12">        location / {</code>
<code class="code-line odd line-13">            root   www/ROOT; # \u6307\u5411\u5BF9\u5E94\u7AD9\u70B9\u7684\u76EE\u5F55</code>
<code class="code-line even line-14">            index  index.html index.htm;</code>
<code class="code-line odd line-15">        }</code>
<code class="code-line even line-16"></code>
<code class="code-line odd line-17">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line even line-18">        location = /50x.html {</code>
<code class="code-line odd line-19">            root   html;</code>
<code class="code-line even line-20">        }</code>
<code class="code-line odd line-21">    }</code>
<code class="code-line even line-22"></code>
<code class="code-line odd line-23">    server {</code>
<code class="code-line even line-24">        listen       80;</code>
<code class="code-line odd line-25">        server_name  music.bigzcy.club; # \u914D\u7F6E\u4E8C\u7EA7\u57DF\u540D</code>
<code class="code-line even line-26">        </code>
<code class="code-line odd line-27">        location / {</code>
<code class="code-line even line-28">            root   www/music; # \u6307\u5411\u5BF9\u5E94\u7AD9\u70B9\u7684\u76EE\u5F55</code>
<code class="code-line odd line-29">            index  index.html index.htm;</code>
<code class="code-line even line-30">        }</code>
<code class="code-line odd line-31"></code>
<code class="code-line even line-32">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line odd line-33">        location = /50x.html {</code>
<code class="code-line even line-34">            root   html;</code>
<code class="code-line odd line-35">        }</code>
<code class="code-line even line-36">    }</code>
<code class="code-line odd line-37"></code>
<code class="code-line even line-38">    server {</code>
<code class="code-line odd line-39">        listen       80;</code>
<code class="code-line even line-40">        server_name  blog.bigzcy.club;</code>
<code class="code-line odd line-41"></code>
<code class="code-line even line-42">        location / {</code>
<code class="code-line odd line-43">            root   www/blog;</code>
<code class="code-line even line-44">            index  index.html index.htm;</code>
<code class="code-line odd line-45">        }</code>
<code class="code-line even line-46"></code>
<code class="code-line odd line-47">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line even line-48">        location = /50x.html {</code>
<code class="code-line odd line-49">            root   html;</code>
<code class="code-line even line-50">        }</code>
<code class="code-line odd line-51">    }</code>
<code class="code-line even line-52">    </code>
<code class="code-line odd line-53"><span class="token title important"><span class="token punctuation">#</span> \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</span></code>
<code class="code-line even last-row line-54">systemctl reload nginx</code></pre></div></div><h2>\u6CDB\u89E3\u6790</h2><p>\u51FA\u4E0A\u5F80\u4E0B\uFF0C\u6839\u636E <code>server_name</code> \u6765\u914D\u7F6E\u5404\u57DF\u540D\u8BBF\u95EE\u7684\u7AD9\u70B9</p><p>\u5F53\u6240\u6709\u7AD9\u70B9\u90FD\u6CA1\u6709\u5339\u914D\u4E0A, \u9ED8\u8BA4\u6307\u5411\u7B2C\u4E00\u4E2A\u7AD9\u70B9\uFF0C\u6240\u4EE5\u7B2C\u4E00\u4E2A\u7AD9\u70B9\u4E00\u822C\u4F1A\u662F\u4E3B\u7AD9\u70B9</p><ol><li>\u5B8C\u6574\u5339\u914D</li></ol><p>\u652F\u6301\u4E00\u4E2A server_name \u914D\u7F6E\u591A\u4E2A\u57DF\u540D</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">server_name blog1.bigzcy.club blog2.bigzcy.club</code></pre></div></div><ol start="2"><li>\u901A\u914D\u7B26\u5339\u914D</li></ol><p>\u5F53\u5339\u914D\u5230\u6B64\u5904\u65F6\uFF0C\u901A\u914D\u6240\u6709\u8BE5\u57DF\u540D\u6216\u4E8C\u7EA7\u57DF\u540D\u90FD\u6307\u5411\u8BE5\u7F51\u7AD9\uFF0C\u6B64\u65B9\u5F0F\u4E5F\u53EF\u914D\u7F6E\u4E3B\u7AD9\u70B9</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">server_name *.bigzcy.club</code></pre></div></div><ol start="3"><li>\u901A\u914D\u7B26\u7ED3\u675F\u5339\u914D</li></ol><p>\u5F53\u4E00\u4E2A\u7AD9\u70B9\u9700\u8981\u591A\u4E2A\u4E00\u7EA7\u57DF\u540D\u5339\u914D\u65F6</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">server_name www.bigzcy.*</code></pre></div></div><ol start="4"><li>\u6B63\u5219\u5339\u914D</li></ol><p>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u65B9\u5F0F\u4F7F\u7AD9\u70B9\u5339\u914D\u66F4\u52A0\u7075\u6D3B\uFF0C\u4EE5<code>~</code>\u5F00\u59CB</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1"><span class="token title important"><span class="token punctuation">#</span> \u8868\u793A\u4E8C\u7EA7\u57DF\u540D\u4E3A\u6570\u5B57\u7684\u7AD9\u70B9, \u5982: 123.bigzcy.club</span></code>
<code class="code-line even last-row line-2">server_name ~^\\d+\\.bigzcy\\.club$;</code></pre></div></div><h2>\u53CD\u5411\u4EE3\u7406</h2><p>\u5F53\u8BF7\u6C42\u6B64\u670D\u52A1\u5668\u65F6\uFF0C\u8BE5\u8BF7\u6C42\u4F1A\u88AB\u8F6C\u53D1\u5230 proxy_pass \u6240\u5BF9\u5E94\u7684\u57DF\u540D\u6216IP\u4E0B\u7684\u670D\u52A1\u5668</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">server {</code>
<code class="code-line even line-2">        listen       80;</code>
<code class="code-line odd line-3">        server_name  localhost;</code>
<code class="code-line even line-4">        </code>
<code class="code-line odd line-5">        location / {</code>
<code class="code-line even line-6">        	<span class="token title important"><span class="token punctuation">#</span> \u4EE3\u7406\u670D\u52A1\u5668 \u57DF\u540D\u6216IP(\u5B8C\u6574)</span></code>
<code class="code-line odd line-7">        	<span class="token title important"><span class="token punctuation">#</span> \u5F53\u5B58\u5728 proxy_pass \u65F6, root | index \u7B49\u914D\u7F6E\u5931\u6548</span></code>
<code class="code-line even line-8">            proxy_pass http://bigzcy.club;</code>
<code class="code-line odd line-9">        }</code>
<code class="code-line even line-10"></code>
<code class="code-line odd line-11">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line even line-12">        location = /50x.html {</code>
<code class="code-line odd line-13">            root   html;</code>
<code class="code-line even line-14">        }</code>
<code class="code-line odd last-row line-15">    }</code></pre></div></div><p>\u8D1F\u8F7D\u5747\u8861\uFF1A\u5F53\u4EE3\u7406\u591A\u4E2A\u670D\u52A1\u5668\u65F6\uFF0C\u9700\u8981\u8F6E\u8BE2\u5F0F\u8F6C\u53D1\u8BF7\u6C42</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1"><span class="token title important"><span class="token punctuation">#</span> \u5B9A\u4E49\u4E00\u7EC4\u8D1F\u8F7D\u670D\u52A1\u5668, httpds \u4F5C\u4E3A\u6807\u8BC6, \u76F8\u5F53\u4E8E\u522B\u540D, \u53EF\u4EFB\u53D6</span></code>
<code class="code-line even line-2">upstream httpds {</code>
<code class="code-line odd line-3">	server 192.168.216.128:80;</code>
<code class="code-line even line-4">	server 192.168.216.129:80;</code>
<code class="code-line odd line-5">}</code>
<code class="code-line even line-6"></code>
<code class="code-line odd line-7">server {</code>
<code class="code-line even line-8">        listen       80;</code>
<code class="code-line odd line-9">        server_name  localhost;</code>
<code class="code-line even line-10">        </code>
<code class="code-line odd line-11">        location / {</code>
<code class="code-line even line-12">        	<span class="token title important"><span class="token punctuation">#</span> proxy_pass \u4F7F\u7528\u5230 httpds ,\u5C06\u8BF7\u6C42\u4EE5\u6B64\u8F6C\u53D1\u5230 upstream \u4E2D\u5404\u8D1F\u8F7D\u670D\u52A1\u5668</span></code>
<code class="code-line odd line-13">            proxy_pass http://httpds;</code>
<code class="code-line even line-14">        }</code>
<code class="code-line odd line-15"></code>
<code class="code-line even line-16">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line odd line-17">        location = /50x.html {</code>
<code class="code-line even line-18">            root   html;</code>
<code class="code-line odd line-19">        }</code>
<code class="code-line even last-row line-20">    }</code></pre></div></div><p><code>upstream</code> \u7528\u4E8E\u8D1F\u8F7D\u5747\u8861\uFF0C\u7528\u6CD5\uFF1A</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">weight # \u6309\u6743\u91CD\u5206\u914D\u8BF7\u6C42\u8F6C\u53D1\u6BD4\u4F8B(weight=8)</code>
<code class="code-line even line-2">down   # \u8BE5\u670D\u52A1\u5668\u4E0D\u518D\u63A5\u6536\u8F6C\u53D1</code>
<code class="code-line odd line-3">backup # \u5F53\u5176\u4ED6\u6240\u6709\u670D\u52A1\u5668\u5747\u4E0D\u53EF\u7528\u65F6\uFF0C\u542F\u7528\u8BE5\u670D\u52A1\u5668(\u5907\u7528\u673A)</code>
<code class="code-line even line-4"></code>
<code class="code-line odd line-5">upstream httpds {</code>
<code class="code-line even line-6">	server 192.168.216.128:80 [\u53C2\u6570\u52A0\u5728\u8FD9\u91CC];</code>
<code class="code-line odd last-row line-7">}</code></pre></div></div><h2>\u52A8\u9759\u5206\u79BB</h2><p>\u5C06\u9759\u6001\u8D44\u6E90\u76EE\u5F55\u524D\u79FB\u81F3 <code>Nginx</code> \u76EE\u5F55\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u8BF7\u6C42\u65F6\u7684\u8F6C\u53D1\u8FC7\u7A0B</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1"><span class="token title important"><span class="token punctuation">#</span> \u6BD4\u5982\uFF1A</span></code>
<code class="code-line even line-2"><span class="token title important"><span class="token punctuation">#</span> express \u9879\u76EE\u65F6, \u53EF\u4EE5\u5C06\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u4ECE express_static \u7684 public \u76EE\u5F55\u8F6C\u79FB\u81F3 nginx \u4E2D</span></code>
<code class="code-line odd line-3">server {</code>
<code class="code-line even line-4">        listen       80;</code>
<code class="code-line odd line-5">        server_name  localhost;</code>
<code class="code-line even line-6">        </code>
<code class="code-line odd line-7">        location /api {</code>
<code class="code-line even line-8">            proxy_pass http://localhost:3000;</code>
<code class="code-line odd line-9">        }</code>
<code class="code-line even line-10">        </code>
<code class="code-line odd line-11">        localhost ~*/(js|img|css|html)$ {</code>
<code class="code-line even line-12">        	root html;</code>
<code class="code-line odd line-13">        	index index.html index.htm;</code>
<code class="code-line even line-14">        }</code>
<code class="code-line odd line-15"></code>
<code class="code-line even line-16">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line odd line-17">        location = /50x.html {</code>
<code class="code-line even line-18">            root   html;</code>
<code class="code-line odd line-19">        }</code>
<code class="code-line even last-row line-20">    }</code></pre></div></div><h2>URL Rewrite</h2><p>\u5C06\u524D\u7AEF\u8BF7\u6C42\u7684URL\u91CD\u5199\u540E\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u7528\u4EE5\u9690\u853D\u8BF7\u6C42\u53C2\u6570</p><p>\u7528\u6CD5\uFF1A rewrite &lt; \u6B63\u5219 &gt; &lt; \u66FF\u6362\u5185\u5BB9 &gt; &lt; \u6807\u5FD7\u4F4D &gt;</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">server {</code>
<code class="code-line even line-2">        listen       80;</code>
<code class="code-line odd line-3">        server_name  localhost;</code>
<code class="code-line even line-4">        </code>
<code class="code-line odd line-5">        location / {</code>
<code class="code-line even line-6">        	<span class="token title important"><span class="token punctuation">#</span> rewrite \u662F\u5BF9 uri \u7684\u91CD\u5199</span></code>
<code class="code-line odd line-7">        	rewrite ^/([0-9]+).html$ /page/$1 break;</code>
<code class="code-line even line-8">        	<span class="token title important"><span class="token punctuation">#</span> \u5E38\u7528 flag \u4F4D\uFF1A break(\u5339\u914D\u6210\u529F\u540E\u505C\u6B62\u5339\u914D) redirect(\u5C06url\u91CD\u5B9A\u5411\u4E3A\u91CD\u5199\u540E\u7684url)</span></code>
<code class="code-line odd line-9">            proxy_pass http://localhost:3000;</code>
<code class="code-line even line-10">        }</code>
<code class="code-line odd line-11"></code>
<code class="code-line even line-12">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line odd line-13">        location = /50x.html {</code>
<code class="code-line even line-14">            root   html;</code>
<code class="code-line odd line-15">        }</code>
<code class="code-line even last-row line-16">    }</code></pre></div></div><h2>\u9632\u76D7\u94FE</h2><p>\u9632\u6B62\u5176\u4ED6\u7F51\u7AD9\u975E\u6CD5\u5F15\u7528\u672C\u7AD9\u70B9\u7684\u8D44\u6E90</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">location / {</code>
<code class="code-line even line-2">	   valid_referers none server_names;</code>
<code class="code-line odd line-3">	   <span class="token title important"><span class="token punctuation">#</span> \u5F53\u4E0D\u5305\u542B refer \u5B57\u6BB5\u6216\u662F refer \u6307\u5411\u6307\u5B9A\u7684\u670D\u52A1\u5668\u65F6, \u652F\u6301\u8BBF\u95EE</span></code>
<code class="code-line even line-4">	   <span class="token title important"><span class="token punctuation">#</span> \u5426\u5219\u8FD4\u56DE 403 \u9519\u8BEF</span></code>
<code class="code-line odd line-5">	   if ($valid_referer){</code>
<code class="code-line even line-6">	   	   return 403;</code>
<code class="code-line odd line-7">	   }</code>
<code class="code-line even line-8">            root   www/blog;</code>
<code class="code-line odd line-9">            index  index.html index.htm;</code>
<code class="code-line even last-row line-10">        }</code></pre></div></div><p>\u5904\u7406\u65B9\u5F0F\uFF1A</p><ol><li>\u8FD4\u56DE\u9519\u8BEF\u7801\uFF1A \u901A\u8FC7\u914D\u7F6E\u9519\u8BEF\u9875\u9762\u7684\u65B9\u5F0F\u5C55\u793A</li><li>\u8FD4\u56DE <code>uri</code> \uFF1A \u914D\u7F6E\u76F8\u5E94 <code>uri</code>\u7684\u9875\u9762\u5C55\u793A</li><li><code>rewrite uri</code> \uFF1A \u4F7F\u7528\u5176\u4ED6\u8D44\u6E90\u4EE3\u66FF</li></ol><h2>keepalived</h2><p>nginx \u9AD8\u53EF\u7528\u914D\u7F6E\uFF0Cnginx \u4E00\u4E3B\u670D\u52A1\u5668\uFF0C\u4E00\u5907\u7528\u670D\u52A1\u5668</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1"><span class="token title important"><span class="token punctuation">#</span> \u5B89\u88C5</span></code>
<code class="code-line even line-2">yum install -y keepalived</code>
<code class="code-line odd line-3"></code>
<code class="code-line even line-4"><span class="token title important"><span class="token punctuation">#</span> \u914D\u7F6E</span></code>
<code class="code-line odd line-5">vi /etc/keepalived/keepalived.conf</code>
<code class="code-line even line-6"></code>
<code class="code-line odd line-7">! Configuration File for keepalived</code>
<code class="code-line even line-8">global_defs {</code>
<code class="code-line odd line-9">   router_id nginx_master # \u4E0D\u540C\u670D\u52A1\u5668 router_id \u9700\u8981\u914D\u7F6E\u4E0D\u540C </code>
<code class="code-line even line-10">}</code>
<code class="code-line odd line-11">vrrp_instance VI_1 {</code>
<code class="code-line even line-12">    state MASTER # \u540D\u79F0, \u53EF\u4EFB\u53D6</code>
<code class="code-line odd line-13">    interface ens33</code>
<code class="code-line even line-14">    virtual_router_id 51</code>
<code class="code-line odd line-15">    priority 100 # \u4F18\u5148\u7EA7, \u4EE5\u6B64\u6765\u8868\u793A\u4E3B\u4ECE\u5173\u7CFB</code>
<code class="code-line even line-16">    advert_int 1</code>
<code class="code-line odd line-17">    authentication {</code>
<code class="code-line even line-18">        auth_type PASS</code>
<code class="code-line odd line-19">        auth_pass 1111</code>
<code class="code-line even line-20">    }</code>
<code class="code-line odd line-21">    virtual_ipaddress {</code>
<code class="code-line even line-22">    	<span class="token title important"><span class="token punctuation">#</span> \u865A\u62DFIP, \u8BBF\u95EE\u65F6\u7528\u6B64IP, \u5E76\u5728\u4E3B\u4ECE\u670D\u52A1\u5668\u4E0A\u9009\u62E9\u670D\u52A1(\u4E3B\u670D\u52A1\u5668\u5B95\u673A,\u4ECE\u670D\u52A1\u5668\u5F97\u5230\u6B64\u865A\u62DFIP)</span></code>
<code class="code-line odd line-23">        192.168.216.100</code>
<code class="code-line even line-24">    }</code>
<code class="code-line odd line-25">}</code>
<code class="code-line even line-26"></code>
<code class="code-line odd line-27"><span class="token title important"><span class="token punctuation">#</span> \u542F\u7528</span></code>
<code class="code-line even last-row line-28">systemctl start keepalived</code></pre></div></div><h2>Https \u914D\u7F6E</h2><p>\u5C06\u8BC1\u4E66\u89E3\u538B\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u7684 <code>/usr/local/nginx/conf</code> \u76EE\u5F55\u4E0B\uFF0C\u5E76\u914D\u7F6E\uFF1A</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1">    <span class="token title important"><span class="token punctuation">#</span> http \u4E0E https \u5171\u5B58</span></code>
<code class="code-line even line-2">    server {</code>
<code class="code-line odd line-3">        listen       80;</code>
<code class="code-line even line-4">       	listen       443 ssl;</code>
<code class="code-line odd line-5">	   	server_name  localhost;</code>
<code class="code-line even line-6">	</code>
<code class="code-line odd line-7">        location / {</code>
<code class="code-line even line-8">            root   html;</code>
<code class="code-line odd line-9">            index  index.html index.htm;</code>
<code class="code-line even line-10">        }</code>
<code class="code-line odd line-11"></code>
<code class="code-line even line-12">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line odd line-13">        location = /50x.html {</code>
<code class="code-line even line-14">            root   html;</code>
<code class="code-line odd line-15">        }</code>
<code class="code-line even line-16"></code>
<code class="code-line odd line-17">	   ssl_certificate 7546233_www.bigzcy.club.pem;</code>
<code class="code-line even line-18">	   ssl_certificate_key 7546233_www.bigzcy.club.key;</code>
<code class="code-line odd line-19">    }</code>
<code class="code-line even line-20">    </code>
<code class="code-line odd line-21">    <span class="token title important"><span class="token punctuation">#</span> \u4EC5\u652F\u6301 https, http \u81EA\u52A8\u91CD\u5B9A\u5411</span></code>
<code class="code-line even line-22">    server {</code>
<code class="code-line odd line-23">       	listen       443 ssl;</code>
<code class="code-line even line-24">	   	server_name  localhost;</code>
<code class="code-line odd line-25"></code>
<code class="code-line even line-26">        location / {</code>
<code class="code-line odd line-27">            root   html;</code>
<code class="code-line even line-28">            index  index.html index.htm;</code>
<code class="code-line odd line-29">        }</code>
<code class="code-line even line-30">        </code>
<code class="code-line odd line-31">        error_page   500 502 503 504  /50x.html;</code>
<code class="code-line even line-32">        location = /50x.html {</code>
<code class="code-line odd line-33">            root   html;</code>
<code class="code-line even line-34">        }</code>
<code class="code-line odd line-35"></code>
<code class="code-line even line-36">	   ssl_certificate 7546233_www.bigzcy.club.pem;</code>
<code class="code-line odd line-37">	   ssl_certificate_key 7546233_www.bigzcy.club.key;</code>
<code class="code-line even line-38">    }</code>
<code class="code-line odd line-39">    </code>
<code class="code-line even line-40">    server {</code>
<code class="code-line odd line-41">    	listen	   80;</code>
<code class="code-line even line-42">    	server_name www.bigzcy.club bigzcy.club;</code>
<code class="code-line odd line-43">    	return 301 https://$server_name$request_uri;</code>
<code class="code-line even line-44">    }</code>
<code class="code-line odd line-45"></code>
<code class="code-line even last-row line-46"><span class="token title important"><span class="token punctuation">#</span> \u91CD\u542F\u5373\u751F\u6548</span></code></pre></div></div><h2>\u5F00\u542FHTTP2.0</h2><p>\u9700\u8981\u5728 HTTPS \u7684\u57FA\u7840\u4E0A\u8BBE\u7F6E\uFF0C\u53EA\u9700\u8981\u5728 listen \u540E\u9762\u6DFB\u52A0\u5373\u53EF~</p><div class="code-wrapper"><div class="heading-row no-heading show-lang"><span class="lang-display"></span></div><div class="code-block language-markdown no-line-numbers" data-lang="" data-modifiers=""><pre class="language-markdown" data-lang=""><code class="code-line odd first-row line-1"> listen   443 ssl http2;</code></pre></div></div>`,53),u=[s],r={title:"nginx\u603B\u7ED3",tags:["nginx"],categories:null,description:"\u6574\u7406\u4E00\u4E0BNginx\u8981\u70B9\uFF0C\u57FA\u672C\u4F7F\u7528",publishTime:"2022-05-17T00:00:00.000Z",updateTime:"2022-09-26T16:39:12.000Z",toc:!0},F="",E=n({__name:"index",setup(a,{expose:e}){return e({frontmatter:{title:"nginx\u603B\u7ED3",tags:["nginx"],categories:null,description:"\u6574\u7406\u4E00\u4E0BNginx\u8981\u70B9\uFF0C\u57FA\u672C\u4F7F\u7528",publishTime:"2022-05-17T00:00:00.000Z",updateTime:"2022-09-26T16:39:12.000Z",toc:!0},excerpt:void 0}),(i,t)=>(o(),c("div",l,u))}});export{E as default,F as excerpt,r as frontmatter};
