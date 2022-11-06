const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object - instance from the created class
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
