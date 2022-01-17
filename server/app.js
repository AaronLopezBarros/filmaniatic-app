//MIDDLEWARE FOR .ENV
require('dotenv/config')

//IMPORT MONGO CONNECTION
require('./db/index')

//VARIABLES
const express       = require('express')
const app           = express()
const authRoutes    = require('./routes/auth.routes')

//IMPORT CONFIG
require("./config")(app)

//ROUTES
app.use("/api", authRoutes)

module.exports = app