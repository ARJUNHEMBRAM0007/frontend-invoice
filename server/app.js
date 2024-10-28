require('dotenv').config({ path: './.env-dev' })  // Dev Env.
// require('dotenv').config({ path: './.env' })  // Prod Env.

const fs = require('fs-extra')
const express = require('express')  // Express webserver
const morgan = require('morgan')  // Morgan logger
const cors = require('cors') // Cors
const bodyParser = require('body-parser') // Body parser
const useragent = require('express-useragent') // Express user agent
const app = express() // Express

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json({ limit: '1GB' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(useragent.express())

// Create required directories
fs.ensureDirSync('tmp')
fs.ensureDirSync('logs')
fs.ensureDirSync('uploads/invoices')

// Connect database
require('./database')()

// Inlcude routes
require('./routes')(app)

// Cron
if (process.env.RUN_CRON == 1) {
  require('./crons')
}

// Error handling
app.use((err, req, res, next) => {

  console.error(err)

  fs.appendFileSync('logs/api-errors.log', `${new Date()} - ${JSON.stringify(err)}\n`)

  err.status = err.status || 500

  res.status(err.status).json({
    result: 'error',
    message: err.message
  })

})

app.listen(process.env.PORT, () => {
  console.log('[HOSTOMY] Server started at port ' + process.env.PORT)
})