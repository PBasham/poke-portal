/*========================================
        Import Dependencies
========================================*/
const express = require("express")
const { redirect } = require("express/lib/response")
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
            Pokemon.find({})
                .then((pokemon) => {

                    res.render("team/index.liquid",
                        {
                            otherTeams: allTeams,
                            pokemon,
                        })
                })
                .catch((error) => {
                    console.log(error)
                    res.json({ error })
                })
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
    console.log(teamId)
    
    Team.findByIdAndDelete(teamId)
        .then((deletedData) => {
            res.redirect("/team")
        })
        .catch((error) => {
            console.log(error)
            res.json({ error })
        })
})
// update route ('/team) - method=PUT --- This is to add a pokemon to a team
router.put("/", (req, res) => {
    // console.log(req.body)
    let pageData = req.body.pageData.split(",")
    let teamId = pageData[0]
    let pokemonId = pageData[1]
    let pokemonName = pageData[2]
    let pokemonImg = pageData[3]

    console.log(pageData)
    console.log(`team id: ${teamId}`)
    console.log(`pokemon id: ${pokemonId}`)
    console.log(`pokemon name: ${pokemonName}`)
    console.log(`pokemon img: ${pokemonImg}`)

    Team.findByIdAndUpdate(teamId,
        { $push: { teamMembers: { pokemonId: pokemonId,
                                pokemonName: pokemonName,
                                pokemonImg: pokemonImg,
        } } }, {new: true})
        .then((updatedData) => {
            console.log(updatedData)

        })
        .catch((error) => {
            console.log(error)
            res.json({ error })
        })
    res.redirect("/team")
})
// update route ('/team/:id) - method=PUT --- This is to edit a team name / img / color?
router.put("/:id", (req, res) => {
    let teamId = req.params.id
    let pageData = req.body
    Team.findByIdAndUpdate(teamId,
        {pageData}
        )
    res.redirect("/team")
})
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
router.get("/:id/edit", (req, res) => {
    let teamId = req.params.id
    Team.findById(teamId)
    .then((editTeam) => {
        res.render("team/edit", {editTeam})
    })
    .catch((error) => {
        console.log(error)
        res.json({ error })
    })
})
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