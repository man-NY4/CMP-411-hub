async function fetchMeat() {
    let meatPara = document.getElementById("meatInput").value;
    let meatLink = "https://baconipsum.com/api/?type=all-meat&paras=" + meatPara;
    let newPara = "";

    let meatData = await fetch(meatLink);

    let meatJSON = await meatData.json();

    document.getElementById("rawMeat").innerHTML = JSON.stringify(meatJSON);

    for (para in meatJSON) {
        newPara += '<p>' + meatJSON[para] + '</p>';
        document.getElementById("formattedMeat").innerHTML = newPara;
    }

    return true;
}