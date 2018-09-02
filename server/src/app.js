console.log('Server started')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const { sequelize } = require('./models')
const config = require('../../config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// Models
var models = require('../server/models')

// Sync Database
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')
  app.listen(process.env.PORT || 8081)
  console.log(`Server started on port ${config.port}`)
}).catch(function (err) {
  console.log(err, 'Something went wrong with the Database Update!')
})
