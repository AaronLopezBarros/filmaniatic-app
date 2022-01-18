//VARIABLES
const express      = require("express")
const router       = express.Router()
const authServices = require('../services/movies.services')

//ROUTES
router.get('/popular/movies', authServices.popularMovies)
router.post('/search/movie', authServices.searchMovie )

module.exports = router