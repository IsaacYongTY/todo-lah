const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const user = require('../models/user.model')

passport.serializeUser(function(user, done) {
    done(null)
})

module.exports = passport