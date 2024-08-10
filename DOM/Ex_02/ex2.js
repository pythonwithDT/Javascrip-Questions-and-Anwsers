// Continuing from EX_01, create another <button>Hello</button> below. Using Javascript, 
// change the text in the second button to 'Welcome!' (hint: add class and use.querrySelector)


// Solution 

const buttonElement = document.querySelector('.js-but')
.innerText = 'Welcome!'
console.log(buttonElement);