async function fetchMeat() {
    let meatPara = document.getElementById("meatInput").value; // how much meat
    let meatLink = "https://baconipsum.com/api/?type=all-meat&paras=" + meatPara; // get the api link
    let newPara = ""; // make a placeholder para

    let meatData = await fetch(meatLink); // fetch call
    let meatJSON = await meatData.json(); // make meat JSON

    document.getElementById("rawMeat").innerHTML = JSON.stringify(meatJSON); // stringify so that the meat shows up in JSON format in rawMEAT
    for (para in meatJSON) { // para indexes for some reason
        newPara += '<p>' + meatJSON[para] + '</p>'; // append or add meat JSON to a placeholder paragraph
        document.getElementById("formattedMeat").innerHTML = newPara; // actually add it to the formattedMeat paragraph
    }

    return true; // just in case
}