const express = require('express')
const Projects = require('./projects-model')

const router = express.Router();

router.use((error, req, res, next)=>{
    res.status(error. status || 500).json({
        message: error.message || 'error in the Projects router',
        stack: error.sstack
    })
})

module.exports = router;