const Sequelize = require('sequelize')
const db = require('../_db')

const Repository = db.define('repository', {
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    get() {
      const url = this.getDataValue('url')
      return url.slice('https://github.com/JonARea/'.length)
    },
  }
})


module.exports = Repository

