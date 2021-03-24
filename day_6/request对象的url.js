const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  // if(req.url === '/login') {
  //     res.end("欢迎回来")
  // }else if(req.url === '/users') {
  //     res.end("用户列表")
  // }else {
  //     res.end("错误请求")
  // }
  const { pathname, query } = url.parse(req.url);
  if (pathname === "/login") {
    console.log(query);
    const { username, password } = qs.parse(query);
    console.log(username, password);
    res.end("请求结果");
  }
  // console.log(req.url);
  // res.end('请求结果')
});
server.listen(8888, () => {
  console.log("seccc");
});
