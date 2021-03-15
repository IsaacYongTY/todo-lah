const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("auth/signin")
})


router.get("/register", (req, res) => {
    res.render("auth/signup")
})

module.exports = router