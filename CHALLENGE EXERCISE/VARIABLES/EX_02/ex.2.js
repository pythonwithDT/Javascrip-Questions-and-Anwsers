

let calculation = "";

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.textContent.trim(); // Trim any extra whitespace

    // Handle special cases for '=' and other buttons
    if (buttonValue === '=') {
        try {
            calculation = eval(calculation).toString(); // Evaluate and convert to string
        } catch (e) {
            calculation = 'Error'; // Handle any errors in evaluation
        }
    } else {
        // Append button value to the calculation
        calculation += buttonValue;
    }

    console.log(calculation); // Display the calculation or result
}

// Query all buttons and add event listeners
document.querySelectorAll('.js-button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

document.querySelector('.C').addEventListener('click', () => {
    calculation = "";
})
