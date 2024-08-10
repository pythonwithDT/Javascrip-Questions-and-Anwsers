
### Explanation of the Code

The following code demonstrates how to create a button element in HTML and then access it using JavaScript to display it in the console.

```javascript
// Create a <button>Hello</button>. Use document.querySelector('button') to get the button from 
// the page, and then display it in the console. 

// Solution 

const buttonElement = document.querySelector('button')
console.log(buttonElement);
```

**Step-by-Step Breakdown:**

1. **Create a Button in HTML:**
   - First, in your HTML file, you need to create a button element:
    ```html
   <button>Hello</button>
   ```

   - This button will appear on your webpage with the text "Hello" inside it.

2. **Select the Button Using JavaScript:**
   - The line `const buttonElement = document.querySelector('button')` is used to select the button element from the HTML document.
   - `document.querySelector('button')` tells the browser to search the HTML document for the first `<button>` element it finds and return it.
   - The selected button is then stored in a variable called `buttonElement`.

3. **Display the Button in the Console:**
   - The line `console.log(buttonElement);` prints the selected button element to the console.
   - This allows you to see the button element in your browser's developer tools console, which is helpful for debugging or understanding how the element is represented in the DOM (Document Object Model).

**Result:**
When you run this code in a browser with the button present in the HTML, you will see the `<button>Hello</button>` element displayed in the console.
