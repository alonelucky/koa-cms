# koa-cms
个人习惯积累,简单的CMS,用于免除大量重复的操作

<img width="100" height="100" src="/public/koa-cms.jpg" />
<img width="100" height="100" src="/public/koa-cms.png" />

#### 0. 运行环境
```
node v8.x
mysql 5.7.x
redis 3.x
```
#### 1. 项目使用

	git clone https://github.com/xiaqiubo/koa-cms.git

	// 安装生产环境依赖
	npm install --production

	// 复制config.example.js为config.js
	对照内容修改配置

	npm start / pm2 start index.js

	// 二次开发
	npm install (增加一个项目依赖supervisor,用于生产环境项目自启动)

	npm run dev


