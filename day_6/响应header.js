const http = require('http')

const server = http.createServer((req ,res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf8")
    res.end("Hello Server")
})


//启动服务器
server.listen(8001, () => {
    console.log('server success');
})
