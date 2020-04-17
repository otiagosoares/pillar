
exports.up = function(knex) {
    return knex.schema.createTable('calls', (table) =>{

        table.increments('id').primary()
        table.string('date').notNullable()
        table.text('members_id').notNullable()
        table.text('comments').notNullable()
        table.integer('num_visitors').notNullable()
        table.integer('num_presents').notNullable()
        table.boolean('done').notNullable()
        table.boolean('has_baptism').notNullable() 
        table.float('offer').notNullable() 
        table.integer('small_groups_id', 11).unsigned().references('id').inTable('small_groups')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    })
  
};

exports.down = function(knex) {
    return knex.dropTable('calls')
};
