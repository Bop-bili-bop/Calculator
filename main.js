const display = document.getElementById("display");
let lastInputType = null; // Tracks the type of the last input ("number", "operator", or "dot")

function appendToDisplay(input) {
    if (isOperator(input)) {
        // Prevent adding consecutive operators
        if (lastInputType === "operator") {
            alert("You cannot enter two operators consecutively.");
            return; // Stop further execution
        }
        lastInputType = "operator"; // Update last input type
    } else if (input === ".") {
        // Prevent multiple dots in a single number
        if (lastInputType === "dot") {
            alert("You cannot enter multiple dots in a number.");
            return;
        }
        lastInputType = "dot"; // Update last input type
    } else {
        lastInputType = "number"; // Update last input type
    }

    // Append the valid input to the display
    display.value += input;
}

function clearDisplay() {
    display.value = '';
    lastInputType = null; // Reset input type
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression (use cautiously)
        lastInputType = "number"; // Result is treated as a number
    } catch (error) {
        alert("Invalid calculation!");
        clearDisplay(); // Clear the display on error
    }
}

// Utility function to check if input is an operator
function isOperator(input) {
    return ['+', '-', '*', '/'].includes(input);
}
