require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('./lib/passportConfig')

require('./lib/mongodb')

app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static("public"))

app.use(session( {
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl : process.env.DB})
}))

app.use(passport.initialize())
app.use(passport.session())

app.use("/", require("./routes/user.route"))
app.use("/", require("./routes/todo.route"))

app.use(function(req,res,next) {
    res.locals.currentUser = req.user
    next()
})


app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`)
})
