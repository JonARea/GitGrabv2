const Sequelize = require('sequelize')
const db = require('../_db')

const Account = db.define('account', {
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})



module.exports = Account
