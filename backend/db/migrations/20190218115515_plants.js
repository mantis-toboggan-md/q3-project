
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', (table)=>{
    table.increments()
    table.string('name')
    table.string('growth_rate')
    table.string('light_requirement')
    table.string('co2_need')
    table.string('structure')
    table.string('size')
    table.boolean('isFloating')
    table.integer('stock')
    table.string('price')
    table.string('photo_url')
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants')
};
