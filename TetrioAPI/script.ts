async function fetchTETRIO() { // need to use "tsc script.ts --target es2017 --lib es2017,dom" to compile
    const leaderboardChoice = (<HTMLInputElement>document.getElementById("leaderboard")).value;

    // gets the leaderboard into format to make it easier for later    
    const leaderboardType: string = "users/by/" + leaderboardChoice;
    const tetrioLink: string = "https://ch.tetr.io/api/" + leaderboardType; // get the api link
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(tetrioLink)}`; // proxy to avoid CORS

    const response: Response = await fetch(url);
    const leaderboardData: Record<string, any> = await response.json(); // make JSON

    const leaderboard = <HTMLElement>document.getElementById("leaderboardPara");

    //easier error handling
    if(!leaderboardData.success || !leaderboardData.data?.entries) {
        leaderboard.innerHTML = "Could not load leaderboard";
        return;
    }

    // get top 20 users into readable format
    const users: Array<Record<string, any>> = leaderboardData.data.entries.slice(0, 20);

    let htmlTable = 
        `<table style="border-collapse: collapse; width: 100%;">
            <tr>
                <th style="border: 2px solid black; padding: 2px;">#</th>
                <th style="border: 2px solid black; padding: 2px;">Username</th>
                <th style="border: 2px solid black; padding: 2px;">Games Played</th>
                <th style="border: 2px solid black; padding: 2px;">Games Won</th>
                <th style="border: 2px solid black; padding: 2px;">Score</th>
            </tr>`;
    
    users.forEach((user: any, index: number) => {
        let valueToShow: string | number = "N/A";

        if (leaderboardChoice === "league") {
            const rank = user.league?.rank ?? "N/A";
            const tr = user.league?.tr != null ? Number(user.league.tr).toFixed(2) : "N/A";
            valueToShow = `${rank} (${tr})`; // Show rank and TR together
        } else if (leaderboardChoice === "xp") {
            valueToShow = user.xp ?? "N/A";
        } else if (leaderboardChoice === "ar") {
            valueToShow = user.ar ?? "N/A";
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
    const userName = (<HTMLInputElement>document.getElementById("username")).value;
    if (!userName) {
        alert("Please enter a username");
        return false;
    }
    const summaryChoice = (<HTMLInputElement>document.getElementById("summaryType")).value;

    // put username and summary type into format to make it easier for later
    const userType: string = "users/" + userName + "/summaries/" + summaryChoice;
    const tetrioLink: string = "https://ch.tetr.io/api/" + userType; // get the api link
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(tetrioLink)}`; // proxy to avoid CORS

    const response: Response = await fetch(url);
    const userData: Record<string, any> = await response.json();

    const userSummary = <HTMLElement>document.getElementById("userPara");

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
    const results = record.results ?? {};
    const agg = results.aggregatestats ?? {};
    const stats = results.stats ?? {};

    // helper safe getters
    const getScore = () => stats.score ?? agg.vsscore ?? record.score ?? "N/A";
    const getPPS = () => agg.pps ?? stats.pps ?? "N/A";
    const getFinalTime = () => stats.finaltime ?? agg.finaltime ?? record.finaltime ?? "N/A";
    const getPieces = () => stats.piecesplaced ?? record.piecesplaced ?? "N/A";
    const getLines = () => stats.lines ?? record.lines ?? "N/A";
    const getLevel = () => stats.level ?? record.level ?? "N/A";
    const getKills = () => stats.kills ?? record.kills ?? "N/A";

    // getting the summary into readable format
    let summaryHTML = `<strong>User: </strong>${userName}<br><br>`;
    summaryHTML += `<strong>Rank:</strong> ${rank}<br><br>`;

    if (summaryChoice === "40l") {
        summaryHTML +=
            `<strong>40 Lines Summary:</strong><br>
            Time: ${formatTime(getFinalTime())}<br>
            PPS: ${formatPPS(getPPS())}<br>
            Pieces: ${getPieces()}<br>`;
    } else if (summaryChoice === "blitz") {
        summaryHTML +=
            `<strong>Blitz Summary:</strong><br>
            Score: ${getScore()}<br>
            Lines Cleared: ${getLines()}<br>
            Level: ${getLevel()}<br>
            PPS: ${formatPPS(getPPS())}<br>
            Pieces: ${getPieces()}<br>`;
    } else if (summaryChoice === "zenith") {
        const altitude = record.results?.stats?.zenith?.altitude != null ? Number(record.results.stats.zenith.altitude).toFixed(2) : "N/A";

        summaryHTML +=
            `<strong>Quickplay Summary:</strong><br>
            Score: ${getScore()}<br>
            Altitude: ${altitude} m<br>
            Time: ${formatTime(getFinalTime())}<br>
            Lines Cleared: ${getLines()}<br>
            PPS: ${formatPPS(getPPS())}<br>
            Pieces: ${getPieces()}<br>
            Kills: ${getKills()}<br>`;
    } 
    userSummary.innerHTML = summaryHTML;
}

function formatTime(ms: number | string | null | undefined): string {
    if (ms == null || isNaN(Number(ms))) return "N/A";

    ms = Number(ms);

    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis  = ms % 1000;

    return `${minutes}:${seconds.toString().padStart(2, "0")}.${millis
        .toString()
        .padStart(3, "0")}`;
}

function formatPPS(pps: number | string | null | undefined): string {
    if (pps == null || isNaN(Number(pps))) return "N/A";
    return Number(pps).toFixed(2);
}
