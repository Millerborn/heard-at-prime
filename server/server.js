const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const quotesRouter = require('./public/routes/quotes.router');
const bodyParser = require('body-parser');

// parse data from body
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );


app.use( express.static('server/public') );

// routes

app.use('/quote', quotesRouter);

// // GET request setup
// app.get('/quotes', (req, res) =>{
//     const sqlText = 'SELECT * FROM quotes';
//     pool.query(sqlText)
//     .then( (result) => {
//         console.log('Got stuff from database', result);
//         res.send(result.rows);
//     })  
//     .catch( (error) =>{
//         console.log(`Error making database query ${sqlText}`, error);
//         res.sendStatus(500);
//     })  
// })

// // POST request setup
// app.post('/quotes', (req, res) =>{
//     const newQuote = req.body;
//     const sqlText = `INSERT INTO quotes (title, author, published) VALUES
//     ($1, $2, $3)`;
//     console.log('SQL', sqlText, newQuote);
    
//     pool.query(sqlText, [newQuote.title, newQuote.author, newQuote.published] )
//     .then( (result) =>{
//         console.log('Added quote to database', newQuote);
//         res.sendStatus(201);
//     })
//     .catch( (error) =>{
//         console.log(`Error making database query ${sqlText}`, error);
//         res.sendStatus(500);
//     })
// })


app.listen(PORT, () =>{
    console.log('listening on PORT', PORT);    
})