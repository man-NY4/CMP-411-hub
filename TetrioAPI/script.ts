async function fetchTETRIO() {
    let leaderboardChoice = (<HTMLInputElement>document.getElementById("leaderboard")).value;

    // gets the leaderboard into format to make it easier for later    
    let leaderboardType: string = "users/by/" + leaderboardChoice;

    

    let tetrioLink: string = "https://ch.tetr.io/api/" + leaderboardType; // get the api link
    
    let proxy = "https://corsproxy.io/?";
    let url = proxy + encodeURIComponent(tetrioLink);

    let leaderboardData: Response = await fetch(url);

    let leaderboardJSON: Record<string, string> = await leaderboardData.json(); // make JSON

    // raw JSON format
    let leaderboard = <HTMLElement>document.getElementById("leaderboardPara");
    leaderboard.innerHTML = JSON.stringify(leaderboardJSON); 
    
    return true; // just in case
}