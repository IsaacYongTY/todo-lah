const router = require('express').Router()
const User = require('../models/user.model')

router.get('/', async(req, res) => {
    try{
        // console.log("??")
        // let user = await User.findById(req.user)
        res.redirect("/")
    }catch(e){

    }
})

router.post('/users/:id', async(req, res) => {
    try{
        let { firstName, lastName } = req.body
        let tempUser = {
            firstName,
            lastName
        }
        let user = new User(tempUser)
        await user.save()
        res.redirect("/")
    }catch(e){
        console.log(e)
    }
})




module.exports = router