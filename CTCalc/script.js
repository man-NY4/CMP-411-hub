var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchNum() {
    return __awaiter(this, void 0, void 0, function () {
        var begRange, endRange, userNum, beg, end, num, numPara, meanPara, medianPara, modePara;
        return __generator(this, function (_a) {
            begRange = document.getElementById("begRange").value;
            endRange = document.getElementById("endRange").value;
            userNum = document.getElementById("numInput").value;
            beg = parseInt(begRange);
            end = parseInt(endRange);
            num = parseInt(userNum);
            if (isNaN(beg) || isNaN(end) || isNaN(num)) {
                alert("Please enter valid numbers for the range and the number.");
                return [2 /*return*/, false];
            }
            if (beg >= end) {
                alert("The beginning of the range must be less than the end.");
                return [2 /*return*/, false];
            }
            if (num < beg || num > end) {
                alert("The number must be within the specified range.");
                return [2 /*return*/, false];
            }
            numPara = document.getElementById("numPara");
            numPara.innerHTML += num + '<br>';
            meanPara = document.getElementById("meanNum");
            meanPara.innerHTML = "Mean: " + num;
            medianPara = document.getElementById("medianNum");
            medianPara.innerHTML = "Median: " + num;
            modePara = document.getElementById("modeNum");
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
            return [2 /*return*/, true]; // just in case
        });
    });
}
