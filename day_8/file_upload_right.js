const http = require('http')
const server = http.createServer( (res, req) => {
    if(req.url === '/upload') {
        if(req.method === 'POST') {
            let body = ''
            req.on('data', data => {
                body += data;
            })
            req.on('end', () => {
                console.log(body);
                console.log('file success');
                res.end('file upload success')
            })
        }
    }
})
server.listen(8000, () => {
    console.log('file success');
})