const koa = require('koa')
const app = new koa();
const userRouter = require('./router')
app.use((ctx, next) => {
    next();
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
// app.use((ctx, next) => {
//     ctx.response.body = "hello world"
// })
app.listen(8888, () => {
    console.log('start');
})