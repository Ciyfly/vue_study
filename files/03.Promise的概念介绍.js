// 1. Promise 是一构造函数  既然是构造函数 那么我们就可以 new Permise 一个对象
// 2. 在Promise上 有两个函数 分别叫 resolve(成功之后的回调函数) 和 reject(失败之后的回调函数)
// 3. 在 Promise 构造函数的 Prototype属性上 有一个 .then方法 也就是说 只要 是Promise 构造函数的方法创建的实例都可以方法 .then
// 4. 如果 Promise 表示一个异步操作,每当我们 new一个 Promise 的实例 这个实例就表示一个具体的异步操作
// 5. 既然 Promise创建的实例 是一个异步操作 那么 这个异步操作的结果 只能有两个状态 成功和失败,拿到结果无法return 
// 这里解决回调函数的形式把成功或失败的结果返回给调用者。也就是那 resolve 和reject 两个回调函数
// 6. 我们可以使用 .then 方法预先指定成功和失败的回调函数

const fs = require('fs')
// // new 得到一个 promise还会调用传入构造函数的方法 执行这个 传入函数的异步操作
// var promise = new Promise(function(){
//     // 具体异步操作
//     fs.readFile('./1.txt', 'utf-8', (err, dataStr)=>{
//         console.log(dataStr)
//     })

// })

function getFileBypath(fpath){
    // 异步读文件的方法
    return new Promise(function(resolve, reject){
        fs.readFile(fpath, 'utf-8', (err, dataStr)=>{
            
            if (err) return reject(err)

            resolve(dataStr)
        })
    })

}

getFileBypath('./1.txt').then(function(dataStr){ // 这样then 后两个参数 第一个函数及时 resolve 第二个是reject
    console.log(dataStr)
}, function(err){
    console.log(err)
})

// 执行顺序 1. 先方法, 创建 promise 并返回, 然后定义promise的then
