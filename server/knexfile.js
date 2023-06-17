module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: 'postgres://qgadxlvn:UUwp2cII_EiU1Ez-pRKqHGz1Bxc2FoK6@hansken.db.elephantsql.com/qgadxlvn',
      ssl: true,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};

  