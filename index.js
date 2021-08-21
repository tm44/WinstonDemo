const logger = require("./logger/index");

const rightNow = new Date();

logger.debug("This is debug info.");
logger.info("This is info.");
logger.warn("This is a warning.");
logger.error(`This is an error happening around ${rightNow.toDateString()} at ${rightNow.toLocaleTimeString()}`);
logger.silly("This is not necessary and you'd probably rarely see it");