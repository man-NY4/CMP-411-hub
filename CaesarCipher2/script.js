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
function fetchMeat() {
    return __awaiter(this, void 0, void 0, function () {
        var meatFiller, meatAmount, meatType, meatParas, meatLink, newPara, meatData, meatJSON, rawMeat, para, formattedMeat, algoChoice, algo1HTML, algo2HTML, algo1Para, para, cipher1Para, algo2Para, para, cipher2Para;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    meatFiller = document.getElementById("fillerInput").value;
                    meatAmount = document.getElementById("meatInput").value;
                    meatType = "?type=" + meatFiller;
                    meatParas = "&paras=" + meatAmount;
                    meatLink = "https://baconipsum.com/api/" + meatType + meatParas;
                    newPara = "";
                    return [4 /*yield*/, fetch(meatLink)];
                case 1:
                    meatData = _a.sent();
                    return [4 /*yield*/, meatData.json()];
                case 2:
                    meatJSON = _a.sent();
                    rawMeat = document.getElementById("rawMeat");
                    rawMeat.innerHTML = JSON.stringify(meatJSON);
                    // add to formatted meat
                    for (para in meatJSON) {
                        newPara += '<p>' + meatJSON[para] + '</p>';
                    }
                    formattedMeat = document.getElementById("formattedMeat");
                    formattedMeat.innerHTML = newPara;
                    algoChoice = document.getElementById("algoInput").value;
                    algo1HTML = document.getElementById("algo1");
                    algo1HTML.innerHTML = "";
                    algo2HTML = document.getElementById("algo2");
                    algo2HTML.innerHTML = "";
                    if (algoChoice === "Algo1") {
                        algo1Para = "";
                        for (para in meatJSON) {
                            algo1Para += '<p>' + meatJSON[para] + '</p>';
                        }
                        cipher1Para = algo1(algo1Para);
                        algo1HTML.innerHTML = cipher1Para;
                    }
                    if (algoChoice === "Algo2") {
                        algo2Para = "";
                        for (para in meatJSON) {
                            algo2Para += "<p>" + meatJSON[para] + '</p>';
                        }
                        cipher2Para = algo2(algo2Para);
                        algo2HTML.innerHTML = cipher2Para;
                    }
                    return [2 /*return*/, true]; // just in case
            }
        });
    });
}
//atbash cipher (basically reverses the alphabet)
function algo1(str) {
    var reverseAlpha = {};
    // chatgpt made the for loop code below for reversing
    // goes through lowercase ASCII values and reverses them
    for (var i = 0; i < 26; i++) {
        var lower = String.fromCharCode(97 + i);
        var reverseLower = String.fromCharCode(122 - i);
        reverseAlpha[lower] = reverseLower;
    }
    // same as upper case but for uppercase letters instead
    for (var i = 0; i < 26; i++) {
        var upper = String.fromCharCode(65 + i);
        var reverseUpper = String.fromCharCode(90 - i);
        reverseAlpha[upper] = reverseUpper;
    }
    // actually encrypt
    var encryptStr = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        encryptStr += reverseAlpha[char] || char; // the second part is just in case not a letter (like '-' in T-bone)
    }
    return encryptStr;
}
// morse code cipher
function algo2(str) {
    str = str.replace(/<[^>]+>/g, ""); // needed so that it doesn't also translte the <p> element
    // chatgpt made the object
    var morse = {
        // Letters A–Z (case-insensitive — same morse code for both upper and lower)
        A: ".-", a: ".-",
        B: "-...", b: "-...",
        C: "-.-.", c: "-.-.",
        D: "-..", d: "-..",
        E: ".", e: ".",
        F: "..-.", f: "..-.",
        G: "--.", g: "--.",
        H: "....", h: "....",
        I: "..", i: "..",
        J: ".---", j: ".---",
        K: "-.-", k: "-.-",
        L: ".-..", l: ".-..",
        M: "--", m: "--",
        N: "-.", n: "-.",
        O: "---", o: "---",
        P: ".--.", p: ".--.",
        Q: "--.-", q: "--.-",
        R: ".-.", r: ".-.",
        S: "...", s: "...",
        T: "-", t: "-",
        U: "..-", u: "..-",
        V: "...-", v: "...-",
        W: ".--", w: ".--",
        X: "-..-", x: "-..-",
        Y: "-.--", y: "-.--",
        Z: "--..", z: "--..",
        // Punctuation
        ".": ".-.-.-",
        ",": "--..--",
        "-": "-....-",
        " ": "/" // space between words in Morse
    };
    // similar to prev algo
    var encryptStr = "";
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var char = str_2[_i];
        if (morse[char]) { // check so that if letter in can be translated else just make it empty
            encryptStr += morse[char] + " "; // this is here to add a space after each letter to differentiate letters
        }
        else {
            encryptStr += "";
        }
    }
    return encryptStr;
}
