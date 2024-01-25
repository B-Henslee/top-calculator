const buttons = document.querySelectorAll('.buttonNumber, .buttonSymbol');
const screen = document.querySelector('.screen');
const numArray = [];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        let lastChar = screen.textContent.slice(-1); // Get the last character on the screen

        // Check if button is a number or a symbol
        if (!isNaN(buttonText) || buttonText === '*' || buttonText === '/' || buttonText === '+' || buttonText === '-') {
            // If the last character is a symbol, update it; otherwise, append the new symbol
            if ((lastChar === '*' || lastChar === '/' || lastChar === '+' || lastChar === '-') && buttonText === lastChar) {
                return; // Do nothing if the same symbol is pressed consecutively
            } else {
                let screenText = document.createTextNode(buttonText);
                screen.appendChild(screenText);
            }
        }
    });
});

//take user input from the buttons
//when user clicks on a symbol button show the symbol but only once
//after user clicks symbol button store that number in an array
//user enters 2nd number
//user hits enter when enter is pressed it gives the answer
//resets the answer when new click is pressed