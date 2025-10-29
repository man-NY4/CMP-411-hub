function welcomeUser() {
    const firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    const lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    const welcome = <HTMLElement>document.getElementById("welcome");
    if (firstName && lastName && welcome) {
        welcome.innerText = "Welcome again, " + firstName + " " + lastName + "!";
    }
}