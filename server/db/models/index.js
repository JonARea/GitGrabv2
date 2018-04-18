const db = require('../_db')
const User = require('./User')
const Account = require('./Account')
const Repository = require('./Repository')

User.hasMany(Account)
Account.hasMany(Repository)

module.exports = {
  db,
  User,
  Account,
  Repository
}
