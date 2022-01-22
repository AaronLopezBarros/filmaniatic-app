//MODELS
const User = require('./../models/User.model')

//SERVICES
const addMovie = async (req, res) => {

    const { id, category } = req.params
    const { user } = req.body

    try {
        
    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {addMovie}