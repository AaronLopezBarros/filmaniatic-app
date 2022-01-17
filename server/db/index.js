//VARIABLES
const mongoose = require("mongoose")

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/filmaniatic-app"

//MONGOOSE CONNECT
const connectToMongo = async () => {
    try{
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to Mongo')
    } catch(err){
        console.log('Error:', err)
    }
}

connectToMongo()