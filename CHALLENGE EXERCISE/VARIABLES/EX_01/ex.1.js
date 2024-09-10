// Creata varable called "calculation", and save an empty string inside: 
//let calculation = "";
// (this variable will store the calucation like '1 +2' or '11 + 2 +2)

// Solution

let calculation = "";


// when we click the '1' button:
// - add the string '1' to the "calculation" variable: calucation += '1';
// - display the calculation in the console: console.log(calculation);

document.querySelector('.js-button1').addEventListener('click', () => {
    calculation += '1';
    console.log(calculation);
});


// do the same for the '2', '3' and '+' buttons(add ' + ' instaead of '+')


document.querySelector('.js-button2').addEventListener('click', () => {
    calculation += '2';
    console.log(calculation);
});

document.querySelector('.js-button3').addEventListener('click', () => {
    calculation += '3';
    console.log(calculation);
});

document.querySelector('.js-button4').addEventListener('click', () => {
    calculation += ' + ';
    console.log(calculation);
});

// When we click the '=' button, use the code:eval(calculation); (eval(..) converts
// the calculation string into actual math)
// - save the result back in the "calculation": calculation = eval(calculation);
// - display the result in the console: console.log(calculation);

document.querySelector('.js-button5').addEventListener('click', () => {
    calculation = eval(calculation);
    console.log(calculation);
});



