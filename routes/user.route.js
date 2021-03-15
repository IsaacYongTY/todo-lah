const router = require('express').Router()
const User = require('../models/user.model')
const mockData = require("../lib/mockData")
const passport = require('../lib/passportConfig')

router.get("/", (req, res) => {
    res.status(200).render("auth/signin")
})

router.get("/register", (req, res) => {
    res.status(200).render("auth/signup")
})

router.post('/signin', (req, res,next) => {

    try {
        console.log('in')
        let { email, password } = req.body

        passport.authenticate('local', function(err, user, info) {
            if (err) {
                console.log(err)
                return next(err)
            }
            if (!user) {
                console.log(user)
                return res.redirect('/login')
            }

            req.logIn(user, function(err) {
                if(err) {
                    console.log(err)
                    return next(err)
                }
                return res.redirect('/todo')
            })
        })(req, res, next)



    } catch(e) {
        console.log(e)
    }
})

router.post('/register', async (req, res) => {

    try {
        let { firstName, lastName, dateOfBirth, email, password} = req.body

        let user = new User({
            firstName,
            lastName,
            email,
            password,
            dob: dateOfBirth,
        })

        await user.save()

        res.redirect('/')
    } catch (e) {
        console.log(e)
    }

})

router.get("/todo", (req, res) => {
    res.render("tasks/tasks", {mockData})
})



module.exports = router