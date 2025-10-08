async function fetchMeat() {
    let meatFiller = document.getElementById("fillerInput").value; // filler or no filler
    let meatAmount = document.getElementById("meatInput").value; // how much meat

    // gets the filler and number into format to make it easier for later    
    meatFiller = "?type=" + meatFiller;
    meatAmount = "&paras=" + meatAmount;

    let meatLink = "https://baconipsum.com/api/" + meatFiller + meatAmount; // get the api link
    let newPara = ""; // make a placeholder para for the loop to get the para formatted

    let meatData = await fetch(meatLink); // fetch call
    let meatJSON = await meatData.json(); // make meat JSON

    // raw JSON format in rawMEAT
    document.getElementById("rawMeat").innerHTML = JSON.stringify(meatJSON); 
    
    // add to formatted meat
    for (para in meatJSON) {
        newPara += '<p>' + meatJSON[para] + '</p>';
    }
    document.getElementById("formattedMeat").innerHTML = newPara;

    // add to algo1 encryption para
    let algo1Para = "";
    for (para in meatJSON) {
        algo1Para += '<p>' + meatJSON[para] + '</p>';
    }
    let cipher1Para = algo1(algo1Para);
    document.getElementById("algo1").innerHTML = cipher1Para;

    let algo2Para = "";
    for(para in meatJSON) {
        algo2Para += "<p>" + meatJSON[para] + '</p>';
    }
    let cipher2Para = algo2(algo2Para);
    document.getElementById("algo2").innerHTML = cipher2Para;

    return true; // just in case
}

//atbash cipher (basically reverses the alphabet)
function algo1(str) { 
    const reverseAlpha = {};
    
    // chatgpt made the for loop code below for reversing

    // goes through lowercase ASCII values and reverses them
    for (let i = 0; i < 26; i++) {
        const lower = String.fromCharCode(97 + i);
        const reverseLower = String.fromCharCode(122 - i);
        reverseAlpha[lower] = reverseLower;
    } 

    // same as upper case but for uppercase letters instead
    for (let i = 0; i < 26; i++) { 
        const upper = String.fromCharCode(65 + i);     
        const reverseUpper = String.fromCharCode(90 - i);
        reverseAlpha[upper] = reverseUpper;
    }

    // actually encrypt
    let encryptStr = ""
    for (const char of str) {
        encryptStr += reverseAlpha[char] || char; // the second part is just in case not a letter (like '-' in T-bone)
    }

    return encryptStr;
}

// morse code cipher
function algo2(str) {

}