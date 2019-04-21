// 需求: 你要封装一个方法,　我给你一个要读取文件的路径, 你这个方法能帮我读取文件, 并把内容返回给我

const fs = require('fs')
const path  = require('path')

// fs.readFile(path.join(__dirname, './1.txt'), 'utf-8', (err, dataStr)=>{
//     if(err) throw err

//     console.log(dataStr)
// })

// 这里因为是异步的, 直接执行是不会按正常的流程执行,所以这里要使用回调函数来实现 值的返回

// 我们可以规定一下,callback 中 有两个参数 第一个参数是失败的结果 第二个参数是成功的结果

// 同时 我们规定 如果成功后 返回的结果应该位于callbacl参数的第二个位置 此时 第一个位置由于没有
// 出错 所以放置一个null 如果失败了 则第一个位置放置err对象
function getFileBypath(fpath, callback){
    // 异步读文件的方法
    fs.readFile(fpath, 'utf-8', (err, dataStr)=>{
        // 如果报错 后续代码就不用执行了
        if(err) return callback(err)
         
        callback(null, dataStr)
    })
}

getFileBypath(path.join(__dirname, './1.txt'), (err, dataStr)=>{
    if (err) return console.log(err)
    console.log(dataStr)
})
