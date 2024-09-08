let operand1 = "";
let operator = "";
let operand2 = "";
let displaySum = "";


const buttons = document.querySelectorAll(".button")
const settingsButtons = document.querySelectorAll(".settingsButton")

buttons.forEach((key) => {
    key.addEventListener("click", () => {
        console.log(key.textContent)
    });
});



function operate(a, sign, b) {

}



// hovering action events
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


/*
i want the operations to occur instantly, no waiting for a full expression - this way i dont have to worry about order of operations.

if every sign calls the operate button, then the first press will be null since operand2 is null at the start
if i give it a decoy value of 0, then if i press x or divide the first try itll crash
a null boolean check should be good enough, if operation is pressed and operand2 = null return immedieately, otherwise execute the function.
hey i did it =)

*/