//Update the name of the controller below and rename the file.
const knex = require("../db/knex.js")
const plants = require('../controllers/plants.js')


module.exports = function(app){
  app.get('/plants', plants.getAll)
  app.post('/plants', plants.addPlant)
  app.patch('/plants/:id', plants.updatePlant)
}
