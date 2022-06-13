/*========================================
        Import Dependencies
========================================*/
const mongoose = require("./connection.js")
const Pokemon = require("./pokemon.js")
const Team = require("./Team.js")
const User = require("./User.js")

const db = mongoose.connection

// const fetchesLoop = []
// const arrPokemon = []
// db.on("open", () => {
//     // Pull current Data from pokeapi.co
//     Pokemon.deleteMany({})
//         .then((deletedProducts) => {

//             fetch("https://pokeapi.co/api/v2/pokemon-form?limit=898&offset=0")
//                 .then((responseData) => {
//                     // return the results in json format
//                     return responseData.json()
//                 })
//                 .then((jsonData) => {
//                     // fetch each pokemons personal info and create a new object from it.
//                     let totalCount = jsonData.results.length
//                     console.log(totalCount)
//                     for (let i = 1; i <= totalCount; i++) {
//                         fetchesLoop.push(
//                             fetch(`https://pokeapi.co/api/v2/pokemon-form/${i}`)
//                                 .then((pokemonData) => {
//                                     return pokemonData.json()
//                                 })
//                                 .then((pokemonJson) => {
//                                     arrPokemon.push(pokemonJson)
//                                 })
//                                 .catch((error) => {
//                                     console.log(error)
//                                     db.close()
//                                 })
//                         )
//                     }
//                     Promise.all(fetchesLoop)
//                         .then(() => {
//                             // console.log(fetchesLoop)
//                             // console.log(arrPokemon)

//                             console.log("Done")

//                             Pokemon.create(arrPokemon)
//                                 .then(() => {
//                                     db.close()
//                                 })
//                         })
//                         .catch((error) => {
//                             console.log(error)
//                             db.close()
//                         })

//                 })
//                 .catch((error) => {
//                     console.log(error)
//                     db.close()
//                 })

//         })
//         .catch((error) => {
//             console.log(error)
//             db.close()
//         })
// })

const fetchesLoop = []
const arrPokemon = []
db.on("open", () => {
    // Pull current Data from pokeapi.co
    Pokemon.deleteMany({})
        .then((deletedProducts) => {

            fetch("https://pokeapi.co/api/v2/pokemon-form?limit=10000&offset=0")
                .then((responseData) => {
                    // return the results in json format
                    return responseData.json()
                })
                .then((jsonData) => {
                    // fetch each pokemons personal info and create a new object from it.
                    let totalCount = jsonData.results.length
                    console.log(totalCount)


                    jsonData.results.forEach(element => {
                        console.log(element.url)
                        fetchesLoop.push(
                            fetch(element.url)
                            .then((pokemonData) => {
                                    return pokemonData.json()
                                })
                                .then((pokemonJson) => {
                                    arrPokemon.push(pokemonJson)
                                })
                                .catch((error) => {
                                    console.log(error)
                                    db.close()
                                })
                        )
                    })

                    Promise.all(fetchesLoop)
                        .then(() => {
                            // console.log(fetchesLoop)
                            console.log(arrPokemon)

                            console.log("Done")

                            Pokemon.create(arrPokemon)
                                .then(() => {
                                    db.close()
                                })
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
        .catch((error) => {
            console.log(error)
            db.close()
        })
})