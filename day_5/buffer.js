const mes = " hello world";
const buffer = new Buffer(mes);
console.log(buffer);
console.log(buffer.toString());

const b2 = Buffer.alloc(8)
console.log(b2);
b2 [0] = 88;
console.log(b2);