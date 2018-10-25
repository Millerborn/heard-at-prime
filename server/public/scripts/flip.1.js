$(document).ready(onReady);

function onReady(){
    $('#whiteBlock').on('click', flipBlock)
}

quotesArray=['hey','cool saying','funny thing','hahaha'];

let firstQuote = quotesArray[0];
let secondQuote = quotesArray[1];

function flipBlock(){
    // flipIt();
    setInterval(function(){ 
        flipIt() }, 500);
}

function getQuote() {
    firstQuote = quotesArray[Math.floor(quotesArray.length * Math.random())]
    secondQuote= quotesArray[Math.floor(quotesArray.length * Math.random())]
    // flipIt();
    return firstQuote, secondQuote
}

function flipIt() {
    
    $('#whiteBlock').empty();
    // getQuote()
    $('#whiteBlock').append(`<p id='front'>${firstQuote}</p>`)
    $('#whiteBlock').append(`<p id='back'>${secondQuote}</p>`)
    $('#whiteBlock').addClass('flip');
    getQuote();
}

