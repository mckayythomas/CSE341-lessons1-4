const express = require("express");
var cors = require('cors')
require('express-async-errors')
const port = process.env.SERVER_PORT || 5000;
const mongodb = require('./db/connect');
const bodyParser = require('body-parser');
const app = express()
app.use(cors())

app
    .use(cors())
    .use(bodyParser.json())
    .use('/', require('./routes'))
    .use(function (err, req, res, next) {
        if (err) {
            const { message } = err
            console.log(message)
            return resJson(req, res, 5500, null, message, 3)
        }
    })


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});