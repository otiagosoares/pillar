const connection = require('../database/connection')
const bcrypt= require('bcrypt')

//User Model
const User = require('../models/User')

module.exports = {

    async index(req, res){

        const { page  = 1 } = req.query
        const [ count ] = await User.countUsers()
        const users = await User.users(page)

        res.header('X-Total-Count', count['count(*)'])

        return res.status(200).json(users)
    },
    //CREATE A NEW USER SIST
    async create(req, res){

        /*  Role Permition:
                Master
                Supervisor
                Leader       
        */      

        const user = req.body
        const row = User.create(user)

        return row

    },
    async getUser(req, res){

        const { id } = req.params
        const user = await User.getById(id)

        return res.status(200).json(user)

    },
    async put(req, res){
        
        const userUpdate = req.body
        const row = await User.update(userUpdate)

        return res.status(200).json(row)
    }
} 
