/*========================================
        Require Dependencies
========================================*/
const mongoose= require("./connection.js");

/*========================================
        Set up Schema and Model
========================================*/
const { Schema, model } = mongoose

const userSchema = new Schema({
    username: String,
    password: String,
    // nickname:,
})

const User = model("user", userSchema)

/*========================================
        Export Models
========================================*/
module.exports = User