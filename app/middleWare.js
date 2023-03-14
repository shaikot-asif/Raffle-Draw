const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


const middleware = ([
    morgan('dev'),
    cors(),
    express.json(),
])

module.exports = middleware

