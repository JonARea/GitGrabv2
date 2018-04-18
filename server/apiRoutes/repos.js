const router = require('express').Router()
const {Repository} = require('../db/models')

router.get('/', (req, res, next) => {
  Repository.findAll({
    where: {
      accountId: 1
    }
  })
    .then(Repositories => res.status(200).send(Repositories))
    .catch(next)
})

module.exports = router
