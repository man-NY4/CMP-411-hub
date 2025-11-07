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
    let existingNums: string[] = numPara.innerHTML.split('<br>');
    for (let i = 0; i < existingNums.length - 1; i++) {
        let currNum: number = parseInt(existingNums[i]);
        numbers.push(currNum);
    }

    numbers.sort((a, b) => a - b);
    alert(numbers);

    // calc mean
    let meanPara = <HTMLElement>document.getElementById("meanNum");
    let sum: number = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let mean: number = sum / numbers.length;
    meanPara.innerHTML = "Mean: " + mean;

    // calc median
    let medianPara = <HTMLElement>document.getElementById("medianNum");
    let median: number = 0;
    if (numbers.length % 2 === 0) {
        let mid1: number = numbers[(numbers.length / 2) - 1];
        let mid2: number = numbers[numbers.length / 2];
        median = (mid1 + mid2) / 2;
    } else {
        median = numbers[Math.floor(numbers.length / 2)];
    }
    medianPara.innerHTML = "Median: " + median;

    return true; // just in case
}

function clearNums() {
    let numPara = <HTMLElement>document.getElementById("numPara");
    numPara.innerHTML = "";

    let meanPara = <HTMLElement>document.getElementById("meanNum");
    meanPara.innerHTML = "Mean: ";

    let medianPara = <HTMLElement>document.getElementById("medianNum");
    medianPara.innerHTML = "Median: ";
}