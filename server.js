/*========================================
        Import Dependencies
========================================*/
require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const path = require("path")
const morgan = require("morgan")
const PokemonRouter = require("./controllers/pokemon.js")
const TeamRouter = require("./controllers/team.js")
const UserRouter = require("./controllers/user.js")
const session = require("express-session")
const MongoStore = require("connect-mongo")
/*========================================
        Create Express application Object / Bind Liquid Templating Engine        
========================================*/
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})
/*========================================
        Middleware
========================================*/
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public"))
app.use(session({
        secret: process.env.SECRET,
        store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
        saveUninitialized: true,
        resave: false,
}))
/*========================================
        Routes
========================================*/
app.use("/pokemon", PokemonRouter)
app.use("/team", TeamRouter)
app.use("/user", UserRouter)

app.get("/", (req, res) => {
    res.render("index")
})
/*========================================
        Server Listener
========================================*/
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})