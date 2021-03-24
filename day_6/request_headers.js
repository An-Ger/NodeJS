const http = require('http')

const server2 = new http.Server((req, res) => {
    console.log(req.headers);
    res.end("server2");
});

//启动服务器
server2.listen(8001, () => {
    console.log('server1');
})
