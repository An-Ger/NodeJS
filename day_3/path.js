const path = require('path');
const basePath = "/User/why";
const filename = "abc.txt";
// const path = basePath + "/" + filename;
const filePath = path.resolve(basePath, filename);
console.log(filePath);

const aPath = '/User/yzh/ac.txt';
console.log(path.dirname(aPath));
console.log(path.basename(aPath));
console.log(path.extname(aPath));

const a = 'User/yzh';
const b = 'op.txt';
const sum = path.join(a, b);
console.log(sum);

// resolev路径拼接
const sum2 = path.resolve(a, b);
console.log(sum2);