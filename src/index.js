// see https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module
// for details of why version 5 of chalk need more setup than this require
const chalk = require("chalk");

const dotenv = require('dotenv');
dotenv.config(); 

const express = require("express");
const app = express();


app.get("/*", (request, response) => {
    
    logRequest(request);

    response.send('Home Page - default text');
});



app.post("/", (request, response) => {
    
    logRequest(request);

    response.send('Home Page - default text');
});

app.post("/write", (request, response) => {
    
    logRequest(request);

    response.send('Home Page - default text');
});

app.post('/event', ()  => {
    
    logRequest(request);

    response.send('Home Page - default text');
});

// Handle any other request
    // app.use((req, res, next) => {
    //   logRequest(request);
    // //     const error = Error("Not found");
    // //   error.statusCode = 404;
    // //   next(error);
    // });

function logRequest(request, verbose = false) {

    console.log(chalk.blueBright(new Date().toLocaleString() + " path: " + request.originalUrl))
    if(verbose) {
        console.log(request)
    }
    else
    {
        // console.log('headers');
        // console.log(request.headers);
        console.log(`parameters ${request.parameters}`);
        console.log(`body ${request.body}`);
    }
}

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