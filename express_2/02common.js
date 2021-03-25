const express = require('express')
const app = express();

//use方式注册一个中间件
app.use((req, res, next) => {
    console.log('第一个普通中间件');
    res.end("hello world")
    next();
})
app.use((req, res, next) => {
    console.log('第2个普通中间件');
    // res.end("hello world222")
})

app.listen(8000, () => {
    console.log('success');
})