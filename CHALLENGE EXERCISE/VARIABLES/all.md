To streamline the process and avoid querying each button individually, you can use a more generic approach by querying all the buttons at once and then adding event listeners to them based on their values or classes. Here's a revised version of your code that achieves this:

1. **Query all buttons**: Use `querySelectorAll` to select all the buttons at once.
2. **Add event listeners**: Loop through the buttons and attach event listeners based on their text content.

Here’s how you can modify your code:

```javascript
// Create a variable called "calculation" and initialize it as an empty string
let calculation = "";

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    // Handle special cases for '=', and operators
    if (buttonValue === '=') {
        try {
            calculation = eval(calculation).toString(); // Use eval to compute the result
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
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
```

### Explanation:
1. **Query All Buttons**: `document.querySelectorAll('button')` selects all `<button>` elements on the page.
2. **Handle Button Clicks**: The `handleButtonClick` function processes the button clicks. It updates the `calculation` variable based on the button’s text content. When the `=` button is clicked, it evaluates the expression and updates `calculation` with the result.
3. **Event Listener**: An event listener is added to each button that triggers the `handleButtonClick` function on click.

### Notes:
- This approach assumes that each button’s text content is either a number, an operator, or `=`. 
- For safety, it handles potential errors in the `eval` function by catching exceptions and setting `calculation` to `'Error'`.
- Using `eval` can be risky as it can execute arbitrary code. Ensure that your input is strictly controlled to avoid security risks.

This approach minimizes repetitive code and makes it easier to manage changes to the button layout or functionality.