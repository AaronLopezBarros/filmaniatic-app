//VARIABLES
const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt    = require("jsonwebtoken")

//MODELS
const User = require('./../models/User.model')

module.exports = router
