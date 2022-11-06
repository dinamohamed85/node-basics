const EventEmitter = require('events');
const uuid = require('uuid');

class Click extends EventEmitter {
  press(msg) {
    // Call event
    this.emit('click', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const click = new Click();

click.on('click', data => console.log('Called Listener', data));

click.press('click 1');
click.press('click 2');
click.press('click 3');
