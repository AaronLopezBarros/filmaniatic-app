//MIDDLEWARE FOR .ENV
require('dotenv/config')

//IMPORT MONGO CONNECTION
require('./db/index')

//VARIABLES
const express       = require('express')
const app           = express()
const authRoutes    = require('./routes/auth.routes')
const moviesRoutes  = require('./routes/movies.routes')
const userRoutes    = require('./routes/user.routes')

//IMPORT CONFIG
require("./config")(app)

//ROUTES
app.use("/api/auth", authRoutes)
app.use("/api", moviesRoutes)
app.use("/api", userRoutes)

module.exports = app