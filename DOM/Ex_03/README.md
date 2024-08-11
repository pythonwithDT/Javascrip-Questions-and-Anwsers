
# Explanation of the Code

## HTML Structure

```html
<button onclick="headtail('Heads');">Heads</button>
<button onclick="headtail('Tails');">Tails</button>
<p class="js-outcomes"></p>
```

**Step-by-Step Breakdown:**

1. **HTML Buttons and Paragraph:**
   - Two buttons are created: one labeled "Heads" and the other labeled "Tails".
   - Each button has an `onclick` attribute that calls the `headtail` function with a specific argument (`'Heads'` for the first button and `'Tails'` for the second button).
   - A paragraph (`<p>`) with the class `js-outcomes` is included below the buttons to display the result.

## JavaScript Code

```javascript
let result = '';

function headtail(choice) {
    if (choice === 'Heads') {
        result = 'You chose heads';
    } else if (choice === 'Tails') {
        result = 'You chose tails';
    } else {
        console.log('Invalid choice');
    }

    document.querySelector('.js-outcomes').innerHTML = `${result}`;
}
```

**Step-by-Step Breakdown:**

1. **Initialize a Variable:**
   - `let result = '';` initializes a variable `result` to store the message that will be displayed in the paragraph.

2. **Define the `headtail` Function:**
   - The function `headtail` takes one parameter, `choice`, which is used to determine which button was clicked.

3. **Check the Choice and Update the Result:**
   - If `choice` is `'Heads'`, the `result` is set to `'You chose heads'`.
   - If `choice` is `'Tails'`, the `result` is set to `'You chose tails'`.
   - If `choice` is neither `'Heads'` nor `'Tails'`, it logs `'Invalid choice'` to the console.

4. **Update the Paragraph Element:**
   -``document.querySelector('.js-outcomes').innerHTML = `${result}`;` selects the paragraph with the class `js-outcomes` and updates its inner HTML with the message stored in `result`.

**Result:**
When you click the "Heads" button, the paragraph will display "You chose heads". When you click the "Tails" button, it will display "You chose tails".

---

This explanation helps clarify how the buttons and paragraph work together with JavaScript to update the displayed message based on user interaction.
