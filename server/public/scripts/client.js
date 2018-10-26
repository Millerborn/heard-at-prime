console.log('JS');

$(document).ready(onReady);

function onReady(){
    console.log('JQ'); 
    getQuoteData();
}

// get artist data from the server
function getQuoteData() {
    $.ajax({
        type: 'GET',
        url: '/quotes'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let quote = response[i];
            $('#front').append(`
                    <p>${quote.name}</p>
            `);
            $('#back').append(`
            <p>${quote.name}</p>
    `);
        }
    });
}