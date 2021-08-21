require("dotenv").config();
const express = require("express");
const logger = require("./logger/index");
const app = express();

app.unsubscribe(express.json());

const port = process.env.PORT || 4000;
app.listen(port, () => {
    logger.info(`Server is running on port: ${port}`);
});