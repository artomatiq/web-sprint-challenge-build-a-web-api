const express = require('express');
const Actions = require('./actions/actions-router');
const Projects = require('./projects/projects-router');

const server = express();

server.use(express.json());

server.use('/api/projects', Projects);
server.use('/api/actions', Actions);

server.get('/', (req, res)=> {
    res.status(200).send(`<h1>Intro Page</h1>`)
})

server.use('*', (req, res)=>{
    res.status(404).json({
        message: `${req.method} ${req.baseUrl} not found`
    })
})

module.exports = server;
