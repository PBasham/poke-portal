/*========================================
        Import Dependencies
========================================*/
const express = require("express")
const res = require("express/lib/response")
const Pokemon = require("../models/pokemon.js")
/*========================================
        Create Route
========================================*/
const router = express.Router()
/*========================================
        Route Middleware
========================================*/
router.use((req, res, next) => {
        console.log("I run on all routes!")
        next()
})

/*========================================
        Routes
========================================*/
// I-N-D-U-C-E-S
// index route ('/') - method=GET
router.get("/", (req, res) => {
        Pokemon.find({},{name: 1, id: 1, sprites: 1}).sort("id")
                .then((pokemon) => {

                        res.render("pokemon/index.liquid", { allPokemon: pokemon })
                })
                .catch((error) => {
                        console.log(error)
                        res.json({ error })
                })
})

// show route ('/:id') - method=GET
router.get("/:id", (req, res) => {
        let indPokemon = req.params.id
        Pokemon.findById(indPokemon)
                .then((pokemon) => {
                        res.render("pokemon/show.liquid", { pokemon })
                })
                .catch((error) => {
                        console.log(error)
                        res.json({ error })
                })
})
/*========================================
        Export the Router
========================================*/
module.exports = router