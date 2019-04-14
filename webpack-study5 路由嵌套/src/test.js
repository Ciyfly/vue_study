// 这是 Node向外暴露成员的形式
// module.exports = {}

// 在node中使用 var 名称 = require('模块名')
//  module.exports 和 exports 来暴露成员



// 在ES6中也通过规范的形式,规定了ES6中如何导入和导出模块
// ES6 中导入模块使用 import 模块名称 from '模块包名'    import '模块包名'

// 在ES6中 使用 export default 和 export 向外暴露成员

export default {
    name :'test',
    age: 23
}


export var title = "Recar"
export var debug = "debug"

// export default暴露的可以 import 任意的名字 export default 只能返回一个 在一个模块中只能一个
// 在一个模块中可以使用 export default 和export 同时使用 


// 注意  使用 export 向外暴露的成员只能使用花括号的形式接收 这种形式叫做按需导出
// export 可以暴露多个  但是是按需导出的 {}  