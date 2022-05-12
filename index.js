const express = require("express");
const consign = require("consign");
const database = require('./config/database')
const app = express();
const port = 3002;

app.use(express.json());
app.database = database;

consign()
    .then("./api")
    .then("./routes/routes.js")
    .into(app);

app.listen(port, "127.0.0.1");
