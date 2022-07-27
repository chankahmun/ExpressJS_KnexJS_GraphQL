/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('tbl_merchants', function(table){
        table.increments('id');
        table.string('merchant_name', 255).notNullable();
        table.string('phone_no', 255).notNullable();
        table.decimal('latitude', 8 , 4).notNullable();
        table.decimal('longtitude', 8, 4).notNullable();
        table.boolean('is_active').defaultTo(false);
        table.datetime('recorded_datetime').notNullable;
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tbl_merchants');
  
};
