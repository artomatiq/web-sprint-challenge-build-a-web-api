const Projects = require('./actions-model')

function validateId (req, res, next) {
    Projects.get(req.params.id)
        .then(item => {
            if (item) {
                res.project = item
                next()
            }
            else {
                res.status(404).json('project with given id not found')
            }    
        })
        .catch (next)    
}

function validateBody (req, res, next) {
    if (req.body.project_id && req.body.description && req.body.notes) {
        next();
    }
    else {
        res.status(400).json({
            message: 'name and description are required'
        })
    }
}

module.exports = {
    validateId,
    validateBody
}