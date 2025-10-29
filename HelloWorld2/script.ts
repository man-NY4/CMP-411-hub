function welcomeUser() {
    const firstName = document.getElementById("firstName") as HTMLInputElement | null;
    const lastName = document.getElementById("lastName") as HTMLInputElement | null;
    const welcome = document.getElementById("welcome") as HTMLElement | null;
    if (firstName && lastName && welcome) {
        const firstNameInput: String = firstName.value;
        const lastNameInput: String = lastName.value;
        welcome.innerText = "Welcome, " + firstNameInput + " " + lastNameInput + "!";
    }
}