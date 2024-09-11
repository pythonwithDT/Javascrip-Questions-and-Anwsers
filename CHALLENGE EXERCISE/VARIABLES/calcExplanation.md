
# Imagine Your Calculator

Think of this code as the instructions for a simple calculator that can do math when you press its buttons.

## What Each Part Does

1. **`let calculation = "";`**
   - This is like a blank piece of paper where you will write down your math problem. At the start, it's empty.

2. **Function to Handle Button Clicks**

   ```javascript
   function handleButtonClick(event) {
       const buttonValue = event.target.textContent.trim(); // Get what’s written on the button
   ```

   - **`handleButtonClick`** is a special helper that does something whenever you press a button.
   - **`event.target.textContent.trim()`** means, "Look at the button I pressed and see what’s written on it."

3. **Checking for Special Buttons**

   ```javascript
   if (buttonValue === '=') {
       try {
           calculation = eval(calculation).toString(); // Do the math
       } catch (e) {
           calculation = 'Error'; // If something goes wrong, show 'Error'
       }
   } else {
       calculation += buttonValue; // Add what’s on the button to our math problem
   }
   ```

   - If you press the "=" button, the code tries to solve the math problem written on your piece of paper (`calculation`).
   - **`eval(calculation)`** does the actual math for you, and **`toString()`** turns the result into a string (so it can be displayed).
   - If there’s a mistake (like dividing by zero), it will show `'Error'` instead.

   - If you press any other button (like numbers or symbols), it just adds what’s on that button to your piece of paper.

4. **Show the Result**

   ```javascript
   console.log(calculation); // Display the math problem or result
   ```

   - This is like showing what’s written on your piece of paper (so you can see what you’ve got so far or what the answer is).

5. **Add Click Events to Buttons**

   ```javascript
   document.querySelectorAll('button').forEach(button => {
       button.addEventListener('click', handleButtonClick);
   });
   ```

   - This part looks at all the buttons on the page and tells each one to use our special helper (`handleButtonClick`) whenever it’s clicked.

### Putting It All Together

When you press a button on the calculator:

- The button’s value is added to our math problem.
- If you press "=", the code solves the math problem and shows the answer.
- If there’s an error, it shows `'Error'`.

So, this code makes sure that your calculator listens to your button presses and does the right thing with them!
