const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM quotes`;

    pool.query(sqlText)
    .then((result) => {
        console.log('Via GET, db columns received');
        res.send(result.rows);
        // res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error GETing quotes from the database ${sqlText}`, error);
        res.sendStatus(500);
    })
});

// POST

router.post('/', (req, res) => {
    let newQuote = req.body;

    // query db
    const sqlText = `INSERT INTO quotes (quote) VALUES ($1)`;

    // sanitize user inputs with pg
    pool.query(sqlText, [newQuote.quote])
        .then((result) => {
            console.log('A new quote has been POSTed to the database', newQuote);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error POSTing quote to the database ${sqlText}`, error);
            res.sendStatus(500);
        })

});

// PUT

// DELETE

module.exports = router;