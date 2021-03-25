const http = require('http')
// http.get('http://localhost:8888', res => {
// res.on('data', data => {
//     console.log(data.toString());
// })
// res.on('end', () => {
//     console.log('all res');
// })
// })
// Get 请求
http.request({
    metthod: 'POST',
    hostname: 'localhost',
    port: 8888
}, res => {
    res.on('data', data => {
    console.log(data.toString());
})
res.on('end', () => {
    console.log('all res');
})

}).end();