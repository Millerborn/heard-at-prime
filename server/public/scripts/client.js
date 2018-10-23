console.log('JS');

$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    // event listeners
    $('#enterQuote').on('submit', function(event) {
        event.preventDefault();
        newQuote();
    });
    getQuotes();
}

function newQuote() {

    let newQuote = { 
        quote: $('#newQuote').val(),
    };

    // console.log('Quote added', newQuote);

    $.ajax({
        method: 'POST',
        url: '/quote',
        data: newQuote
    })
    .then(function( response ) {
        getQuotes();
        $('#newQuote').val('');
        console.log('POST of new quote is successful');
    })
    .catch(function( error ) {
        console.log('POST of new quote is unsuccessful');
    }) 
}

function getQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quote'
    })
    .then(function( response ) {
        console.log('GET of new quote is successful', response);
        displayQuotes( response );
    })
    .catch(function( error ) {
        console.log('GET of new quote is unsuccessful');
    })
}

function displayQuotes(quotes) {
    $('#quote-list').empty();
    for (let quote of quotes) {
    $('#quote-list').append(`
    <li class="a-quote">${quote.quote}</li>
    `)
    }
}