async function fetchNum() {
    let begRange = (<HTMLInputElement>document.getElementById("begRange")).value;
    let endRange = (<HTMLInputElement>document.getElementById("endRange")).value;

    // gets the number into format to make it easier for later    
    let begParam: string = "?min=" + begRange;
    let endParam: string = "&max=" + endRange;

    let numLink: string = "http://www.randomnumberapi.com/api/v1.0/random" + begParam + endParam; // get the api link
    let newPara: string = ""; // make a placeholder para for the loop to get the para formatted

    let numData: Response = await fetch(numLink); // fetch call
    let numJSON: Record<string, string> = await numData.json(); // make JSON

    // raw JSON 
    let numPara = <HTMLElement>document.getElementById("numPara")
    numPara.innerHTML = JSON.stringify(numJSON); 
    
    // add to ct
    for (const para in numJSON) {
        newPara += '<p>' + numJSON[para] + '</p>';
    }
    let ctPara = <HTMLElement>document.getElementById("medianPara");
    ctPara.innerHTML= newPara;

    return true; // just in case
}