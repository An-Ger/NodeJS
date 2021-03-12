const http = require("http");

const server = http.createServer((req, res) => {
  res.write("op");
  res.end("hello");
});
server.listen(8888, "0.0.0.0", () => {
  console.log("ssucceerrr");
});
