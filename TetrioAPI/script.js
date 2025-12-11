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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const userName = document.getElementById("username").value;
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
    const summary = userData.data; // summary data
    // format the summary data into readable HTML
    let summaryHTML = `<strong>User: </strong>${userName}<br><br>`;
    if (summaryChoice === "40l") {
        summaryHTML +=
            `<strong>40 Lines Summary:</strong><br>
            Score: ${(_a = summary.score) !== null && _a !== void 0 ? _a : "N/A"}<br>
            Time: ${(_b = summary.finaltime) !== null && _b !== void 0 ? _b : "N/A"} seconds<br>
            PPS: ${(_c = summary.pps) !== null && _c !== void 0 ? _c : "N/A"}<br>
            Pieces: ${(_d = summary.piecesplaced) !== null && _d !== void 0 ? _d : "N/A"}<br>
            Rank: ${(_e = summary.rank) !== null && _e !== void 0 ? _e : "N/A"}<br>`;
    }
    else if (summaryChoice === "blitz") {
        summaryHTML +=
            `<strong>Blitz Summary:</strong><br>
            Score: ${(_f = summary.score) !== null && _f !== void 0 ? _f : "N/A"}<br>
            Lines Cleared: ${(_g = summary.lines) !== null && _g !== void 0 ? _g : "N/A"}<br>
            Level: ${(_h = summary.level) !== null && _h !== void 0 ? _h : "N/A"}<br>
            PPS: ${(_j = summary.pps) !== null && _j !== void 0 ? _j : "N/A"}<br>
            Pieces: ${(_k = summary.piecesplaced) !== null && _k !== void 0 ? _k : "N/A"}<br>
            Rank: ${(_l = summary.rank) !== null && _l !== void 0 ? _l : "N/A"}<br>`;
    }
    else if (summaryChoice === "zenith") {
        summaryHTML +=
            `<strong>Quickplay Summary:</strong><br>
            Score: ${(_m = summary.score) !== null && _m !== void 0 ? _m : "N/A"}<br>
            Time: ${(_o = summary.finaltime) !== null && _o !== void 0 ? _o : "N/A"} seconds<br>
            Lines Cleared: ${(_p = summary.lines) !== null && _p !== void 0 ? _p : "N/A"}<br>
            PPS: ${(_q = summary.pps) !== null && _q !== void 0 ? _q : "N/A"}<br>
            Pieces: ${(_r = summary.piecesplaced) !== null && _r !== void 0 ? _r : "N/A"}<br>
            Kills: ${(_s = summary.kills) !== null && _s !== void 0 ? _s : "N/A"}<br>
            Rank: ${(_t = summary.rank) !== null && _t !== void 0 ? _t : "N/A"}<br>`;
    }
    userSummary.innerHTML = summaryHTML;
}
