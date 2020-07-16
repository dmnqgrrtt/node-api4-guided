const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

server.get("/", (req,res)=>{
    res.send(`
        <h1>Welcome to Dom's API<h1>
    `);
})

module.exports = server;
