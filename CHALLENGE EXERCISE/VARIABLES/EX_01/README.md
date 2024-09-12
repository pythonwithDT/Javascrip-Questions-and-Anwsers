
# Explanation of the Code

**Step-by-Step Breakdown:**

1. **Create Calculator Buttons in HTML:**
   - In your HTML file, you define buttons for numbers `1` to `9`, `0`, and operations (`+`, `-`, `*`, `/`, `=`) arranged in rows:

   ```html
   <p>
       <button class="js-button1">1</button>
       <button class="js-button2">2</button>
       <button class="js-button3">3</button>
       <button class="js-button4">+</button>
   </p>
   <p>
       <button class="js-button5">4</button>
       <button class="js-button6">5</button>
       <button class="js-button7">6</button>
       <button class="js-button8">-</button>
   </p>
   <p>
       <button class="js-button9">7</button>
       <button class="js-button10">8</button>
       <button class="js-button11">9</button>
       <button class="js-button12">*</button>
   </p>
   <p>
       <button class="js-button13">0</button>
       <button class="js-button14">.</button>
       <button class="js-button15">=</button>
       <button class="js-button16">/</button>
   </p>
   ```

2. **Initialize a Calculation Variable in JavaScript:**
   - You start by creating a variable called `calculation` which will hold the user's input as a string. This variable will store expressions like `1 + 2` or `5 * 3`.

   ```javascript
   let calculation = "";
   ```

3. **Handle Button Clicks:**
   - For each button, an event listener is added in JavaScript. When the button is clicked, it adds the corresponding number or operator to the `calculation` string and logs it to the console.

   **Example:**

   ```javascript
   document.querySelector('.js-button1').addEventListener('click', () => {
       calculation += '1';
       console.log(calculation);
   });

   document.querySelector('.js-button2').addEventListener('click', () => {
       calculation += '2';
       console.log(calculation);
   });

   document.querySelector('.js-button4').addEventListener('click', () => {
       calculation += ' + ';
       console.log(calculation);
   });
   ```

   - This process is repeated for all number buttons (0-9) and operator buttons (`+`, `-`, `*`, `/`).

4. **Handling the Equals Button (`=`):**
   - When the `=` button is clicked, the code evaluates the expression stored in `calculation` using the `eval()` function, which converts the string into a mathematical expression.

   ```javascript
   document.querySelector('.js-button15').addEventListener('click', () => {
       calculation = eval(calculation);
       console.log(calculation);
   });
   ```

   - The result is saved back into the `calculation` variable and displayed in the console.

5. **Logging Calculation to the Console:**
   - Each button click logs the current value of `calculation` to the console, showing how the calculation builds up as the user interacts with the calculator.

**Result:**

- As you click each button, the numbers and operators will be added to the `calculation` variable, and the current expression will be logged to the console.
- When you click the `=` button, the expression is evaluated, and the result is displayed in the console.
