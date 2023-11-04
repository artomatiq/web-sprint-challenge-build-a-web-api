const Projects = require('./projects-model')

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

module.exports = {
    validateId,
}
