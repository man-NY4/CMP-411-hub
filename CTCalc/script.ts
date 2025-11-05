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
    if (beg > end) {
        alert("The beginning of the range must be less than the end.");
        return false;
    }
    if (num < beg || num > end) {
        alert("The number must be within the specified range.");
        return false;
    }
    let numPara = <HTMLElement>document.getElementById("numPara");
    numPara.innerHTML +=  num + '<br>';

    let numbers: number[] = [];
    numbers.push(num);
    alert(numbers);

    let meanPara = <HTMLElement>document.getElementById("meanNum");
    meanPara.innerHTML = "Mean: " + num;

    let medianPara = <HTMLElement>document.getElementById("medianNum");
    medianPara.innerHTML = "Median: " + num;

    let modePara = <HTMLElement>document.getElementById("modeNum");
    modePara.innerHTML = "Mode: " + num;
    
    return true; // just in case
}

function clearNums() {
    let numPara = <HTMLElement>document.getElementById("numPara");
    numPara.innerHTML = "";

    let meanPara = <HTMLElement>document.getElementById("meanNum");
    meanPara.innerHTML = "Mean: ";

    let medianPara = <HTMLElement>document.getElementById("medianNum");
    medianPara.innerHTML = "Median: ";

    let modePara = <HTMLElement>document.getElementById("modeNum");
    modePara.innerHTML = "Mode: ";

}