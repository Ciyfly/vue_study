//这个配置文件就是一个js文件 通过node 中的模块操作 向外暴露了一个配置对象
const path = require('path')
// 启用热更新的第二步
const webpack = require('webpack')

// 导入在内存中生成 html的插件 
// 只要是插件就一定要放到 plugins节点中去
// 这个插件的两个作用:
// 1.自动在内存中根据自动页面生成一个内存的页面
// 2.自动把打包好的 main.js 追加到页面中去


const htmlWbepackPlugin = require('html-webpack-plugin')

module.exports = {
    // 指定入口和出口
    entry: path.join(__dirname, './src/index.js'),//入口 表示要使用webpack打包哪个文件
    output: {
        path: path.join(__dirname, './dist'), //指定输出目录
        filename: 'main.js'  //指定输出文件的名称
    },

    devServer:{ //这是接着 dev-server 命令参数的第二种形式,相对来说这种方式麻烦一些
        // --open --port 8000 --contentBase src
        open: true, // 自动打开浏览器
        port: 8000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true   // 启动热更新的第一步,第二步需要导入webpack, 第三部需要 下面的plugis


    },
    plugins:[ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(),  // new 一个热更新的模块对象, 这是启用热更新的第三步
        new htmlWbepackPlugin({// 创建一个在内存中生成 html页面的插件 
            template: path.join(__dirname, './src/index.html'), // 指定模板页面,将来会根据指定的页面路径,去生成内存中的页面
            filename: 'index.html' // 指定生成的页面的名称
        }) 
    ],
    module:{ //这个节点用于配置所有的第三方模块加载器
        rules:[ // 所有第三方模块的匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // test是正则的意思
            // 配置处理点css文件的第三方loader规则
            // 注意 这里处理的顺序是 从右到左 即 先css-loader处理后生成的传递给 style-loader在处理
            // 然后将样式就返回了。将结果返回给webpack进行打包 最终输出到 main.js
            {test: /\.less/, use: ['style-loader', 'css-loader', 'less-loader']}
            // 这是处理.less文件的第三方规则
        ]
    }
}