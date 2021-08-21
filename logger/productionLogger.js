const winston = require("winston");
require("winston-mongodb");

const productionLogger = () => {
    return winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.MongoDB({
                db: 'mongodb+srv://mike:d5E5Sb!A9biSEPv@cluster0.ogz5o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                collection: "DemoLog",
                options: { useUnifiedTopology: true, }
            })
        ]
    })
}

module.exports = productionLogger;