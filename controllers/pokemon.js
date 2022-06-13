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
    Pokemon.find({}).sort("id")
    .then((pokemon) => {

        res.render("pokemon/index.liquid", { allPokemon: pokemon })
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })
})
// new route ('/new') - method=GET

// delete route ('/:id') - method=DELETE

// update route ('/:id') - method=PUT

// create route ('/) - method=POST

// edit route ('/:id/edit') - method=GET

// show route ('/:id') - method=GET

/*========================================
        Export the Router
========================================*/
module.exports = router