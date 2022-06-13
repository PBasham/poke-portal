/*========================================
        Require Dependencies
========================================*/
const mongoose = require("./connection.js");

/*========================================
        Set up Schema and Model
========================================*/
const { Schema, model } = mongoose

const pokemonSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    sprites: {
        back_default: {
            type: String
        },
        back_female: {
            type: String
        },
        back_shiny: {
            type: String
        },
        back_shiny_female: {
            type: String
        },
        front_default: {
            type: String
        },
        front_female: {
            type: String
        },
        front_shiny: {
            type: String
        },
        front_shiny_female: {
            type: String
        },
    }
    })

const Pokemon = model("pokemon", pokemonSchema)

/*========================================
        Export Models
========================================*/
module.exports = Pokemon