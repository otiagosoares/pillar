
exports.up = function(knex) {

    return knex.schema.createTable('users', (table) =>{

        table.increments('id').primary()
        table.string('name').notNullable()  
        table.string('email').unique().notNullable()
        table.string('password').notNullable()
        table.string('phone').notNullable()
        table.date('birth').notNullable()
        table.string('photo').notNullable()
        table.string('role').notNullable()
        
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('users')
};
