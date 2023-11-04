const express = require('express')
const Projects = require('./projects-model')
const Actions = require('../actions/actions-model')
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

router.put('/:id', validateBody, validateId, (req, res, next)=> {
    if (req.body.completed===undefined) {
        res.status(400).json()
    }
    Projects.update(req.params.id, req.body)
        .then (updatedProject => {
            res.status(200).json(updatedProject)
        }) 
        .catch(next)
})

router.delete('/:id', validateId, (req, res, next)=> {
    Projects.remove(req.params.id)
        .then (res.status(200).json()) 
        .catch(next)
})



router.use((error, req, res, next)=>{
    res.status(error. status || 500).json({
        message: error.message || 'error in the Projects router',
        stack: error.sstack
    })
})

router.get('/:id/actions', validateId, (req, res, next)=> {
    Projects.getProjectActions(req.params.id)
        .then (items=> {
            res.status(200).json(items)
        })
        .catch (next)
})

module.exports = router;