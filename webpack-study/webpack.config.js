//这个配置文件就是一个js文件 通过node 中的模块操作 向外暴露了一个配置对象
const path = require('path')
module.exports = {
    // 指定入口和出口
    entry: path.join(__dirname, './src/index.js'),//入口 表示要使用webpack打包哪个文件
    output: {
        path: path.join(__dirname, './dist'), //指定输出目录
        filename: 'main.js'  //指定输出文件的名称
    }
}