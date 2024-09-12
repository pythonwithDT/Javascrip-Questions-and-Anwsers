
# Explanation of the Code

**Step-by-Step Breakdown:**

1. **Create Calculator Buttons in HTML:**
   - The buttons for numbers `0-9`, operators (`+`, `-`, `*`, `/`), a decimal point (`.`), and the equals (`=`) are created using HTML. Additionally, a "Clear" button (`C`) is included to reset the calculation.

   ```html
   <p>
       <button class="js-button">1</button>
       <button class="js-button">2</button>
       <button class="js-button">3</button>
       <button class="js-button">+</button>
   </p>
   <p>
       <button class="js-button">4</button>
       <button class="js-button">5</button>
       <button class="js-button">6</button>
       <button class="js-button">-</button>
   </p>
   <p>
       <button class="js-button">7</button>
       <button class="js-button">8</button>
       <button class="js-button">9</button>
       <button class="js-button">*</button>
   </p>
   <p>
       <button class="js-button">0</button>
       <button class="js-button">.</button>
       <button class="js-button">=</button>
       <button class="js-button">/</button>
   </p>
   <button class="C">Clear</button>
   ```

2. **Initialize Calculation Variable:**
   - You start with an empty string variable called `calculation` which will hold the user's input. It stores the expression as a string like `1 + 2`.

   ```javascript
   let calculation = "";
   ```

3. **Handle Button Clicks with JavaScript:**
   - The function `handleButtonClick` is triggered every time a number or operator button is clicked. The `event.target.textContent.trim()` gets the value of the button clicked (e.g., `1`, `+`, `9`) and appends it to the `calculation` string.

   **Example:**

   ```javascript
   function handleButtonClick(event) {
       const buttonValue = event.target.textContent.trim();
       if (buttonValue === '=') {
           try {
               calculation = eval(calculation).toString(); // Evaluate and convert to string
           } catch (e) {
               calculation = 'Error'; // Handle errors (e.g., invalid expressions)
           }
       } else {
           calculation += buttonValue;
       }
       console.log(calculation); // Log the calculation or result
   }
   ```

   - For the `=` button, the `eval()` function evaluates the string as a mathematical expression and converts the result back into a string to continue updating it.
   - If the expression is invalid, it shows `Error` in the console.

4. **Add Event Listeners to All Buttons:**
   - The script uses `querySelectorAll` to select all buttons with the class `.js-button`. An event listener is added to each button to trigger the `handleButtonClick` function when clicked.

   ```javascript
   document.querySelectorAll('.js-button').forEach(button => {
       button.addEventListener('click', handleButtonClick);
   });
   ```

5. **Clear Button Functionality:**
   - The "Clear" button resets the `calculation` string when clicked, effectively clearing any ongoing calculations.

   ```javascript
   document.querySelector('.C').addEventListener('click', () => {
       calculation = "";
   });
   ```

**Result:**

- As you click on the number or operator buttons, the values are appended to the `calculation` string and logged in the console.
- When you click the `=` button, the string is evaluated, and the result is displayed in the console.
- The "Clear" button resets the calculation.
