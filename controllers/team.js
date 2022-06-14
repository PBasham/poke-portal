/*========================================
        Import Dependencies
========================================*/
const express = require("express")
const res = require("express/lib/response")
const Pokemon = require("../models/pokemon.js")
const Team = require("../models/team.js")
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
// index route ('/route') - method=GET
router.get("/", (req, res) => {
//     Pokemon.find({},{name: 1, id: 1, sprites: 1}).sort("id")
//             .then((pokemon) => {

//                     res.render("team/index.liquid", { allPokemon: pokemon })
//             })
//             .catch((error) => {
    //                     console.log(error)
    //                     res.json({ error })
    //             })
                        res.render("team/index.liquid")
})
// new route ('/route/new') - method=GET
router.get("/new", (req, res) => {
    res.render("team/new.liquid")
})
// delete route ('/route/:id') - method=DELETE

// update route ('/route/:id') - method=PUT

// create route ('/route') - method=POST
router.post("/", (req, res) => {
    let pageData = req.body
    console.log(pageData)
    
    Team.create(pageData)
    .then((newTeam) => {
        res.redirect("/team")
    })
})
// edit route ('/route/:id/edit') - method=GET

// show route ('/route/:id') - method=GET
router.get("/:id", (req, res) => {
    // let indPokemon = req.params.id
    // Pokemon.findById(indPokemon)
    //         .then((pokemon) => {
    //                 res.render("team/show.liquid", { pokemon })
    //         })
    //         .catch((error) => {
    //                 console.log(error)
    //                 res.json({ error })
    //         })
})

/*========================================
        Export the Router
========================================*/
module.exports = router