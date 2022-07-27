// express listening port 
const PORT = '5000';

// database connection detail
const DATABASE = 'postgres';
const DATABASE_USER = 'postgres';
const DATABASE_PASSWORD = 'password';
const DATABASE_URL = 'localhost';
const DATABASE_PORT = 5432;
const DATABASE_CLIENT = 'postgresql';
const DATABASE_MIN_POOL = 2;
const DATABASE_MAX_POOL = 10;
const DATABASE_KNEX_MIGRATION = 'knex_migrations';

//exporting all the constant 
module.exports = {
    PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_URL,
    DATABASE_PORT,
    DATABASE_CLIENT,
    DATABASE_MIN_POOL,
    DATABASE_MAX_POOL,
    DATABASE,
    DATABASE_KNEX_MIGRATION

}
