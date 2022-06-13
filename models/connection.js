/*========================================
        Import Dependencies
========================================*/
require("dotenv").config()
const mongoose = require("mongoose")
/*========================================
        Database Connection
========================================*/
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(DATABASE_URL, CONFIG) // Establish connection to database


mongoose.connection // Events for when connection opens / disconnects / errors
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))
/*========================================
        Export Modules
========================================*/
module.exports = mongoose