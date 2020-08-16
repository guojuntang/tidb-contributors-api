# TiDB-Contributors-api

## 1. 简介
获取 [TiDB](https://github.com/pingcap/tidb)的代码贡献者们的数据API，配合该[Repo](https://github.com/guojuntang/tidb-contributors-web)使用\
该脚本通过在后端添加Github Authorization Token来对数据进行抓取

## 2. 部署 
安装依赖
```
npm install
```
### 2.1 通过[expressjs](https://expressjs.com/)进行架设
在部署时需要通过设定环境变量来设置Github API Token，例如在项目的根目录下创建.env文件并添加
```
GITHUB_TOKEN=[your api token]
```
运行
```
npm run start 
```
### 2.2 部署到Vercel上
同时，也可以直接部署到[Vercel](https://vercel.com/)上(免费，而且在中国大陆连接的速度也比较舒服)
在Vercel中提供了serverless Function,让我们即使没有服务器也能部署后端服务\
在Express项目中，我们只需要把路由改写到项目的'/api'目录下面即可完成迁移，具体详见该[教程](https://vercel.com/guides/migrate-to-vercel)(同样部署时需要设置环境变量GITHUB_TOKEN，可通过Vercel的平台完成)


## 3. 测试
```
npm run test
```
