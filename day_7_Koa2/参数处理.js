const koa = require("koa");
const app = new koa();
const Router = require("koa-router");
const userRouter = new Router({ prefix: "/users" });
userRouter.get("/:id", (ctx, next) => {
  console.log(ctx.response.params);
  console.log(ctx.response.query);
});
// app.use((context, next) => {
//     console.log(context.request.url);
//     console.log(context.request.query);
//     console.log(context.request.params);
//     context.response.body = "hello"
// })
app.use(userRouter.routes())
app.listen(8888, () => {
  console.log("success");
});
