var path = require('path')

// 在内存中根据指定的模板页面生成一份内存中的首页, 同时把打包好的js注入
var htmlWwebpackPlugin = require('html-webpack-plugin')

//当以命令行形式运行webpack或者webpack-dev-server 的时候 工具会发现 我们并没有提供要打包的文件的入口和出文件
// 此时会检查项目根目录中的配置文件,并读取配置文件, 就拿到了导出的这个配置对象 根据这个对象进行打包构建
module.exports ={
    entry: path.join(__dirname, './src/index.js'),
    output:{
        path: path.join(__dirname, './dist'),
        filename:'main.js' //指定输出文件的名称
        
    },
    plugins:[ // 所有webpack插件的节点
        new htmlWwebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module:{ // 批注所有第三方模块loader模块
        rules: [// 第三方模块的匹配规则
            {test:/\.css$/, use: ['style-loader', 'css-loader']},
            // 处理图片路径的loader  url-loader file-loader
            // url-loader 可以增加参数 limit 参数 设置 大于或者等于这个limit的图片不进行base64编码
            // 小于这个limit就进行base64编码 
            // 每次修改了配置文件要重写运行 npm run dev 不然没有用
            // name参数 设置打包好的图片叫什么 设置为 [name].[ext] 表示使用原来的名字和原来的后缀
            // 打包的时候如果图片名字一样打包到根目录就覆盖了,所有最好不改.
            // 但是这里可以将图片的 hash 加上图片的文件名 [hash:8]-[name].[ext] 8位hash值
            {test: /\.(jpg|png|gif|bmp|jpeg)/, use: 'url-loader?limit=20480&name=[hash:8]-[name].[ext]'},
            // 字体也要写引入 这里bootstrap会引入字体所以要写
            {test: /\.(ttf|eot|svg|woff|woff2)/, use: 'url-loader'}
            
        ]
    }
}

