const winston = require("winston");

const simpleDemoLogger = () => {
    return winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console()
        ]
    })
}

module.exports = simpleDemoLogger;