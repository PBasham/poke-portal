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
// index route ('/team') - method=GET
router.get("/", (req, res) => {
    // query to get teams
    Team.find({})
        .then((allTeams) => {

            res.render("team/index.liquid", {otherTeams: allTeams})
        })
        .catch((error) => {
            console.log(error)
            res.json({ error })
        })
})
// new route ('/team/new') - method=GET
router.get("/new", (req, res) => {
    res.render("team/new.liquid")
})
// delete route ('/team/:id') - method=DELETE
router.delete("/:id", (req, res) => {
    let teamId = req.params.id
    Team.findByIdAndDelete(teamId)
    .then((deletedData) => {
        res.redirect("/team")
    })
    .catch((error) => {
        console.log(error)
        res.json({ error })
    })
})
// update route ('/team/:id') - method=PUT
router.put("/:id")
// create route ('/team') - method=POST
router.post("/", (req, res) => {
    let pageData = req.body
    console.log(pageData)

    Team.create(pageData)
        .then((newTeam) => {
            res.redirect("/team")
        })
        .catch((error) => {
            console.log(error)
            res.json({ error })
        })
})
// edit route ('/team/:id/edit') - method=GET

// show route ('/team/:id') - method=GET
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