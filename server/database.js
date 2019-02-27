const pg = require('pg');
const uri = process.env.POSTGRES_URI;

const pool = new pg.Pool({
    connectionString: uri
});

module.exports = pool;