// Random Quote array
var quotes = [
    {
        quote: "You can do anything but not everything.",
        source: "David Allen",
        citation: "Making It All Work",
        year: 2009,
        tags: ["business", "general"]
    },
    {
        quote: "You can question somebody's views and their judgement without questioning their motives or patriotism.",
        source: "Barack Obama",
        citation: "University of Michigan Commencement",
        year: 2010,
        tags: ["business", "politics", "general"]
    },
    {
        quote: "For three days after death hair and fingernails continue to grow but phone calls taper off.",
        source: "Johnny Carson",
        tags: ["politics", "general", "humor"]
    },
    {
        quote: "The frangrance always remains in the hand that gives the rose.",
        source: "Heda Bejar",
        tags: ["general"]
    },
    {
        quote: "Fear of a name increases fear of the thing itself.",
        source: "J. K. Rowling",
        citation: "Harry Potter and the Sorcerer's Stone",
        year: 1997,
        tags: ["general", "business", "politics"]
    },
    {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.",
        source: "Steve Jobs",
        tags: ["general", "business", "humor"]
    }
];

// Color array for random background color
var colors = ['#33FFBD', '#C0392B', '#F4D03F', '#17202A', '#154360', '#A569BD', '#3498DB'];

// Array for keeping track of what quotes are displayed
var noRepeat = [];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.addEventListener('DOMContentLoaded', printQuote, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Used to set 30 second timer for quotes to switch
var intervalID = window.setInterval(printQuote, 30000);

// Prints the random quote from the getRandomQuote function to the quote box
function printQuote() {
    clearInterval(intervalID);
    var quote = getRandomQuote();
    var color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById('loadQuote').style.backgroundColor = color;
    var html = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source;
    
    if (quote.hasOwnProperty('citation')){
        html += '<span class="citation">' + quote.citation + '</span>';
    }
    
    if (quote.hasOwnProperty('year')){
        html += '<span class="year">' + quote.year + '</span>';
    }
    
    html += '</p><ul class="tags">';
    for (var i = 0; i < quote.tags.length; i++){
        html += '<li>' + quote.tags[i] + '</li>';
    }
    html += '</ul>';
    
    
    document.getElementById('quote-box').innerHTML = html;
    console.log(quote.quote);
    
    intervalID = window.setInterval(printQuote, 30000);
    
}

// Selects a random quote from the quotes array
function getRandomQuote() {
    
    var len = quotes.length;
    var exitVar = true;
    var random = (Math.round(Math.random() * (len - 1)));
    var quote = quotes[random];
    if (noRepeat.length != quotes.length){
        while (exitVar) {
            if(!noRepeat.includes(quote)){
                noRepeat.push(quote);
                return quote;
            } else {
                random = (Math.round(Math.random() * (len - 1)));
                quote = quotes[random];
                continue;
            }
            exitVar = false;
        }
    }
    
    return quote;
    
    
}

// Selects a random color from the colors array (for random background color when new quote appears)
function getRandomColor() {
    var random = (Math.round(Math.random() * (colors.length -1)));
    return colors[random];
}