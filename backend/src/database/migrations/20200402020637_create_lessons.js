
exports.up = function(knex) {

    return knex.schema.createTable('lessons', (table) =>{

        table.increments('id').primary()
        table.string('name').unique().notNullable()
        table.text('comments').notNullable()
        table.string('file').notNullable()

        table.boolean('done').notNullable()
        table.boolean('has_baptism').notNullable()

        //table.string('small_groups_id').notNullable()        
        table.integer('small_groups_id', 11).unsigned().references('id').inTable('small_groups')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('lessons')
};
