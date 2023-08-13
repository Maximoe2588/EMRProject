module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: 'postgres://qgadxlvn:UUwp2cII_EiU1Ez-pRKqHGz1Bxc2FoK6@hansken.db.elephantsql.com/qgadxlvn',
      ssl:  { rejectUnauthorized: false },
    },
    migrations: {
      directory: __dirname + '/../data/migrations',
    },
    seeds: {
      directory: __dirname + '/../data/seeds',
    },
  },
};

  