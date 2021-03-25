const express = require('express')
//express其实是一个函数
//返回app
const app = express();
//监听默认路径
app.get('/', (req, res, next) => {
    res.end("Hello express")
})
app.post('/', (req, res, next) => {
    res.end("Hello express")
})
app.post('/login', (req, res, next) => {
    res.end("welcome back")
})
app.listen(8000, () => {
    console.log('succcees');
})