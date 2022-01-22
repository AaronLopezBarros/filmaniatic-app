//VARIABLES
const express      = require("express")
const router       = express.Router()
const authServices = require('../services/auth.services')

const { isAuthenticated } = require('./../middleware/jwt.middleware')

//ROUTES
router.post('/signup', authServices.signUp)
router.post('/login', authServices.logIn)
router.get('verify',isAuthenticated, authServices.verify)

module.exports = router
