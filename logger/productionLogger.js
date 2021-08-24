const winston = require("winston");
require("winston-mongodb");

const productionLogger = () => {
    return winston.createLogger({
        transports: [
            new winston.transports.MongoDB({
                db: 'mongodb+srv://mike:d5E5Sb!A9biSEPv@cluster0.ogz5o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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