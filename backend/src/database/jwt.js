const jwt = require('jsonwebtoken')

const secret = "NxH7r6TuJtBAXV4mSPhr34MJhgaDUN"

module.exports = {
   
   sign(payload){
      return jwt.sign(payload, secret, { expiresIn: 86400 })
   },

   verify(token){
      return jwt.verify(token, secret)
   }
} 
