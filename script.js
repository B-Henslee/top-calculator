const buttons = document.querySelectorAll('.buttonNumber');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        //convert the text content to an integer
        let buttonValue = parseInt(buttonText, 10);

        const screen = document.querySelector('.screen');
        //create variable to make a text node so we can append the text node
        let screenText = document.createTextNode(buttonValue);
        screen.appendChild(screenText);
    });
});

