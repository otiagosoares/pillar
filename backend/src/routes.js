
const express = require('express')
const routes = express.Router()


const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserController')



routes.post('/login', AuthController.index); 


//USER ROUTES
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.getUser)
routes.post('/users', UserController.create)
routes.put('/users', UserController.put)
//routes.delete('/users/:id', UserController.put)

// //LIST ONGS
// routes.get('/ongs', OngController.index)
// // CREATE ONGS
// routes.post('/ongs', OngController.create)

// routes.get('/profile', ProfileController.index)

// routes.get('/incidents', IncidentController.index)
// routes.post('/incidents', IncidentController.create)
// routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes