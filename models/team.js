/*========================================
        Require Dependencies
========================================*/
const mongoose= require("./connection.js");

/*========================================
        Set up Schema and Model
========================================*/
const { Schema, model } = mongoose

const teamSchema = new Schema({
    teamName: {
        type: String
    },
    teamMembers: {
        memberOne: {
            type: String,
            // name?
            // id?
            // image?
        },
        memberTwo: {
            type: String,
            // name?
            // id?
            // image?
        },
        memberThree: {
            type: String,
            // name?
            // id?
            // image?
        },
        memberFour: {
            type: String,
            // name?
            // id?
            // image?
        },
        memberFive: {
            type: String,
            // name?
            // id?
            // image?
        },
    }
})

const Team = model("team", teamSchema)

/*========================================
        Export Models
========================================*/
module.exports = { Team }