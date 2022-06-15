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
    teamMembers:
    {
        memberOne: {
            pokemonId: {
                type: Number,
                default: null,
            },
            pokemonImg: {
                type: String,
                default: ""
            },
        },
        memberTwo: {
            pokemonId: {
                type: Number,
                default: null,
            },
            pokemonImg: {
                type: String,
                default: ""
            },
        },
        memberThree: {
            pokemonId: {
                type: Number,
                default: null,
            },
            pokemonImg: {
                type: String,
                default: ""
            },
        },
        memberFour: {
            pokemonId: {
                type: Number,
                default: null,
            },
            pokemonImg: {
                type: String,
                default: ""
            },
        },
        memberFive: {
            pokemonId: {
                type: Number,
                default: null,
            },
            pokemonImg: {
                type: String,
                default: ""
            },
        },
    }
})

const Team = model("team", teamSchema)

/*========================================
        Export Models
========================================*/
module.exports = Team