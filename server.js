//JS module
const express = require('express');

//Routers

//Server is Express
const server = express();

//Middleware
server.use(express.json());

//Routing Points

//Base Display Page
server.get('/', (req, res) => {
    res.send(`<h1>Projects and Actions API</h1>`);
});

//Export
module.exports = server;