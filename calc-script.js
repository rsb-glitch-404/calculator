const buttons = document.querySelectorAll(".button")


buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#515151"
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = ''
    });
});