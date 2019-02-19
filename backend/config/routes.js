//Update the name of the controller below and rename the file.
const knex = require("../db/knex.js")
const plants = require('../controllers/plants.js')
const auth = require('../controllers/auth.js')
const jwt = require('jsonwebtoken')


module.exports = function(app){
  app.get('/plants', plants.getAll)
  app.post('/plants', adminMiddleWare, plants.addPlant)
  app.patch('/plants/:id', adminMiddleWare, plants.updatePlant)
  app.delete('/plants/:id', adminMiddleWare, plants.deletePlant)
  app.post('/login', auth.adminLogin)
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
