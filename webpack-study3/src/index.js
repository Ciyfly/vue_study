console.log("ok")

// 如何在webpack构建项目中使用 vue进行开发
// 复习在普通网页中如何使用vue

//1. 使用script标签,引入vue的包
//2. 在index页面中创建一个id为app的div容器 
//3. 通过 new vue 得到一个vm的实例

// 在webpack中尝试使用 vue
// 注意 在webpack中 使用下面的语句导入的vue构造函数 功能不完整, 只提供了 runtime-only的方式
// 并没有提供像网页中那样的使用方式

// import Vue from 'vue' 
// 回顾包的查找规则:
// 1. 找项目根目录中有没有 node_modules的文件夹
// 2. 在node_modules 中根据包名找对应的文件夹
// 3. 在vue文件夹中找一个package.json配置文件
// 4. 在 package.json中查找mian属性 main属性指定了这个包在加载的时候的入口文件
// 可以看到 main属性是 vue.runtime.commone.js 而不是vue.js

// 那么换一种方式导入
//import Vue from '../node_modules/vue/dist/vue.js'   这种形式可以直接渲染
// 还可以写别名 在 webpack.config.js

import Vue from 'vue' 

// 导入login组件
import login from './login.vue'
// webpack默认不支持解析vue 这里我们需要第三方loader
// npm i vue-loader@14  vue-template-compiler@2.5.2 -D   注意这里的版本
// 配置文件中新增配置项

var vm = new Vue({
    el:'#app',
    data:{
        msg: "123"
    },
    // render:function(createElement){
    //     return createElement(login)
    // }
    // 可以简写为
    render: c => c(login)

})

// 总结 webpack中如何使用 vue 
// 1. 安装vue的包 npm i vue@2.5.2
// 2.由于在webpack中推荐使用.vue这个组件模板文件定义组件, 所以需要安装能解析vue文件的loader
// 3.npm i vue-loader@14  vue-template-compiler@2.5.2 -D
// 4. 在index.js中导入 vue模块 importVue from 'vue'
// 5. 定义一个 .vue的组件
// 6. 使用 import导入组件 import login from './login.ve'
// 7. 创建 vm实例 var vm = new Vue({})
// 8. 在页面中创建一个 id为app的div元素作为 我们的vm实例要控制的区域



// export default 
import m1 ,{title as test_title, debug} from './test.js'   // export 暴露的只能用花括号的形式来导入  多个的话就在花括号中继续添加
// 使用 export导出的成员 如果想改名可以使用 as 来起别名
console.log(m1.name)
console.log(test_title)
console.log(debug)
