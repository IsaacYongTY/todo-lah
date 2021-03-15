const router = require('express').Router()
const User = require('../models/user.model')

router.post("/todo", async(req, res) => {
    try{
        let user = new User(req.body)
        await user.save()
        res.redirect("/")
    }catch(e){
        console.log(e)
    }
})

module.exports = router