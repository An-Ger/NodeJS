const http = require('http')
const url = require('url')
const qs = require('querystring')
const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url)
    if(req.url === '/login') {
        console.log(query);
        const {username, password} = qs.parse(query)
        console.log(username, password);
        res.end("welcome")
    }
    console.log(req.url);
    res.end("url")
})
server.listen(8888, () => {
    console.log("seccc");
})