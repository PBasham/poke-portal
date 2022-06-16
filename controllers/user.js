/*========================================
        Import Dependencies
========================================*/
const express = require("express")
const User = require("../models/user.js")
const bcrypt = require("bcryptjs")

/*========================================
        Create Route
========================================*/
const router = express.Router()

/*========================================
        Routes
========================================*/
// signup method="GET" route - "/signup"
router.get("/signup", (req, res) => {
    res.render("user/signup")
})
// signup method="POST" route - "/signup" async
router.post("/signup", async (req, res) => {
    // Encrypt password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    // create user in database
        User.create(req.body)
        .then((userInfo) => {
            res.redirect("/user/login")
        })
        .catch((error) => {
            // send error as json
            console.log(error)
            res.json({ error })
        })
})

// login method="GET" route - "/login" async
router.get("/login", async (req, res) => {
    res.render("user/login")
})
// login method="POST" route - "/login" async
router.post("/login", async (req, res) => {
    // get page data from req body
    const { username, password }  = req.body
    // check the database to see if the user exist and if the password matches
    // User.findOne({ useranme })
})

// logout method="GET" route - "/logout"
router.get("/logout", (req, res) => {
    // Destroy session and redirect to login page
    req.session.destroy((err) => {
      res.redirect("/user/login")
    })
  })
/*========================================
        Export Router
========================================*/
module.exports = router