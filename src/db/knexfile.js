// knex config settings to postgress.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const {
  DATABASE,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_URL,
  DATABASE_PORT,
  DATABASE_CLIENT,
  DATABASE_MIN_POOL,
  DATABASE_MAX_POOL,
  DATABASE_KNEX_MIGRATION
} = require('../../config');

const _conn = {
  client: DATABASE_CLIENT,
  connection: {
      database: DATABASE,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      local: DATABASE_URL,
      port: DATABASE_PORT
  },
  pool: {
      min: DATABASE_MIN_POOL,
      max: DATABASE_MAX_POOL
  },
  migrations: {
      tableName: DATABASE_KNEX_MIGRATION
  }
}

module.exports = {
  development: _conn,
  staging: _conn,
  production: _conn 
};
