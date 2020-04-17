/*
 *  Auth Controller 
 * 
 */
const connection = require('../database/connection')
const { sign, verify } =  require('../database/jwt')
const bcrypt = require('bcrypt')

//User Model
const User = require('../models/User')

module.exports = {

    async index(req, res){
        
        try{

            const [, hash] = req.headers.authorization.split(' ')

            const [email, password] = Buffer.from(hash, 'base64').toString().split(':')

            const user = await User.getByEmail(email)

            if(!user){
                return res.status(200).json({auth: false, error: 'Usuário nao encontrado!' })
            }

            bcrypt.compare(password, user.password, (err, result) => {

                if(err){
                    console.error(err)
                    throw err
                }

                if(result){
                    //JWT
                    const token = sign({user: user.id})
                    const auth = true
                    return res.status(200).json({ auth, token})

                }else{

                    return res.status(200).json({auth: false, error: 'Senha inválida!'})

                }
            })
            
       }catch(err){
           console.error(err)
           return res.status(500).json(err)
       }
    }
}
