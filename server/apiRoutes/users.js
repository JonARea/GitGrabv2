const router = require('express').Router()
const {User} = require('../db/models')

router.use('/:userID/accounts', require('./accounts'))
router.use('/:userID/repos', require('./repos'))

router.get('/:userID', (req, res, next) => {
  User.findById(req.params.userID)
    .then(user => user.sanitize())
    .then(user => res.status(200).send(user))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user.sanitize()))
    .catch(next)
})

module.exports = router
