/*========================================
        Import Dependencies
========================================*/
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const path = require("path")
const PokemonRouter = require("./controllers/pokemon.js")
// will need to require UserRouter session and mogostore
/*========================================
        Create Express application Object / Bind Liquid Templating Engine        
========================================*/

/*========================================
        Middleware
========================================*/

/*========================================
        Routes
========================================*/

/*========================================
        Server Listener
========================================*/
