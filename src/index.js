const express = require("express");

const app = express();

const port = 3000;

app.get("/", (request, response) => {
    response
    .json('Home Page - default text');
});

app.listen(port, () => {
    console.log(`express server listening on port ${port} `)
});