const knex = require("../db/knex.js")
const bcrypt = require('bcrypt-nodejs')
const secret = 'supersecret'
const jwt = require('jsonwebtoken')

module.exports = {


  adminLogin: (req,res)=>{
    knex('users').where('username', req.body.username).then(results=>{
      if(!results[0]){
        res.status(404).end('username not found')
      } else {
        if(bcrypt.compareSync(req.body.password, results[0].password)){
          let token = jwt.sign({
              role: 'admin'
            }, secret, {
              expiresIn: 86400
            })
          res.status(200).end(token)
        } else{
          res.status(400).end('invalid password')
        }
      }
    })
  }
}
