const koa = require('koa')
const app = new koa();
app.use((context, next) => {
    
})
app.listen(8888, () => {
    console.log('success');
})