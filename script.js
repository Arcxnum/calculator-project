let number1;
let operator = undefined;
let number2;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

const display = document.getElementById("display");

function addToScreen(input) {
    display.value += input;
}

function clearScreen() {
    display.value = "";
    number1 = undefined;
    operator = undefined;
    number2 = undefined;
}

function calculate() {
    const expression = display.value;

  // Check for empty expression
    if (expression === "") {
        return; 
    }
  
    const tokens = expression.split(/([+-/*])/);

    if (tokens.length % 2 === 0) {
        display.value = "Error: Invalid expression"; // Display error for missing operator
        return;
    }

    // Process the tokens
    number1 = parseFloat(tokens[0]); // Convert first token to number
    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const number2 = parseFloat(tokens[i + 1]); // Convert next token to number

        switch (operator) {
            case "+":
                number1 = add(number1, number2);
                break;
            case "-":
                number1 = subtract(number1, number2);
                break;
            case "*":
                number1 = multiply(number1, number2);
                break;
            case "/":
                number1 = divide(number1, number2);
                break; 
            default:
                display.value = "Really?"; // Display error for invalid operator
                return;
        }
    }

    // Update the display with the calculated result
    display.value = number1;
    number2 = undefined; // Reset number2 for the next calculation
}