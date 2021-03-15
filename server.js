require('dotenv').config()

const express = require('express')
const app = express()
const methodOverride = require('method-override')

require('./lib/mongodb')

app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))



app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`)
})
