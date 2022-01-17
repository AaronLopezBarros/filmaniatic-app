//VARIABLES
const express = require("express")
const logger  = require("morgan")

//MIDDLEWARE CONFIGURATION
module.exports = (app) => {
    app.set("trust proxy", 1)
    
    app.use(logger("dev"))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
}