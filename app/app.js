require('dotenv').config('./.env')
const express = require('express')
const app = express()

const {notFountHandeler,errorHandeler} = require('./error')
app.use(require('./middleWare'))
app.use(require('./routes'))
app.use(notFountHandeler)
app.use(errorHandeler)

module.exports = app
