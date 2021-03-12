const EventEmitter = require('events')
const emitter = new EventEmitter();
emitter.on('click', args => console.log("1lick", args))
setTimeout(() => {
    emitter.emit('click', "coder", "kebi")
}, 2000)