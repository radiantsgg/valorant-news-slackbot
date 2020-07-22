module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      port: 3306,
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
    client: 'mysql2',
    connection: {
      socketPath : process.env.DATABASE_SOCKET,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
  }
}