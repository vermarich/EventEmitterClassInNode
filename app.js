const Logger = require('./logger'); //Logger is a class
const logger = new Logger(); //logger is an object of Logger class

//Register a listener. Listener must be registered before an event is triggered because only registered listeners are called at the trigger of an event
logger.on("messageLogged", (arg) => {
    console.log("Event listener called ", arg);
})

logger.log("Hey there ! Be there !");


