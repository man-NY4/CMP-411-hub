async function fetchTETRIO() {
    var _a;
    const leaderboardChoice = document.getElementById("leaderboard").value;
    // gets the leaderboard into format to make it easier for later    
    const leaderboardType = "users/by/" + leaderboardChoice;
    const tetrioLink = "https://ch.tetr.io/api/" + leaderboardType; // get the api link
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(tetrioLink)}`; // proxy to avoid CORS
    const response = await fetch(url);
    const leaderboardData = await response.json(); // make JSON
    const leaderboard = document.getElementById("leaderboardPara");
    //easier error handling
    if (!leaderboardData.success || !((_a = leaderboardData.data) === null || _a === void 0 ? void 0 : _a.entries)) {
        leaderboard.innerHTML = "Could not load leaderboard";
        return;
    }
    // get top 20 users into readable format
    const users = leaderboardData.data.entries.slice(0, 20);
    let htmlTable = `<table style="border-collapse: collapse; width: 100%;">
            <tr>
                <th style="border: 2px solid black; padding: 2px;">#</th>
                <th style="border: 2px solid black; padding: 2px;">Username</th>
                <th style="border: 2px solid black; padding: 2px;">Games Played</th>
                <th style="border: 2px solid black; padding: 2px;">Games Won</th>
                <th style="border: 2px solid black; padding: 2px;">Score</th>
            </tr>`;
    users.forEach((user, index) => {
        var _a, _b, _c, _d;
        let valueToShow = "N/A";
        if (leaderboardChoice === "league") {
            valueToShow = (_b = (_a = user.league) === null || _a === void 0 ? void 0 : _a.rank) !== null && _b !== void 0 ? _b : "N/A";
        }
        else if (leaderboardChoice === "xp") {
            valueToShow = (_c = user.xp) !== null && _c !== void 0 ? _c : "N/A";
        }
        else if (leaderboardChoice === "ar") {
            valueToShow = (_d = user.ar) !== null && _d !== void 0 ? _d : "N/A";
        }
        htmlTable +=
            `<tr>
                <td>${index + 1}</td>
                <td>${user.username}</td>
                <td>${user.league.gamesplayed}</td>
                <td>${user.league.gameswon}</td>
                <td>${valueToShow}</td>
            </tr>`;
    });
    htmlTable += `</table>`;
    leaderboard.innerHTML = htmlTable;
}
async function fetchUser() {
    var _a, _b, _c;
    const userName = document.getElementById("username").value;
    if (!userName) {
        alert("Please enter a username");
        return false;
    }
    const summaryChoice = document.getElementById("summaryType").value;
    // put username and summary type into format to make it easier for later
    const userType = "users/" + userName + "/summaries/" + summaryChoice;
    const tetrioLink = "https://ch.tetr.io/api/" + userType; // get the api link
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(tetrioLink)}`; // proxy to avoid CORS
    const response = await fetch(url);
    const userData = await response.json();
    const userSummary = document.getElementById("userPara");
    if (!userData.success || !userData.data) {
        userSummary.innerHTML = "Could not load user data";
        return;
    }
    const record = userData.data.record; // summary data
    const rank = userData.data.rank; // user rank is separate in the json
    if (!record) {
        userSummary.innerHTML = "No summary data available for this user.";
        return;
    }
    // results usually split into .aggregatestats and .stats
    const results = (_a = record.results) !== null && _a !== void 0 ? _a : {};
    const agg = (_b = results.aggregatestats) !== null && _b !== void 0 ? _b : {};
    const stats = (_c = results.stats) !== null && _c !== void 0 ? _c : {};
    // helper safe getters
    const getScore = () => { var _a, _b, _c; return (_c = (_b = (_a = stats.score) !== null && _a !== void 0 ? _a : agg.vsscore) !== null && _b !== void 0 ? _b : record.score) !== null && _c !== void 0 ? _c : "N/A"; };
    const getPPS = () => { var _a, _b; return (_b = (_a = agg.pps) !== null && _a !== void 0 ? _a : stats.pps) !== null && _b !== void 0 ? _b : "N/A"; };
    const getFinalTime = () => { var _a, _b, _c; return (_c = (_b = (_a = stats.finaltime) !== null && _a !== void 0 ? _a : agg.finaltime) !== null && _b !== void 0 ? _b : record.finaltime) !== null && _c !== void 0 ? _c : "N/A"; };
    const getPieces = () => { var _a, _b; return (_b = (_a = stats.piecesplaced) !== null && _a !== void 0 ? _a : record.piecesplaced) !== null && _b !== void 0 ? _b : "N/A"; };
    const getLines = () => { var _a, _b; return (_b = (_a = stats.lines) !== null && _a !== void 0 ? _a : record.lines) !== null && _b !== void 0 ? _b : "N/A"; };
    const getLevel = () => { var _a, _b; return (_b = (_a = stats.level) !== null && _a !== void 0 ? _a : record.level) !== null && _b !== void 0 ? _b : "N/A"; };
    const getKills = () => { var _a, _b; return (_b = (_a = stats.kills) !== null && _a !== void 0 ? _a : record.kills) !== null && _b !== void 0 ? _b : "N/A"; };
    // getting the summary into readable format
    let summaryHTML = `<strong>User: </strong>${userName}<br><br>`;
    summaryHTML += `<strong>Rank:</strong> ${rank}<br><br>`;
    if (summaryChoice === "40l") {
        summaryHTML +=
            `<strong>40 Lines Summary:</strong><br>
            Time: ${formatTime(getFinalTime())}<br>
            PPS: ${formatPPS(getPPS())}<br>
            Pieces: ${getPieces()}<br>
            Lines: ${getLines()}<br>`;
    }
    else if (summaryChoice === "blitz") {
        summaryHTML +=
            `<strong>Blitz Summary:</strong><br>
            Score: ${getScore()}<br>
            Lines Cleared: ${getLines()}<br>
            Level: ${getLevel()}<br>
            PPS: ${formatPPS(getPPS())}<br>
            Pieces: ${getPieces()}<br>`;
    }
    else if (summaryChoice === "zenith") {
        summaryHTML +=
            `<strong>Quickplay Summary:</strong><br>
            Score: ${getScore()}<br>
            Time: ${formatTime(getFinalTime())}<br>
            Lines Cleared: ${getLines()}<br>
            PPS: ${formatPPS(getPPS())}<br>
            Pieces: ${getPieces()}<br>
            Kills: ${getKills()}<br>`;
    }
    userSummary.innerHTML = summaryHTML;
}
function formatTime(ms) {
    if (ms == null || isNaN(Number(ms)))
        return "N/A";
    ms = Number(ms);
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = ms % 1000;
    return `${minutes}:${seconds.toString().padStart(2, "0")}.${millis
        .toString()
        .padStart(3, "0")}`;
}
function formatPPS(pps) {
    if (pps == null || isNaN(Number(pps)))
        return "N/A";
    return Number(pps).toFixed(2);
}
