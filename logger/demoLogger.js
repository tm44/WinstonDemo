const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myCustomFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
})

const demoLogger = () => {
    return createLogger({
        level: "debug",
        format: combine(timestamp({ format: "HH:mm:ss" }), myCustomFormat), //format.json(),
        transports: [
            new transports.File({ filename: "error.log", level: "error"}),
            new transports.File({ filename: "combined.log "})
        ]
    })
}

module.exports = demoLogger;