const router = require('express').Router()
const {Account} = require('../db/models')

router.get('/', (req, res, next) => {
  Account.findAll({
    where: {
      userId: req.params.userID
    }
  })
    .then(accounts => accounts.map(account => account.sanitize()))
    .then(accounts => res.status(200).send(accounts))
    .catch(next)
})

module.exports = router
