const buttons = document.querySelectorAll('.buttonNumber');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        //convert the text content to an integer
        let buttonValue = parseInt(buttonText, 10);
        console.log(buttonValue);
    });
});

const screen = document.querySelector('.screen');
screen.appendChild(buttonValue);