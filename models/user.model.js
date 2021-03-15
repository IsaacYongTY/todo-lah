const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: String,
    lastName : String,
    email: String,
    password: String,
    dob: String
})

userSchema.methods.validPassword = function (password){
    return bcrypt.compareSync(password, this.password)
}

userSchema.methods.fullName = function(){
    return this.firstName + " " + this.lastName
}


module.exports = mongoose.model("User", userSchema)