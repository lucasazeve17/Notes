const express =require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverRide = require('method-override')

const server = express()

server.use(express.urlencoded({extended:true}))
server.use(express.static('public'))
server.use(methodOverRide('_method'))
server.use(routes)

server.set('view engine','njk')

nunjucks.configure("views",{
    express:server,
    autoescape:true,
    noCache:true,

})

server.listen(3333, ()=>{
    console.log('Server started')
})