const Koa = require('koa')
const app = new Koa();
app.use((ctx, next) => {
    if(ctx.request.url === '/login') {
        if(ctx.request.method === 'GET') {
            ctx.response.body = "Login success"
        }
    }
    else {
        ctx.response.body = "Other"
    }
})
app.listen(8888, () => {
    console.log("succss");
})