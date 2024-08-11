// Create 2 buttons 'heads' and 'tails', and a paragraph (<p></p>) underneath. 
// When clicking the 'heads' button, display 'You chose"heads' in the paragraph. 
// When the 'tails' button, display 'You chose: tails'.


// Solution 



// function headtail (buttonElement) {
//     const buttonText = buttonElement.innerText;

//     // let result = '';

//     if (buttonText === 'Heads') {
//         console.log('You  chose heads')
//     } else if (buttonText === 'Tails') {
//         console.log('You chose Tails')
//     } else {
//         console.log('Invalid Choice')
//     }
        
// }

function headtail(choice) {
    if (choice === 'Heads') {
        console.log('You chose heads');
    } else if (choice === 'Tails') {
        console.log('You chose tails');
    } else {
        console.log('Invalid choice');
    }
}