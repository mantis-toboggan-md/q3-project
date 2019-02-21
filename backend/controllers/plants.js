const knex = require("../db/knex.js")
const flash = require('connect-flash')
const moment = require('moment')

module.exports = {

  getAll: (req,res)=>{
    knex('plants').orderBy('name').then((response)=>{
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
  },

  updateQuantity: (req,res)=>{
    let plants = req.body
    Promise.all(plants.map((plant)=>{
      return knex('plants').where('id', plant.id).increment('stock',(plant.quantity*-1) )
    })).then(()=>{
      res.status(200).end('order completed')
    })
  }
}
