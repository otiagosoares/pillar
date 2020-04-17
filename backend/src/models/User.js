/*
    USER MODEL

 */
const connection = require('../database/connection')
const { sign, verify } =  require('../database/jwt')
const bcrypt = require('bcrypt')

module.exports = {

    async create(user){
        
        await bcrypt.hash(user.password, 10)
            .then((hash) => { user.password = hash })
            .catch((err)=> console.log(err))

        const id = await connection('users').insert(user)
            .catch((e) => { console.error(e)}) 

        return id
    },
    async users(page){
        const users  = await connection('users')
            .limit(10)
            .offset( (page - 1) *5 )
            .column(
                'id', 
                "name", 
                "email", 
                "phone", 
                "birth", 
                "photo", 
                "role")
            .select()

        return users
    },
    async countUsers(){

        return connection('users').count()

    },
    async update(user){
       
        await bcrypt.hash(user.password, 10)
            .then((hash) => { user.password = hash })

        const row = await connection('users')
            .where('id', user.id)
            .update(user)
            .catch( (err) => { console.error(err) } )  
        
        return row
    },

    async getByEmail(email){
        
        const user = await connection('users')
            .where('email', email)
            .select('*')
            .first()
        
        return user
    },
    async getById(id){

        let user = await connection('users')
            .where('id', id)
            .select('*')
        delete user[0].password

        return user
    }
}
