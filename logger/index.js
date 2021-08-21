const simpleDemoLogger = require("./simpleDemoLogger");
const amazingDemo = require("./amazingDemoLogger");
const productionLogger = require("./productionLogger");
require("dotenv").config();

let logger = null;

if (process.env.LOG_TYPE === "simple") {
    logger = simpleDemoLogger();
}

else if (process.env.LOG_TYPE === "amazing") {
    logger = amazingDemo();
}

else {
    logger = productionLogger();
}

module.exports = logger;