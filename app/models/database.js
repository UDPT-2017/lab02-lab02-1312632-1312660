var pg = require('pg');

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'lab02', //env var: PGDATABASE
  password: '01655869381', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

module.exports = pool;