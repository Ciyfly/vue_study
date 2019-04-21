// 需求: 你要封装一个方法,　我给你一个要读取文件的路径, 你这个方法能帮我读取文件, 并把内容返回给我

const fs = require('fs')
const path  = require('path')


function getFileBypath(fpath, succCb, errCb){
    // 异步读文件的方法
    fs.readFile(fpath, 'utf-8', (err, dataStr)=>{
        // 如果报错 后续代码就不用执行了
        if(err) return errCb(err)
         
        succCb(dataStr)
    })
}

// getFileBypath(path.join(__dirname, './1.txt'), (err, dataStr)=>{
//     if (err) return console.log(err)
//     console.log(dataStr)
// })

// getFileBypath(path.join(__dirname, './1.txt'), function(data){
//     console.log(data)
// }, function(err){
//     console.log(err)
// })

// 需求 先读取文件1 再读取文件2 最后读取文件3

getFileBypath(path.join(__dirname, './1.txt'),function(data){
    console.log(data)

        getFileBypath(path.join(__dirname, './2.txt'),function(data){
            console.log(data)
                getFileBypath(path.join(__dirname, './3.txt'),function(data){
                    console.log(data)
                })
        })

})
// 这种代码叫回调地狱

// 使用 es6的Promise 来解决 回调地狱的问题
// Promise就是单纯的解决回调地狱的问题 并不能帮我们减少代码量
// 使用then这样
