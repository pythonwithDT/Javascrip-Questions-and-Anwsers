// Create 2 buttons 'heads' and 'tails', and a paragraph (<p></p>) underneath. 
// When clicking the 'heads' button, display 'You chose"heads' in the paragraph. 
// When the 'tails' button, display 'You chose: tails'.


// Solution 


let result = ''

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

    

