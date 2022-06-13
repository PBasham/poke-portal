/*========================================
        Import Dependencies
========================================*/
const express = require("express")
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