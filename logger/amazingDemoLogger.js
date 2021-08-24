const winston = require("winston");

const amazingDemoLogger = () => {

    return winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.simple()
                )
            }),
            new winston.transports.File({
                    filename: "error.log",
                    level: "error",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.align(),
                        winston.format.printf(info => `${info.timestamp} [${info.level}] ${info.message}`)
                      ),
                }),

        ]
    })
}

module.exports = amazingDemoLogger;