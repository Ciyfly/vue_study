
const fs = require('fs')


function getFileBypath(fpath){
    // 异步读文件的方法
    return new Promise(function(resolve, reject){
        fs.readFile(fpath, 'utf-8', (err, dataStr)=>{
            
            if (err) return reject(err)

            resolve(dataStr)
        })
    })

}

// 通过.then 指定的回调函数 成功的必须写 失败的可以省略不写

// 如果前面的promise执行失败 不想让后续的promise被终止
//  可以为每个promise指定失败的回调
getFileBypath('./21.txt').then(function(dataStr){ // 这样then 后两个参数 第一个函数及时 resolve 第二个是reject
    console.log(dataStr)
    
    return getFileBypath('./2.txt')
    
// }, function(err){    // 一定要注意要写异常的情况  防止中断后续的执行 !!!
//     if (err){
//         console.log(err)
//         return getFileBypath('./2.txt')
//     }
}).then(function(dataStr){
    console.log(dataStr)

    return getFileBypath('./3.txt')
}).then(function(dataStr){
    console.log(dataStr)
}).catch(function(err){
    console.log("catch"+err)
    // 如果前面有任何的 promise则终止后续的promise 然后执行 catch抛出的异常
})

//  这里直接在 thrn的成功回调函数中返回新的 promise的实例可以继续使用 .then来处理
