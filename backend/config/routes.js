//Update the name of the controller below and rename the file.
const knex = require("../db/knex.js")
const plants = require('../controllers/plants.js')
const auth = require('../controllers/auth.js')
const jwt = require('jsonwebtoken')
const cors = require('cors')

module.exports = function(app){
  app.options('*', cors())
  app.get('/plants', cors(), plants.getAll)

  app.post('/order', cors(), plants.updateQuantity)

  app.post('/plants',cors(), adminMiddleWare, plants.addPlant)
  app.patch('/plants/:id', cors(),adminMiddleWare, plants.updatePlant)
  app.delete('/plants/:id', cors(),adminMiddleWare, plants.deletePlant)
  app.post('/login', cors(),auth.adminLogin)
}

const adminMiddleWare = (req, res, next) => {
  jwt.verify(req.headers["authorization"], 'supersecret', (err, decode) => {
    if (err) throw err
    if (decode.role == 'admin') {
      next()
    } else {
      res.status(401).send('invalid token')
    }
  })
}
