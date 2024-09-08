let operand1 = "";
let operator = "";
let operand2 = "";
let displaySum = "";


const btnNumber = document.querySelectorAll(".numberButton")
const btnOperation = document.querySelectorAll(".operationButton")
const btnSettings = document.querySelectorAll(".settingsButton")
const buttons = document.querySelectorAll("button")

buttons.forEach((key) => {
    key.addEventListener("click", () => {
        userInput = key.textContent
        inputClass = key.className
        console.log(inputClass)
    });
});



function operate(a, sign, b) {

}



// hovering action events
btnNumber.forEach((number) => {
    number.addEventListener("mouseover", () => {
        number.style.backgroundColor = "#616161"
    });

    number.addEventListener("mouseout", () => {
        number.style.backgroundColor = ""
    });
});

btnSettings.forEach((settings) => {
    settings.addEventListener("mouseover", () => {
        settings.style.backgroundColor = "#616161"
    });

    settings.addEventListener("mouseout", () => {
        settings.style.backgroundColor = ""
    });
});

btnOperation.forEach((operation) => {
    operation.addEventListener("mouseover", () => {
        operation.style.backgroundColor = "#EB8A00"
    });

    operation.addEventListener("mouseout", () => {
        operation.style.backgroundColor = ""
    });
});


/*
i want the operations to occur instantly, no waiting for a full expression - this way i dont have to worry about order of operations.

if every sign calls the operate button, then the first press will be null since operand2 is null at the start
if i give it a decoy value of 0, then if i press x or divide the first try itll crash
a null boolean check should be good enough, if operation is pressed and operand2 = null return immedieately, otherwise execute the function.
hey i did it =)

*/