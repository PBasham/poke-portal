/*========================================
        Import Dependencies
========================================*/
const mongoose = require("./connection.js")
const Pokemon = require("./pokemon.js")
const Team = require("./Team.js")
const User = require("./User.js")

const db = mongoose.connection

db.on("open", () => {
    // Pull current Data from pokeapi.co
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
        .then((responseData) => {
            // return the results in json format
            return responseData.json()
        })
        .then((jsonData) => {
            Pokemon.deleteMany({})
                .then(() => {

                    console.log(jsonData.results)
                    db.close()
                })
                .catch((error) => {
                    console.log(error)
                    db.close()
                })

        })
        .catch((error) => {
            console.log(error)
            db.close()
        })
})