
# Explanation of the Code

This code builds on the previous example by allowing the user to submit the text by pressing the "Enter" key in addition to clicking the "Submit" button.

# HTML Structure

```html
<input placeholder="name" class="input-text" onkeydown="handleInputdown(event)">
<button onclick="inputText();">Submit</button>
<p class="text-reveal"></p>
```

**Step-by-Step Breakdown:**

1. **HTML Input and Button:**
   - An `<input>` element is created with a placeholder text "name" and a class `input-text`.
   - The `onkeydown` attribute is added to the input element, which calls the `handleInputdown` function when a key is pressed.
   - A button labeled "Submit" is placed next to the input box. When clicked, it triggers the `inputText` function.
   - A paragraph (`<p>`) with the class `text-reveal` is included below the button to display the output.

# JavaScript Code

```javascript
function handleInputdown(event) {
    if (event.key === 'Enter') {
        inputText();
    }
}

function inputText() {
    const text = document.querySelector('.input-text').value;
    
    let reveal = '';

    if (text) {
        reveal = `Your name is: ${text}`;
    } else {
        reveal = `No input provided`;
    }
   
    document.querySelector('.text-reveal').innerHTML = reveal;
}
```

**Step-by-Step Breakdown:**

1. **Handling the 'Enter' Key Press:**
   - The `handleInputdown` function is defined to handle keydown events on the input box.
   - The `event` object is passed to the function, which contains information about the key pressed.
   - The condition `if (event.key === 'Enter')` checks if the "Enter" key was pressed.
   - If the "Enter" key is detected, the `inputText` function is called, which displays the message on the page.

2. **Get the Input Value (Same as Before):**
   - `const text = document.querySelector('.input-text').value;` retrieves the value entered in the input box with the class `input-text` and stores it in the variable `text`.

3. **Check if Input is Provided (Same as Before):**
   - A variable `reveal` is initialized as an empty string.
   - If the `text` variable contains a value, `reveal` is set to `Your name is: ${text}`.
   - If the `text` variable is empty, `reveal` is set to `No input provided`.

4. **Update the Paragraph Element (Same as Before):**
   - `document.querySelector('.text-reveal').innerHTML = reveal;` selects the paragraph with the class `text-reveal` and updates its inner HTML with the message stored in `reveal`.

**Result:**
When you enter a name in the input box and press "Enter" or click "Submit," the paragraph will display "Your name is: [name]". If no name is entered, it will display "No input provided".
