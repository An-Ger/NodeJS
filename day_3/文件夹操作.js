const fs = require('fs')
const dirname = './adc'
// if(fs.existsSync(dirname)) {
//     fs.mkdir(dirname, err => {
//         console.log(err);
//     })
// }
// fs.readdir(dirname, (err, files) => {
//     console.log(files);
// })
function getFiles(dirname) {
    fs.readdir(dirname, {withFileTypes: true},(err, files) => {
        for(let file of files) {
            if(file.isDirectory()) {
                const filepath = path.resolve(dirname, file.name);
                getFiles(filepath);
            }
            else {
            console.log(file.name);
            }
        }
    })
}
getFiles(dirname)
fs.rename('./test', './adc', err => console.log(err))