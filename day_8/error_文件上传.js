const http = require('http')
const server = http.createServer( (res, req) => {
    if(req.url === '/upload') {
        if(req.method === 'POST') {
            const fileWriter = fs.createWriteStream('./foo.png',{flags: 's'})
            req.on('data', data => {
                console.log(data);
            })
            req.on('end', () => {
                console.log('file success');
            })
        }
    }
})
server.listen(8000, () => {
    console.log('file success');
})