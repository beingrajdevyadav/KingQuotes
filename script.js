// importing Quotes from data.js file
import Quotes from './data.js';

// Input Search Quotes Function
function searchQuotes(txt) {
    return Quotes.filter(item =>
        item.quote.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) || item.author.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) || item.category.toLocaleLowerCase().includes(txt.toLocaleLowerCase())
    )
}

// --------------------------------------
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", function(){
    // console.log("clicked -", this);

    let searchInputTxt = document.querySelector('#searchInput').value ;
    // console.log(searchInput.value.trim().toLocaleLowerCase());

  let currentQuotes =  searchQuotes(searchInputTxt);
//   console.log(currentQuotes)
    PrintQuotes(currentQuotes);
})


// function to print quotes
function PrintQuotes(quotes){
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

 } );
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