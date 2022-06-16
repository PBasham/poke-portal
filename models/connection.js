/*========================================
        Import Dependencies
========================================*/
require("dotenv").config()
const mongoose = require("mongoose")
/*========================================
        Database Connection
========================================*/
// Connection to Atlas
const MONGODB_URI = process.env.MONGODB_URI
const CONFIG = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
}

mongoose.connect(MONGODB_URI, CONFIG) // Establish connection to database

// // Connection to local MongoDB
// const DATABASE_URL = process.env.DATABASE_URL
// const CONFIG = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }

// mongoose.connect(DATABASE_URL, CONFIG) // Establish connection to database


mongoose.connection // Events for when connection opens / disconnects / errors
// .on("open", () => console.log("Connected to Mongoose"))
.on('connected', () =>
        console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`))
.on('close', () =>
        console.log(`Disconnected from ${mongoose.connection.host}:${mongoose.connection.port}`))
// .on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))
/*========================================
        Export Modules
========================================*/
module.exports = mongoose