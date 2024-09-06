const buttons = document.querySelectorAll(".button")
const settingsButtons = document.querySelectorAll(".settingsButton")


buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#616161"
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = ""
    });
});

settingsButtons.forEach((settingsButton) => {
    settingsButton.addEventListener("mouseover", () => {
        settingsButton.style.backgroundColor = "#EB8A00"
    });

    settingsButton.addEventListener("mouseout", () => {
        settingsButton.style.backgroundColor = ""
    });
});