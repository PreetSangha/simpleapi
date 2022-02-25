
const dotenv = require('dotenv');
dotenv.config(); 

const express = require("express");

const app = express();


app.get("/", (request, response) => {
    response
    .send('Home Page - default text');
});

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`express server listening on port ${port} `);
});