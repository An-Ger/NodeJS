const koa = require("koa");
const app = new koa();

const bodyParser = require('koa-bodyparser')
app.use(bodyParser());
app.use((ctx, next) => {
    console.log(context.request.url);
    console.log(context.request.query);
    console.log(context.request.params);
    context.response.body = "hello"
})

app.listen(8888, () => {
  console.log("success");
});
