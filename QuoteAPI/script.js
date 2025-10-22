async function fetchQuote() {
    let meatFiller = document.getElementById("fillerInput").value; // 
    let meatAmount = document.getElementById("meatInput").value; // 

    // gets the number into format to make it easier for later    
    minLen = "?minLength=" + meatFiller;
    maxLen = "&maxLength=" + meatAmount;

    let quoteLink = "https://api.quotable.io/quotes/random" + meatFiller + meatAmount; // get the api link
    let newPara = ""; // make a placeholder para for the loop to get the para formatted

    let meatData = await fetch(meatLink); // 
    let meatJSON = await meatData.json(); // 
    
    // add to quote format
    for (para in meatJSON) {
        newPara += '<p>' + meatJSON[para] + '</p>';
    }
    document.getElementById("formattedMeat").innerHTML = newPara;
    
    return true; // just in case
}