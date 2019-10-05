const Logger = require('./logger');
const logger = new Logger();

//Register a listener. Listener must be registered before an event is triggered because only registered listeners are called at the trigger of an event
logger.on("messageLogged", (arg) => {
    console.log("Event listener called ", arg);
})

logger.log("Hey there ! Be there !");


