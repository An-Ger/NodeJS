# NodeJS
NodeJS探究
Http 接收 解析 响应
中间件    执行上下文
Application  Context
Request  Response
Middlewares
Session Cookie


const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
    ctx.body = 'hi yorn'
})
app.listen(2333)

node传递参数
全局对象process，argv存储node所在路径，以及当前文件路径
使用node index.js code age=19，可以给argv传递参数

常见的全局对象：
__dirname当前文件所在绝对路径
__filename在绝对路径后拼接该文件名称
setTimeout参数设置为0，与setImmediate有区别，主要在于时间循环机制
global全局对象
使用commonJS进行模块化开发，本质就是对象的引用赋值，引用赋值即浅拷贝
在所有文件里面都有一个属性叫做module
真正负责导出模块的就是module.exports
使用exports修改指向，不会影响module.exports
commonJS要求导出一个exports，默认情况下exports和module.exports指向同一个地址
赋值是在顶层进行的

require首先查找文件X，然后是X.js，X.json,X.node
2.如果没有查找到文件，会将X视作一个目录
查找index.js,index.json,index.node
如果都没有查找到就会报错，not found

createServer本质就是new 一个 server 
