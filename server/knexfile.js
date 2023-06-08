module.exports = {
    development: {
      client: 'pg',
      connection: {
        host : '127.0.0.1',
        user : 'qgadxlvn',
        password : 'UUwp2cII_EiU1Ez-pRKqHGz1Bxc2FoK6',
        database : 'qgadxlvn'
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      }
    }
  };
  