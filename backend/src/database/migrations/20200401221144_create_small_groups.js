
exports.up = function(knex) {

    return knex.schema.createTable('small_groups', (table) =>{

        table.increments('id').primary()
        table.string('name', 150).unique().notNullable()
        table.string('happens', 50).notNullable()
        table.time('happens_hour').notNullable()
        table.string('address').notNullable()
        table.string('address_number', 30).notNullable()
        table.string('cep', 50).notNullable()
        table.string('district').notNullable()
        table.string('city', 100).notNullable()
        table.string('state', 100).notNullable()

        //table.string('leader_id').notNullable()
        //table.string('host_id').notNullable()
        
        //table.integer('leader_id',11).unsigned().references('id').inTable('users')
        table.integer('leader_id',11).notNullable()
        table.integer('host_id',11).notNullable()
        
        table.boolean('is_active').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    })

};

exports.down = function(knex) {

    return knex.dropTable('small_groups')

};
