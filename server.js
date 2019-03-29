//JS module
const express = require('express');

//Routers
const projectRouter = require('./data/projects/project-router.js');

//(1)Server must be stated and then usage of server comes next, all using express
const server = express();

//(2)Middleware
server.use(express.json());

//(2)Routing Points
server.use('/api/projects', projectRouter);

//(2)Base Display Page
server.get('/', (req, res) => {
    res.send(`<h1>Projects and Actions API</h1>`);
});

//Export
module.exports = server;