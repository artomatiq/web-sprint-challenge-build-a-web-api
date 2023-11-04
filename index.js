const express = require('express');
const server = require('./api/server');

const PORT = process.env.PORT;

server.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})