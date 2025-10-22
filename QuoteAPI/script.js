async function fetchQuote() {
    const qLength = document.getElementById("lengthInput").value; // 

    let minLen = 0;
    let maxLen = 0;

    if (qLength === "short") {
        minLen = 0;
        maxLen = 30;
    } else if (qLength === "medium") {
        minLen = 31;
        maxLen = 100;
    } else if (qLength === "long") {
        minLen = 101;
        maxLen = 500;
    }  

    // gets the number into format to make it easier for later  
    let minLink = "?minLength=" + minLen;
    let maxLink = "&maxLength=" + maxLen;

    let quoteLink = "https://api.quotable.io/quotes/random" + minLink + maxLink; // get the api link

    let quoteData = await fetch(quoteLink);
    let quoteJSON = await quoteData.json();
    
    document.getElementById("quote").innerHTML = quoteJSON[0].content;
    document.getElementById("author").innerHTML = quoteJSON[0].author;
    
    return true; // just in case
}