const buttons = document.querySelectorAll('.buttonNumber, .buttonSymbol');
const screen = document.querySelector('.screen');
let num1 = null;
let num2 = null;
let currentOperator = null;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === 'AC') {
            // Clear all
            num1 = null;
            num2 = null;
            currentOperator = null;
            screen.textContent = '';
        } else if (buttonText === '←') {
            // Backspace one character
            screen.textContent = screen.textContent.slice(0, -1);
            if (screen.textContent === '') {
                // If the screen is empty after backspace, reset all variables
                num1 = null;
                num2 = null;
                currentOperator = null;
            }
        } else if (!isNaN(buttonText) || buttonText === '.') {
            // If the button is a number or ".", check if an operator was pressed before
            if (currentOperator) {
                // If an operator was pressed, start entering num2
                screen.textContent += buttonText;
                num2 = parseFloat(screen.textContent);
            } else {
                // If no operator was pressed, append the number to the screen
                screen.textContent += buttonText;
                num1 = parseFloat(screen.textContent); // Update num1 with the current value
            }
        } else if (buttonText === '*' || buttonText === '/' || buttonText === '+' || buttonText === '-') {
            // If an operator is pressed, store it in currentOperator and update num1
            currentOperator = buttonText;
            num1 = parseFloat(screen.textContent);
            screen.textContent = ''; // Clear the screen for entering num2
        } else if (buttonText === '=') {
            if (num1 !== null && num2 !== null && currentOperator !== null) {
                // If num1, num2, and an operator are set, calculate the result
                num2 = parseFloat(screen.textContent);
                num1 = calculateResult(num1, num2, currentOperator);
                screen.textContent = num1;
                num2 = null;
                currentOperator = null;
            }
        }
    });
});

// Helper function to calculate the result based on the operator
function calculateResult(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}
