// see https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module
// for details of why version 5 of chalk need more setup than this require
const chalk = require("chalk");

const dotenv = require('dotenv');
dotenv.config(); 

const express = require("express");
const app = express();


app.get("/", (request, response) => {
    response
    .send('Home Page - default text');
});


function error (message) {
    console.log(chalk.red(message));
}

const port = process.env.SERVER_PORT;

if(port === undefined || port === null) {
    error("SERVER_PORT environment variable not found");
}

app.listen(port, () => {
    console.log(`express server listening on port http://localhost:${port} `);
});