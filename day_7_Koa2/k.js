const koa = require('koa')
const app = new koa();
app.use((context, next) => {
    context.response.body = "hello world";
})
app.listen(8888, () => {
    console.log('success');
})