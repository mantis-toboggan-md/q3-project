const knex = require("../db/knex.js")
const flash = require('connect-flash')
const moment = require('moment')

module.exports = {

  getAll: (req,res)=>{
    knex('plants').then((response)=>{
      res.json(response)
    }).catch(err=>console.error(err))
  },

  addPlant: (req,res)=>{
    knex('plants').insert(req.body).then(()=>{
      res.status(200).end('plant added')
    }).catch(err=>console.error(err))
  },

  updatePlant: (req,res)=>{
    knex('plants').update(req.body).where('id', '=', req.params.id).then(()=>{
      res.status(200).end('plant updated')
    })
  },

  deletePlant: (req,res)=>{
    knex('plants').where('id', '=', req.params.id).delete().then(()=>{
      res.status(200).end('plant deleted')
    })
  }
}
