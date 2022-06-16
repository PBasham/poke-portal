/*========================================
        Require Dependencies
========================================*/
const mongoose= require("./connection.js");

/*========================================
        Set up Schema and Model
========================================*/
const { Schema, model } = mongoose

const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        nickName: {
                type: String,
        }
    })

const User = model("user", userSchema)

/*========================================
        Export Models
========================================*/
module.exports = User