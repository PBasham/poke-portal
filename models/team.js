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
        type: String,
        required: true,
    },
    teamImg: {
        type: String,
    },
    teamMembers: {
        memberOne: {
            // name?
            // id?
            // image?
        },
        memberTwo: {
            // name?
            // id?
            // image?
        },
        memberThree: {
            // name?
            // id?
            // image?
        },
        memberFour: {
            // name?
            // id?
            // image?
        },
        memberFive: {
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
module.exports = Team