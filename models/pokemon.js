/*========================================
        Require Dependencies
========================================*/
const mongoose= require("./connection.js");

/*========================================
        Set up Schema and Model
========================================*/
const { Schema, model } = mongoose

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

const Pokemon = model("pokemon",pokemonSchema )

/*========================================
        Export Models
========================================*/
module.exports = { Pokemon }