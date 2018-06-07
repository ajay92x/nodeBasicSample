var events = require('events');

var eventEmitter = new events.EventEmitter();

var funcVariable = function(){
	console.log('Start Screaming');
}

eventEmitter.on('scream', funcVariable);

eventEmitter.emit('scream');
