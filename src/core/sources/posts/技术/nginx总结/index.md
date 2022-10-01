---
title: nginx总结
tags:
  - nginx
categories:
description: 整理一下Nginx要点，基本使用
publishTime: 2022-05-17
updateTime: 2022-09-26 16:39:12
toc: true
---

# Nginx

## 安装

在[`Nginx官网`](https://nginx.org/en/download.html)下载，并上传至服务器 /root 路径下, 以下是 1.21.6版本

```
tar zxvf nginx-1.21.6.tar.gz // 解压
cd nginx-1.21.6

# 检查: 如果缺少依赖, 先安装依赖, 再次检查
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module

# 依赖
yum install -y gcc
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel

# 编译
make
make install

# 在 usr/local/nginx/sbin 目录下
./nginx // 启动
./nginx -s stop // 快速停止
./nginx -s quit // 完成已经接受的请求后退出
./nginx -s reload // 重新加载配置文件

# 安装成系统文件, 即可用 systemctl 控制
vi /usr/lib/systemd/system/nginx.service
# 填写以下:
[Unit]
Description=nginx - web server
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target

# 重新加载系统服务
systemctl daemon-reload
```

## 核心配置

```
# 工作进程数
worker_processes  1;

events {
	# 一个进程可以创建的连接数
	worker_connections  1024;
}

http {
	# include 引用该目录的其他文件
	# 当服务器给浏览器传输文件时, 根据 mime.types 给定的方式来解析文件
	# 当不存在于 mime.types 中的文件类型时, 默认按 application/octet-stream 解析
	# 需要手动在 mime.tupes 中添加自己的需要的文件类型的解析方式
    include       mime.types;
    default_type  application/octet-stream;

	# 当向服务器请求文件时, nginx 不读取文件, 直接通过 sendfile 方式推送给网络接口
    sendfile        on;
    
    # 开启 gzip
    gzip  		    on;

    keepalive_timeout  65;

	# 虚拟主机 vhost
    # 一个 server 对应一个主机, 相互之间不干扰
    server {
    	# 监听的端口号
        listen       80;
        server_name  localhost; # 域名、主机名

		# 访问 '/' 的路由
        location / {
            root   html; # nginx根目录下的路径目录
            index  index.html index.htm; # 入口文件
        }
		
		# 服务器错误 错误码 重定向地址
        error_page   500 502 503 504  /50x.html;
        # 访问 '/50x.html' 的路由
        location = /50x.html {
            root   html;
        }
    }
}

```

## 多站点配置

 **将域名解析到IP：主机记录为 `@`** 

 **将域名泛解析到IP：主机记录为 `*`** 

```
# 在 nginx 根目录(/usr/local/nginx)新建存放各站点文件的 www 文件
mkdir www
# 创建各站点文件文件夹并放入相应的资源
# 例 :
mkdir ROOT && mkdir blog && mkdir music

# 在配置文件中：
    server {
        listen       80;
        server_name  bigzcy.club; # 域名
        
        location / {
            root   www/ROOT; # 指向对应站点的目录
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       80;
        server_name  music.bigzcy.club; # 配置二级域名
        
        location / {
            root   www/music; # 指向对应站点的目录
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       80;
        server_name  blog.bigzcy.club;

        location / {
            root   www/blog;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    
# 重新加载配置文件
systemctl reload nginx
```

## 泛解析

出上往下，根据 `server_name` 来配置各域名访问的站点

当所有站点都没有匹配上, 默认指向第一个站点，所以第一个站点一般会是主站点

1.  完整匹配

   支持一个 server_name 配置多个域名

   ```
   server_name blog1.bigzcy.club blog2.bigzcy.club
   ```

2.  通配符匹配

   当匹配到此处时，通配所有该域名或二级域名都指向该网站，此方式也可配置主站点

   ```
   server_name *.bigzcy.club
   ```

3.  通配符结束匹配

   当一个站点需要多个一级域名匹配时

   ```
   server_name www.bigzcy.*
   ```

4.  正则匹配

   使用正则表达式的方式使站点匹配更加灵活，以`~`开始

   ```
   # 表示二级域名为数字的站点, 如: 123.bigzcy.club
   server_name ~^\d+\.bigzcy\.club$;
   ```

## 反向代理

当请求此服务器时，该请求会被转发到 proxy_pass 所对应的域名或IP下的服务器

```
server {
        listen       80;
        server_name  localhost;
        
        location / {
        	# 代理服务器 域名或IP(完整)
        	# 当存在 proxy_pass 时, root | index 等配置失效
            proxy_pass http://bigzcy.club;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

负载均衡：当代理多个服务器时，需要轮询式转发请求

```
# 定义一组负载服务器, httpds 作为标识, 相当于别名, 可任取
upstream httpds {
	server 192.168.216.128:80;
	server 192.168.216.129:80;
}

server {
        listen       80;
        server_name  localhost;
        
        location / {
        	# proxy_pass 使用到 httpds ,将请求以此转发到 upstream 中各负载服务器
            proxy_pass http://httpds;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

`upstream` 用于负载均衡，用法：

```
weight # 按权重分配请求转发比例(weight=8)
down   # 该服务器不再接收转发
backup # 当其他所有服务器均不可用时，启用该服务器(备用机)

upstream httpds {
	server 192.168.216.128:80 [参数加在这里];
}
```

## 动静分离

将静态资源目录前移至 `Nginx` 目录，从而避免了请求时的转发过程

```
# 比如：
# express 项目时, 可以将静态资源文件从 express_static 的 public 目录转移至 nginx 中
server {
        listen       80;
        server_name  localhost;
        
        location /api {
            proxy_pass http://localhost:3000;
        }
        
        localhost ~*/(js|img|css|html)$ {
        	root html;
        	index index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```



## URL  Rewrite

将前端请求的URL重写后转发给后端服务器，用以隐蔽请求参数

用法： rewrite	< 正则 >	< 替换内容 >	< 标志位 > 

```
server {
        listen       80;
        server_name  localhost;
        
        location / {
        	# rewrite 是对 uri 的重写
        	rewrite ^/([0-9]+).html$ /page/$1 break;
        	# 常用 flag 位： break(匹配成功后停止匹配) redirect(将url重定向为重写后的url)
            proxy_pass http://localhost:3000;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```



## 防盗链

防止其他网站非法引用本站点的资源

```
location / {
	   valid_referers none server_names;
	   # 当不包含 refer 字段或是 refer 指向指定的服务器时, 支持访问
	   # 否则返回 403 错误
	   if ($valid_referer){
	   	   return 403;
	   }
            root   www/blog;
            index  index.html index.htm;
        }
```

处理方式：

1. 返回错误码： 通过配置错误页面的方式展示
2. 返回 `uri` ： 配置相应 `uri`的页面展示
3. `rewrite uri` ： 使用其他资源代替

## keepalived

nginx 高可用配置，nginx 一主服务器，一备用服务器

```
# 安装
yum install -y keepalived

# 配置
vi /etc/keepalived/keepalived.conf

! Configuration File for keepalived
global_defs {
   router_id nginx_master # 不同服务器 router_id 需要配置不同 
}
vrrp_instance VI_1 {
    state MASTER # 名称, 可任取
    interface ens33
    virtual_router_id 51
    priority 100 # 优先级, 以此来表示主从关系
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
    	# 虚拟IP, 访问时用此IP, 并在主从服务器上选择服务(主服务器宕机,从服务器得到此虚拟IP)
        192.168.216.100
    }
}

# 启用
systemctl start keepalived
```

## Https 配置

将证书解压上传至服务器的 `/usr/local/nginx/conf` 目录下，并配置：

```
    # http 与 https 共存
    server {
        listen       80;
       	listen       443 ssl;
	   	server_name  localhost;
	
        location / {
            root   html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

	   ssl_certificate 7546233_www.bigzcy.club.pem;
	   ssl_certificate_key 7546233_www.bigzcy.club.key;
    }
    
    # 仅支持 https, http 自动重定向
    server {
       	listen       443 ssl;
	   	server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }
        
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

	   ssl_certificate 7546233_www.bigzcy.club.pem;
	   ssl_certificate_key 7546233_www.bigzcy.club.key;
    }
    
    server {
    	listen	   80;
    	server_name www.bigzcy.club bigzcy.club;
    	return 301 https://$server_name$request_uri;
    }

# 重启即生效
```

## 开启HTTP2.0

需要在 HTTPS 的基础上设置，只需要在 listen 后面添加即可~

```
 listen   443 ssl http2;
```





















