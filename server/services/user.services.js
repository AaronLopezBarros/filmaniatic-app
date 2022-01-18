
//SERVICES
const addMovie = async (req, res) => {
    try {
        console.log('ok')
    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {addMovie}