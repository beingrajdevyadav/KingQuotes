
// ---------------------------------------------- 
//        importing Quotes from data.js file
// ---------------------------------------------- 

import Quotes from './data.js';


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



// ---------------------------------------------- 
//          Search Button Functionality
// ---------------------------------------------- 

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", function () {
    
    // console.log("clicked -", this);
    let searchInputTxt = document.querySelector('#searchInput').value;
    // console.log(searchInput.value.trim().toLocaleLowerCase());
    if (searchInputTxt === '') {
        showToast("Please enter a search term.");
        return;
    }
    let currentQuotes = searchQuotes(searchInputTxt);
    
    // to show toast notification
    showToast(` ${searchInputTxt} Quotes.`);
    PrintQuotes(currentQuotes);
})

// ----------------------------------------------
//     function to handle selection of category
// ---------------------------------------------- 
const searchSelection = document.querySelector("#searchSelection");
searchSelection.addEventListener("change", function () {
    // to filter
    let currentQuotes = searchQuotesByCategory(this.value);

    // console.log("from category selection function", currentQuotes);

    // to show toast notification
    showToast(` ${this.value} Quotes.`);
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

// ---------------------------------------------- 
//              to remixArray
// ---------------------------------------------- 

function remixArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ---------------------------------------------- 
//              printing quotes
// ---------------------------------------------- 

const printIt = remixArray(Quotes);
PrintQuotes(printIt.slice(0,8));


// ---------------------------------------------- 
// toast notifications
// ---------------------------------------------- 
function showToast(message){
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.classList.add("toast");

    toast.innerHTML = `
        <i class="fa-solid fa-bell"></i>
    <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // show the toast for 3 seconds
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

   

    // remove the toast after 3 seconds
    setTimeout(()=>{
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 1000);
    }, 3000);
}

// on button click
const toastBtn = document.getElementById("shwbtn");
toastBtn.addEventListener("click", ()=>{
    showToast("This is a toast notification");
})