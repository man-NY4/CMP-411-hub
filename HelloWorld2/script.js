function welcomeUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var welcome = document.getElementById("welcome");
    if (firstName && lastName && welcome) {
        welcome.innerText = "Welcome again, " + firstName + " " + lastName + "!";
    }
}
