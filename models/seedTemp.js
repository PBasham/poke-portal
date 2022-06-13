/*========================================
        Import Dependencies
========================================*/
const mongoose = require("./connection.js")
const Pokemon = require("./pokemon.js")
const Team = require("./Team.js")
const User = require("./User.js")

const db = mongoose.connection
    
db.on("open", () => {
    /*========================================
        Pull current Data from pokeapi.co
    ========================================*/
fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
.then((responseData) => {
    return responseData.json()
})
.then((jsonData) => {
    console.log(jsonData)
    
})
.catch((error) => {

})
.catch((error) => {
    console.log(error)
    db.close()
})
})