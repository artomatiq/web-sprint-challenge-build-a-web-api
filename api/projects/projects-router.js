const express = require('express')
const Projects = require('./projects-model')
const {validateId, validateBody} = require('./projects-middleware')

const router = express.Router();

router.get('/', (req, res, next)=> {
    Projects.get()
        .then(items => {
            res.status(200).json(items)
        })
        .catch(next)
})

router.get('/:id', validateId, (req, res, next)=> {
    res.status(200).json(res.project)
})

router.post('/', validateBody, (req, res, next)=> {
    Projects.insert(req.body)
        .then(item => {
            res.status(201).json(item)  
        })
        .catch(next)
})

router.use((error, req, res, next)=>{
    res.status(error. status || 500).json({
        message: error.message || 'error in the Projects router',
        stack: error.sstack
    })
})

module.exports = router;