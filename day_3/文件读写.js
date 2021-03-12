const fs = require('fs');
const content = 'hello node'
fs.writeFile('./ad.txt', content, err => console.log(err))
fs.readFile("./ad.txt", {encoding: 'utf-8'},(err, data) => console.log(data))