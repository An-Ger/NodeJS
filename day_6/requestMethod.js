const http = require('http')
const url = require('url')
const qs = require('querystring')
const server = http.createServer((req, res) => {
    const {pathname} = url.parse(req.url);
    if(pathname === '/login') {
        if(req.method === 'POST') {
            //拿到body数据
            req.on('data', data => {
                const {username, password} = JSON.parse(data)
                console.log(username, password);
            })
            res.end("hello world")
        }
    }
    else res.end("url??sdsd???")
})
server.listen(8001, () => {
    console.log("seccc");
})