const http = require('http')

const server = http.createServer((req ,res) => {
    res.statusCode = 400;
    res.writeHead(503)
    res.write("res 1")
    res.end("end");
})


//启动服务器
server.listen(8001, () => {
    console.log('server success');
})
