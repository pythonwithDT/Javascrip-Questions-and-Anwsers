
# Explanation of the Code

This section demonstrates how to use JavaScript to dynamically change the content displayed on a webpage by modifying the HTML inside the `<body>` element.

## 1. Display a Message on the Webpage

```javascript
// Solution 

document.body.innerHTML = 'Good morning';
```

**Step-by-Step Breakdown:**

- **Using `document.body.innerHTML`:**
  - `document.body` refers to the entire `<body>` element of the HTML document, which contains all the visible content on the webpage.
  - `.innerHTML` is a property that represents the HTML content inside the `<body>` element.
  - By setting `document.body.innerHTML = 'Good morning';`, the entire content of the webpage is replaced with the text "Good morning".

## 2. Display Your Name on the Webpage

```javascript
// Solution

document.body.innerHTML = 'Emmanuel Dortey Tetteh';
```

**Step-by-Step Breakdown:**

- **Using `document.body.innerHTML` Again:**
  - Similar to the previous example, `document.body.innerHTML = 'Emmanuel Dortey Tetteh';` replaces the content of the webpage with the text "Emmanuel Dortey Tetteh".
  - This means that when the code is executed, the webpage will display only the specified text, with all other content being removed.

---

These examples demonstrate how to use JavaScript to directly modify the content displayed on a webpage by setting the `innerHTML` property of the `document.body`. This is a simple and effective way to dynamically update the webpage content with new text.
