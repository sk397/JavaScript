//Using the Logger Class

const Logger = require('./3. Three_Logger')

const logger = new Logger ();

// Here 'message' is the event and next is the function that has to be executed to that event
logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World')
logger.log('Hi')
logger.log('Hey')