const http = require('http')
const server1 = http.createServer((req ,res) => {
    res.write('success')
    res.end("server1")
})

const server2 = new http.Server((req, res) => {
    res.end("server2");
});

//启动服务器
server2.listen(8001, () => {
    console.log('server1');
})
