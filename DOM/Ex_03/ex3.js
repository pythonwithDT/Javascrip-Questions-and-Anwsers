// Create 2 buttons 'heads' and 'tails', and a paragraph (<p></p>) underneath. 
// When clicking the 'heads' button, display 'You chose"heads' in the paragraph. 
// When the 'tails' button, display 'You chose: tails'.


// Solution 



function headtail () {
    const buttonElement = document.querySelector('button')
    const buttonText = buttonElement.innerText;

    // let result = '';

    if (buttonText === 'Heads') {
        console.log('You  chose heads')
    } else if (buttonText === 'Tails') {
        console.log('You chose Tails')
    }
        
}