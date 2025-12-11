async function fetchTETRIO() {
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
            valueToShow = user.league?.rank ?? "N/A";
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

    const summary = userData.data; // summary data

    // format the summary data into readable HTML
    let summaryHTML = `<strong>User: </strong>${userName}<br><br>`;

    if (summaryChoice === "40l") {
        summaryHTML +=
            `<strong>40 Lines Summary:</strong><br>
            Score: ${summary.score ?? "N/A"}<br>
            Time: ${summary.finaltime ?? "N/A"} seconds<br>
            PPS: ${summary.pps ?? "N/A"}<br>
            Pieces: ${summary.piecesplaced ?? "N/A"}<br>
            Rank: ${summary.rank ?? "N/A"}<br>`;
    } else if (summaryChoice === "blitz") {
        summaryHTML += 
            `<strong>Blitz Summary:</strong><br>
            Score: ${summary.score ?? "N/A"}<br>
            Lines Cleared: ${summary.lines ?? "N/A"}<br>
            Level: ${summary.level ?? "N/A"}<br>
            PPS: ${summary.pps ?? "N/A"}<br>
            Pieces: ${summary.piecesplaced ?? "N/A"}<br>
            Rank: ${summary.rank ?? "N/A"}<br>`;
    } else if (summaryChoice === "zenith") {
        summaryHTML +=
            `<strong>Quickplay Summary:</strong><br>
            Score: ${summary.score ?? "N/A"}<br>
            Time: ${summary.finaltime ?? "N/A"} seconds<br>
            Lines Cleared: ${summary.lines ?? "N/A"}<br>
            PPS: ${summary.pps ?? "N/A"}<br>
            Pieces: ${summary.piecesplaced ?? "N/A"}<br>
            Kills: ${summary.kills ?? "N/A"}<br>
            Rank: ${summary.rank ?? "N/A"}<br>`;
    }
    userSummary.innerHTML = summaryHTML;
}