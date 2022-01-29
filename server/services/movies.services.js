//VARIABLES
const axios = require('axios')
const API_KEY = process.env.API_KEY

//SERVICES
const popularMovies = async (req, res) => {
    try {
        const axiosCall = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const popularMovies = axiosCall.data.results
        console.log('ok')
        res.status(200).json({popularMovies})
    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const searchMovie = async (req, res) => {
    
    const {search} = req.body

    try {
        const axiosCall = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
        const searchResults = axiosCall.data.results

        res.status(200).json({searchResults})
    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {popularMovies, searchMovie}