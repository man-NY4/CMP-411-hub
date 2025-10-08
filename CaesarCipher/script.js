async function fetchMeat() {
    let meatFiller = document.getElementById("fillerInput").value; // filler or no filler
    let meatAmount = document.getElementById("meatInput").value; // how much meat

    meatFiller = "?type=" + meatFiller;
    meatAmount = "&paras=" + meatAmount;
    // code above gets the filler and number into format to make it easier for later

    let meatLink = "https://baconipsum.com/api/" + meatFiller + meatAmount; // get the api link
    let newPara = ""; // make a placeholder para for the loop to get the para formatted

    let meatData = await fetch(meatLink); // fetch call
    let meatJSON = await meatData.json(); // make meat JSON

    document.getElementById("rawMeat").innerHTML = JSON.stringify(meatJSON); // stringify so that the meat shows up in JSON format in rawMEAT
    for (para in meatJSON) { // para indexes for some reason
        newPara += '<p>' + meatJSON[para] + '</p>'; // append or add meat JSON to a placeholder paragraph
        document.getElementById("formattedMeat").innerHTML = newPara; // actually add it to the formattedMeat paragraph
    }

    return true; // just in case
}

function algo1() { //atbash cipher (basically reverses the alphabet)
    const reverseAlpha = new Map();

    for (let i = 0; i < 26; i++) { // goes through lowercase ASCII values and puts them into the map as key value pairs
        const lower = String.fromCharCode(97 + i);
        const reverseLower = String.fromCharCode(122 - i);
        reverseAlpha.set(lower, reverseLower);
    } // lowercase for loop

    for (let i = 0; i < 26; i++) { // same as upper case but for uppercase letters instead
        const upper = String.fromCharCode(65 + i);     
        const reverseUpper = String.fromCharCode(90 - i);
        reverseAlpha.set(upper, reverseUpper);
    } // uppercase for loop


}

function algo2() {

}