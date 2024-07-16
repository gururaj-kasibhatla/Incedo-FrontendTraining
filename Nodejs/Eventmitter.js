var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('FirstEvent', (msg) => {
    console.log(msg);
});

eventEmitter.emit('FirstEvent', 'event called');
