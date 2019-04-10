
import './css/index.css'

// 如果要通过路径的形式去引入 node_models中相关的文件, 可以直接省略路径见面的node_models
// 默认会去查找
import 'bootstrap/dist/css/bootstrap.css'

// class关键字,是es6中提供的新语法，是用来实现 es6中面向对象编程的方式

class Persion{
    // 使用 static关键字可以定义静态属性
    // 所谓的静态属性就是可以直接通过类名 直接访问的属性
    // 实例属性, 只能通过类的实例 来访问的属性 叫做实例属性
    static info = {name: 'zs', age: 20}
}
console.log("ok")

// 访问Persion上的静态属性 
console.log(Persion.info.name)

// 在webpack中 默认只能处理一部分es6的新语法 一些更高级的es6语法或者es7语法 webpack处理不了
// 这时候需要借助于第三方loader 来帮助webpack 处理这些高级的语法, 当第三方loader把高级语法转为 低级的语法
// 会把结果交给webpack 去打包

// 通过 Babel 可以帮助我们将高级的语法转换为低级的语法
// 在webpack中可以运行如下两套命令 安装两套包 去安装Babel 相关的功能:
// 1.1第一套: npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2第二套: npm i babel-preset-env babel-preset-stage-0 -D
// 2.打开 webpack配置文件 在module节点下的rules数组中添加一个新的匹配规则:
// 2.1 {test: /\.js$/ , use: 'babel-loader', exclude:/node_modules/}
// 2.2 注意 exclude是排除的意思,将node_modules包下的都排除
// 3 在项目的根目录中新建一个 叫做 .babelrc 的配置文件 这个配置文件属于json格式, 一定要符合json语法规范
// 不能写注释 字符串必须使用双引号
// 3.1 配置文件写如下json 可以把presets翻译为语法
// {
//     "presets": ["env", "stage-0"],
//     "plugins": ["transform-runtime"]
// }