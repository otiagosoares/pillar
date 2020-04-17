
exports.up = function(knex) {

    return knex.schema.createTable('members', (table) =>{

        table.increments('id').primary()
        table.string('name').notNullable()  
        table.string('email', 60).unique().notNullable()
        table.string('phone').notNullable()
        table.date('birth').notNullable()
        table.string('address').notNullable()
        table.string('address_number').notNullable()
        table.string('cep').notNullable()
        table.string('district').notNullable()
        table.string('city').notNullable()
        table.string('state').notNullable()

        table.text('comments').notNullable()
        table.string('photo').notNullable()

        table.boolean('is_visitor').notNullable()
        table.boolean('has_baptism').notNullable()

        table.integer('small_group_id', 11).unsigned().references('id').inTable('small_groups')
        

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('members')
};
