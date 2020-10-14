module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: 5432,
      host: 'localhost',
      database: 'slackbots',
      user: 'root',
      password: '',
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      port: process.env.PG_PORT,
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      ssl: {
        rejectUnauthorized: false,
        ca: process.env.PG_CERT,
      }
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
  }
}
