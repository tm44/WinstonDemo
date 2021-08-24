const winston = require("winston");
require("winston-mongodb");
require("dotenv").config();

// See more on why process seems to hang when using the winston-mongodb transport:
// https://github.com/winstonjs/winston-mongodb/issues/51

const productionLogger = () => {
    return winston.createLogger({
        transports: [
            new winston.transports.MongoDB({
                db: process.env.MONGODB,
                collection: "DemoLog",
                level: "error",
                options: { 
                    useUnifiedTopology: true,
                 }
            })
        ]
    })
}

module.exports = productionLogger;