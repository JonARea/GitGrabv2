const router = require('express').Router()
const {Repository} = require('../db/models')

router.get('/:accountID/repos', (req, res, next) => {
  Repository.findAll({
    where: {
      accountID: req.params.accountID
    }
  })
    .then(Repositories => Repositories.map(Repository => Repository.sanitize()))
    .then(Repositories => res.status(200).send(Repositories))
    .catch(next)
})

module.exports = router
