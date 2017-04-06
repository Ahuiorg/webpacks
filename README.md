# webpacks
> webpack study
> great 20160330


## 安装
1. 在nodo环境下执行 npm install webpack -g 全局安装webpack
2. 新建自己项目文件夹，在文件夹里生成或者新建一个package.json
    *   执行 npm init，node会自己生成一个package.json文件
    *   执行npm install webpack --save-dev，会在局部安装好webpack,并将webpack添加到项目的依赖

## 用命令行直接打包文件
> webpack ./src/index.js ./dist/bundle.js
> webpack 后的第一个参数表示要打包的文件及所在的目录，
> 第二个参数表示打包后的文件保存在哪个目录跟文件名称
> 后面还可以跟更多的参数

1. 新建目录src,用来放项目的源代码
2. 在src目录新建index.js跟hello.js文件