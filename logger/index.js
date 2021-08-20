const demoLogger = require("./demoLogger");
const productionLogger = require("./productionLogger");

let logger = null;

if (process.env.NODE_ENV === "demo") {
    logger = demoLogger();
}

if (process.env.NODE_ENV === "production") {
    logger = productionLogger();
}

module.exports = logger;