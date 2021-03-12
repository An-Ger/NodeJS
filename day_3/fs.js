const fs = require('fs');
// tong bu 
const filepath = "./path.js";
const info = fs.statSync(filepath)
console.log("the next");
console.log(info);

fs.stat(filepath, (err, info) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(info);
})
fs.promises.stat(filepath).then(
    info => console.log(info),
    err => console.log(err)
)