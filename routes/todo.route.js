const router = require('express').Router()
const User = require('../models/user.model')
const mockData = require("../lib/mockData")

router.post("/todo", async(req, res) => {
    try{
        let user = new User(req.body)
        await user.save()
        res.redirect("/")
    }catch(e){
        console.log(e)
    }
})

router.delete("/todo", async (req, res) => {
    try {
        let index = req.body.index
        console.log(index)
        mockData.todos.splice(index, 1)
        res.redirect("/todo")
    } catch(e) {
        console.log(e)
    }
})

module.exports = router