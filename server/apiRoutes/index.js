const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/users', require('./users'))


//handle unkown uri
router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
