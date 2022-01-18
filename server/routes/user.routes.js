//VARIABLES
const express      = require("express")
const router       = express.Router()
const userServices = require('./../services/user.services')

//ROUTES
router.put('/add/:enum/:id', userServices.addMovie)

module.exports = router