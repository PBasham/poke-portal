/*========================================
        Require Dependencies
========================================*/
const mongoose = require("./connection.js");

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
    teamMembers: []
})

const Team = model("team", teamSchema)

/*========================================
        Export Models
========================================*/
module.exports = Team