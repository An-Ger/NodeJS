console.log(process);
console.clear();
console.log(process.argv[2]);
process.argv.map(item => console.log(item))
console.trace();

console.log(__dirname);
console.log(__filename);
setTimeout(() => {
    console.log('timeout');
}, 500)
setImmediate( () => {
    console.log('iimediate');
})
const x = setInterval( () => {
    console.log('interval');
}, 500)
process.nextTick(() => {
    console.log('dida');
})
clearInterval(x);
console.log(global);