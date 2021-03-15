require('dotenv').config()
const mongoose = require('mongoose')



mongoose.connect(process.env.DB, {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
} ).then(() => {
    console.log('mongoDB connected')
}).catch((err) => {
    console.log(err)
})


module.exports = mongoose