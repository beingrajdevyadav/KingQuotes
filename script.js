// importing Quotes from data.js file
import Quotes from './data.js';

// GLOBAL VARIABLE 
let CURRENT_QUOTES = [];

// Input Search Quotes Function
function searchQuotes(txt) {
    return Quotes.filter(item =>
        item.quote.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) || item.author.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) || item.category.toLocaleLowerCase().includes(txt.toLocaleLowerCase())
    )
}

// ----------------------------------------------
//     function to handle selection of category
// ---------------------------------------------- 
function searchQuotesByCategory(category) {
    return Quotes.filter(item => item.category === category);
}

// --------------------------------------
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", function () {
    CURRENT_QUOTES.length = 0;
    // console.log("clicked -", this);

    let searchInputTxt = document.querySelector('#searchInput').value;
    // console.log(searchInput.value.trim().toLocaleLowerCase());

    let currentQuotes = searchQuotes(searchInputTxt);
    CURRENT_QUOTES = [...currentQuotes];

    // console.log("from search input function", CURRENT_QUOTES);
    // PrintQuotes(currentQuotes);
})

// ----------------------------------------------
//     function to handle selection of category
// ---------------------------------------------- 
const searchSelection = document.querySelector("#searchSelection");
searchSelection.addEventListener("change", function () {
    // to filter
    let currentQuotes = searchQuotesByCategory(this.value);

    // console.log("from category selection function", currentQuotes);

    PrintQuotes(currentQuotes);
    // console.log(this.value);
});

// ---------------------------------------------- 
//            function to print quotes
// ---------------------------------------------- 

function PrintQuotes(quotes) {
    
    // total qoutes count tag
    const totalTag = document.querySelector("#totalQuotesCount");
    totalTag.innerHTML = `Total Results : ${quotes.length}`;
    // ---------------------------


    // total quotes list
    const quotesDiv = document.getElementById('quotesList');
    quotesDiv.innerHTML = '';
    quotes.forEach(quote => {
        const quoteDiv = document.createElement('div');
        quoteDiv.classList.add('quote');
        quoteDiv.innerHTML = `
            <i class="fa-solid fa-quote-left lft_icn"></i>
        
            <div class="quote-category">
                <hr>
                <h3>${quote.category}</h3>
                <hr>
            </div>
            <div class="quote-text">
                <p>"${quote.quote}"</p>
            </div>
        
            <div class="quote-author">
                <p>- ${quote.author}</p>
            </div>
        `;
        quotesDiv.appendChild(quoteDiv);

    });
};

// to remixArray
function remixArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// printing quotes
const printIt = remixArray(Quotes);
PrintQuotes(printIt.slice(0, 8));