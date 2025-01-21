// importing Quotes from data.js file
import Quotes from './data.js';

// Input Search Quotes Function
function searchQuotes(txt) {
    return Quotes.filter(item =>
        item.quote.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) || item.author.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) || item.category.toLocaleLowerCase().includes(txt.toLocaleLowerCase())
    )
}



console.log(Quotes);