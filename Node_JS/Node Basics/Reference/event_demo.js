//Events in JS

const EventEmitter = require('events')

//Create class
class MyEmitter extends EventEmitter {}

//Init Object
const myEmitter = new MyEmitter();

//Event Listner
myEmitter.on('event', () => console.log('Event Executed'));

//Init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')


