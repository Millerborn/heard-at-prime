const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );

const pg = require('pg');

//setup PG to connect to the database
const Pool = pg.Pool;
const pool = new Pool({
    database: 'heardAtPrime',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000 // 30 second before timeout
});

// Listener setup on the pool
// helpful for troubleshooting.
pool.on('connect', () =>{
    console.log('Connected to the database');   
})

pool.on('error', (error) =>{
    console.log('Error with database pool', error);    
})


app.use(express.static('server/public') );

// GET request setup
app.get('/quotes', (req, res) =>{
    const sqlText = 'SELECT * FROM quotes';
    pool.query(sqlText)
    .then( (result) => {
        console.log('Got stuff from database', result);
        res.send(result.rows);
    })  
    .catch( (error) =>{
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })  
})

// POST request setup
app.post('/quotes', (req, res) =>{
    const newQuote = req.body;
    const sqlText = `INSERT INTO quotes (title, author, published) VALUES
    ($1, $2, $3)`;
    console.log('SQL', sqlText, newQuote);
    
    pool.query(sqlText, [newQuote.title, newQuote.author, newQuote.published] )
    .then( (result) =>{
        console.log('Added quote to database', newQuote);
        res.sendStatus(201);
    })
    .catch( (error) =>{
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})


app.listen(PORT, () =>{
    console.log('listening on PORT', PORT);    
})