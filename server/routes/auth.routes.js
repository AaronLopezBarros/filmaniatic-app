//VARIABLES
const express      = require("express")
const router       = express.Router()
const authServices = require('../services/auth.services')

//ROUTES
router.post('/signup', authServices.signUp)
router.post('/login', authServices.logIn)


module.exports = router
