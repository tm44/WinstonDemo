const simpleDemoLogger = require("./simpleDemoLogger");
const amazingDemoLogger = require("./amazingDemoLogger");
const productionLogger = require("./productionLogger");
require("dotenv").config();

let logger = null;

if (process.env.LOG_TYPE === "simple") {
    logger = simpleDemoLogger();
}

else if (process.env.LOG_TYPE === "amazing") {
    logger = amazingDemoLogger();
}

else {
    logger = productionLogger();
}

module.exports = logger;