let operand1 = "";
let operator = "";
let operand2 = "";
let displaySum = "";


const btnNumber = document.querySelectorAll(".numberButton")
const btnOperation = document.querySelectorAll(".operationButton")
const btnSettings = document.querySelectorAll(".settingsButton")
const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display")

buttons.forEach((key) => {
    key.addEventListener("click", () => {
        let userInput = key.textContent
        let inputClass = key.className

        if ((userInput === "=")) {
            if ((operand1 === "") || (operand2 === "") || operator === "") {
                return
            }
            let temp = operator
            operator = ""
            operate(operand1, temp, operand2)
            return
        }

        if ((inputClass === "numberButton") && (operator === "")) {
            if (operand1 !== "") {
                operand1 = operand1 + ""
                // line 30 is because upon pressing =, operand1 isn't a string so just a quick fix to make it a string
                operand1 = operand1.concat("", userInput)
                display.textContent = operand1
                return
            }
            operand1 = userInput
            display.textContent = operand1
            return
        }

        if ((inputClass === "operationButton")) {
            if ((operand2 === "")) {
                operator = userInput
                display.innerHTML += (" " + operator)
                return
            }
            let temp = operator
            operator = userInput
            operate(operand1, temp, operand2)
        }

        if ((inputClass === "numberButton") && (operator !== "") && (operand1 !== "")) {
            if (operand2 !== "") {
                operand2 = operand2 + ""
                display.innerHTML += userInput
                operand2 = operand2.concat("", userInput)
                return
            }
            operand2 = userInput
            display.innerHTML += (" " + operand2)
        }

        if ((userInput === "AC")) {
            operand1 = ""
            operand2 = ""
            operator = ""
            display.textContent = "0"
            return
        }
    });
});



function operate(a, sign, b) {

    if (sign === "+") {
        operand1 = Math.round (((a * 1) + (b * 1)) * 100) / 100
        operand2 = ""
        display.textContent = (operand1 + " " + operator)
    }

    if (sign === "-") {
        operand1 = Math.round((a - b) * 100) / 100
        operand2 = ""
        display.textContent = (operand1 + " " + operator)
    }

    if (sign === "x") {
        operand1 = Math.round((a * b) * 100) / 100
        operand2 = ""
        display.textContent = (operand1 + " " + operator)
    }

    if (sign === "÷") {
        operand1 = Math.round((a / b) * 100) / 100
        operand2 = ""
        display.textContent = (operand1 + " " + operator)
    }
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
