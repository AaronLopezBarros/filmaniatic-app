//VARIABLES
const bcrypt       = require('bcrypt')
const jwt          = require("jsonwebtoken")

const saltRounds = 10

//MODELS
const User = require('./../models/User.model')

//SERVICES
const signUp = async (req, res) => {

    const { username, password } = req.body

    try {

        if (!username || !password) {
            res.status(400).json({ message: "Provide username and password" })
            return
        }

        const userExist = await User.findOne({ username })

        if(userExist) {
            res.status(400).json({ message: "User already exists." })
            return
        }

        const salt = bcrypt.genSaltSync(saltRounds)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const createUser = await User.create({ username, password: hashedPassword })

        res.status(200).json({msg: 'user created successfully', createUser})

    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const logIn = async (req, res) => {

    const { username, password } = req.body

    try {

        if(!username || !password) {
            res.status(400).json({ message: "Provide username and password" })
            return
        }

        const userExist = await User.findOne({ username })

        if(!userExist) {
            res.status(401).json({ message: "User not found." })
            return
        }
        
        const passwordCorrect = bcrypt.compareSync(password, userExist.password)

        if(passwordCorrect) {

            const { _id, username } = userExist;

            const payload = { _id, username }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                { algorithm: 'HS256', expiresIn: "6h" }
            )

            res.status(200).json({ authToken: authToken })
        } else { 
            res.status(401).json({ message: "Incorrect password" })
        }

    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {signUp, logIn}