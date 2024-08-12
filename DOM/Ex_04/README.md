
# Explanation of the Code

The following code demonstrates how to create a text input box and a submit button. When the button is clicked, the text entered in the input box is displayed on the page.

# HTML Structure

```html
<input placeholder="name" class="input-text">

<button onclick="inputText();">Submit</button>

<p class="text-reveal"></p>
```

**Step-by-Step Breakdown:**

1. **HTML Input and Button:**
   - An `<input>` element is created with a placeholder text "name" and a class `input-text`.
   - A button labeled "Submit" is placed next to the input box. When clicked, it triggers the `inputText` function.
   - A paragraph (`<p>`) with the class `text-reveal` is included below the button to display the output.

# JavaScript Code

```javascript
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

1. **Get the Input Value:**
   - `const text = document.querySelector('.input-text').value;` retrieves the value entered in the input box with the class `input-text` and stores it in the variable `text`.
   - `.value` is used to get the text entered by the user.

2. **Check if Input is Provided:**
   - A variable `reveal` is initialized as an empty string.
   - If the `text` variable contains a value (i.e., the user entered something), `reveal` is set to `Your name is: ${text}`.
   - If the `text` variable is empty (i.e., the user didn't enter anything), `reveal` is set to `No input provided`.

3. **Update the Paragraph Element:**
   - `document.querySelector('.text-reveal').innerHTML = reveal;` selects the paragraph with the class `text-reveal` and updates its inner HTML with the message stored in `reveal`.

**Result:**
When you enter a name in the input box and click "Submit", the paragraph will display "Your name is: [name]". If no name is entered, it will display "No input provided".
