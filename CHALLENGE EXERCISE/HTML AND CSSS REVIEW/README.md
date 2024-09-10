
# Explanation of the Code

**Step-by-Step Breakdown:**

1. **Create Product Details and Buttons in HTML:**
   - In your HTML file, the product description and price are added using `<p>` elements, followed by two buttons: "Add to cart" and "Buy now".

   ````html
   <p>Adults Plain Cotton T-shirt</p>
   <p>Price: $7.99</p>
   
   <button class="js-button1">Add to cart</button>
   <button class="js-button2">Buy now</button>
   ```

   - This creates two buttons on the webpage with the respective texts "Add to cart" and "Buy now".

2. **Style the Buttons Using CSS:**
   - In the CSS file (`main.css`), we style the two buttons with different background colors (yellow for "Add to cart" and orange for "Buy now"). Each button also has a border, padding, and rounded corners.

   ```css
   button:nth-of-type(1) {
       background-color: yellow;
       border: 2px solid black;
       padding: 10px;
       cursor: pointer;
       border-radius: 5px;
   }

   button:nth-of-type(2) {
       background-color: orange;
       border: 2px solid black;
       padding: 10px;
       cursor: pointer;
       border-radius: 5px;
   }
   ```

   - This gives each button a distinct appearance with hover effects and visual cues for user interaction.

3. **Add Interactivity with JavaScript:**
   - In the JavaScript file (`main.js`), event listeners are added to each button. When the buttons are clicked, they trigger different actions.

   ```javascript
   document.querySelector('.js-button1').addEventListener('click', () => {
       alert('Added');
   });

   document.querySelector('.js-button2').addEventListener('click', () => {
       console.log('loading...');
       alert('Purchased');
   });
   ```

   - **For "Add to cart" Button:**
     - When the user clicks the "Add to cart" button, a popup message appears with the text `Added`.
   - **For "Buy now" Button:**
     - When the user clicks the "Buy now" button, it first logs `loading...` in the console.
     - Afterward, a popup appears with the text `Purchased`.

**Result:**
When you load the webpage:

- You’ll see the product information and the two buttons.
- Clicking the "Add to cart" button will show a popup with the message "Added".
- Clicking the "Buy now" button will log "loading..." in the console and show a popup with "Purchased".
