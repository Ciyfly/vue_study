// index.js是项目的js入口文件


// 1.导入jquery
// // 由于es6的代码太高级了 浏览器解析不了,所以这样写会有问题
import $ from 'jquery' //  导入jquery用$接收  这个是es6导入其他模块的语法
// webpack index.js bundle.js 这样执行 webpack 
// webpack 4版本的很多问题我看的这个解决的 https://blog.csdn.net/u012443286/article/details/79504289
// 使用 wbepack只需要导入一个js就可以了
// webpack能够处理js的兼容问题, 让高级浏览器不识别的语法转为低级的浏览器识别的语法
// 还可以使用配置文件的形式  webpack.config.js 直接输入 webpack就可以了


// 使用 import导入语法导入css样式表
import './css/index.css'
// 注意 webpack 默认只能打包处理 js类型的文件 无法处理其他非js类型的文件
// 如果要处理非js类型的文件 我们需要手动安装一些合适的第三方loader 加载器
// 1.如果想要打包处理css文件 需要 安装 npm i style-loader css-loader -D
// 2.打开 webpack.confg.js 在里面新增一个配置节点 叫做 module 他是一个对象 在这个module 对象
// 上有个rules属性 这个rules属性是个数组 这个数组中存放了所有第三方文件的匹配和处理规则 test属性 正则 use 使用哪个规则


import './css/index.less'
// 导入less 的样式 需要安装 less-loader 这个是依赖 less的 这里less是less-loader依赖的

$(function(){
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D97634'
    })
})

// 使用 webpack-dev-server实现 自动打包编译的功能
// npm i webpack-dev-server -D 把这个工具安装到项目本地
// 这个工具的用法与webpack完全一样
// 由于是在项目本地安装 webpack-dev-server 所有无法把他当做脚本命令在终端中直接运行
// webpack-dev-server 如果要正常使用本地项目中安装 webpack 即要 npm i webpack -D 而且还要安装 webpack-cli

 


