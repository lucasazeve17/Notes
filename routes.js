const express = require('express')
const noteController = require('./controllers/noteController')

const routes = express.Router()

routes.get('/',(req,res)=>{
    return res.redirect('/notes')
})

routes.get('/notes',noteController.index)

routes.get('/notes/create',(req,res)=>{
    return res.render('create')
})
routes.get('/notes/:id/edit',noteController.edit)

routes.post('/notes',noteController.post)

routes.put('/notes',noteController.put)

routes.delete('/notes',noteController.delete)


module.exports = routes