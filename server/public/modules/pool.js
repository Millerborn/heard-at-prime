const pg = require('pg');

//setup PG to connect to the database
const Pool = pg.Pool;
const pool = new Pool({
    database: 'heard-at-prime',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000 // 30 seconds before timeout
});

// Listener setup on the pool
// helpful for troubleshooting.
pool.on('connect', () =>{
    console.log('Connected to the database');   
});

pool.on('error', (error) =>{
    console.log('Error with database pool', error);    
});

module.exports = pool;