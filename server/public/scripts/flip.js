$(document).ready(onReady);

function onReady(){
    //setTimeout(flipBlock,4000)
    flipBlock();
}

quotesArray=['hey','cool saying','funny thing','hahaha'];

function flipBlock(){
    flipIt();

    setInterval(function(){ 
        flipIt() }, 8000);
}




function flipIt() {
    console.log('flip')
    
    $('#back').empty();
    
    let firstQuote= quotesArray[Math.floor(Math.random()*quotesArray.length)]
    
    $('#back').append(firstQuote);
    
    setTimeout(function(){
        let secondQuote= quotesArray[Math.floor(Math.random()*quotesArray.length)]
        $('#front').empty();
        $('#front').append(secondQuote);
    },4000)
     
    
};
