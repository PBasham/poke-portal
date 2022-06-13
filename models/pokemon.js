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
const pokemonSchema = new Schema({
    pokedexNumber: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2560px-Question_Mark.svg.png",
    }
})

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

const Pokemon = modeel("pokemon",pokemonShema )
const Team = modeel("team",teamShema )
const User = modeel("user",userShema )

/*========================================
        Export Models
========================================*/
module.exports = {
    Pokemon,
    Team,
    User,
}