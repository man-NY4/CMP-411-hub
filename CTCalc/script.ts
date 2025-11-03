async function fetchNum() {
    let begRange = (<HTMLInputElement>document.getElementById("begRange")).value;
    let endRange = (<HTMLInputElement>document.getElementById("endRange")).value;
    let userNum = (<HTMLInputElement>document.getElementById("numInput")).value;

    // Validate user input
    let beg: number = parseInt(begRange);
    let end: number = parseInt(endRange);
    let num: number = parseInt(userNum);
    
    if (isNaN(beg) || isNaN(end) || isNaN(num)) {
        alert("Please enter valid numbers for the range and the number.");
        return false;
    }
    if (beg >= end) {
        alert("The beginning of the range must be less than the end.");
        return false;
    }
    if (num < beg || num > end) {
        alert("The number must be within the specified range.");
        return false;
    }

    let numPara = <HTMLElement>document.getElementById("numPara");
    numPara.innerHTML +=  num + '<br>';  

    let meanPara = <HTMLElement>document.getElementById("meanNum");
    
    meanPara.innerHTML = "Mean: " + num;

    let medianPara = <HTMLElement>document.getElementById("medianNum");
    medianPara.innerHTML = "Median: " + num;

    let modePara = <HTMLElement>document.getElementById("modeNum");
    modePara.innerHTML = "Mode: " + num;
    
    

    // // gets the number into format to make it easier for later    
    // let begParam: string = "?min=" + begRange;
    // let endParam: string = "&max=" + endRange;

    // let numLink: string = "http://www.randomnumberapi.com/api/v1.0/random" + begParam + endParam; // get the api link
    // let newPara: string = ""; // make a placeholder para for the loop to get the para formatted

    // let numData: Response = await fetch(numLink); // fetch call
    // let numJSON: Record<string, string> = await numData.json(); // make JSON

    // // raw JSON 
    // let numPara = <HTMLElement>document.getElementById("numPara")
    // numPara.innerHTML = JSON.stringify(numJSON); 
    
    // // add to ct
    // for (const para in numJSON) {
    //     newPara += '<p>' + numJSON[para] + '</p>';
    // }
    // let ctPara = <HTMLElement>document.getElementById("medianPara");
    // ctPara.innerHTML= newPara;

    return true; // just in case
}