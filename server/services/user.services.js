
//SERVICES
const addMovie = async (req, res) => {



    try {
        res.json('ok')
    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {addMovie}