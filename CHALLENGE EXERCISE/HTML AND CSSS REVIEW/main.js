// Add onclick=".." attributes to the two buttons:
// - when clicking "Add to cart", create a popup with the text "Added"
// - when clicking "Buy now", display the message "loading..."" in the console. 
// and then create a popup with the text "Purchased"


// Solution

document.querySelector('.js-button1').addEventListener('click', () => {
    alert('Added');
});

document.querySelector('.js-button2').addEventListener('click', () => {
    console.log('loading...')
    alert('Purchased');
});