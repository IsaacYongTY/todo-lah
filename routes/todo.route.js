const router = require('express').Router()
const User = require('../models/user.model')
const mockData = require('../lib/mockData')


router.post("/todo", (req, res) => {
    try{
        let newTodo = {
            title: req.body.title,
            description: req.body.description,
            isCompleted: false
        }
        console.log(newTodo)

        // console.log(req.body)
        mockData.todos.push(newTodo)
        res.redirect(`/todo`)
    }catch(e){
        console.log(e)
    }
})

router.delete("/todo", async (req, res) => {
    try {
        let index = req.body.index
        mockData.todos.splice(index, 1)
        res.redirect("/todo")
    } catch(e) {
        console.log(e)
    }
})

module.exports = router