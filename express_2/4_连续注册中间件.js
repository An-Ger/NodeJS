const express = require('express')
const app = express();

app.use((req, res, next) => {
    console.log('普通中间件');
    next();
})

app.get("/home", (req, res, next) => {
    console.log("01");
    next();
}, (req, res, next) => {
    console.log("02");
    next();
}, (req, res,next ) => {
    console.log("03");
    res.end('end')
})

app.listen(8000, () => {
    console.log('success');
})