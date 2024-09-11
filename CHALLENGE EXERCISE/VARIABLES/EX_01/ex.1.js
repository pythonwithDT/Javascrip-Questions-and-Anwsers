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

document.querySelector('.js-button5').addEventListener('click', () => {
    calculation += '4'
    console.log(calculation);
});

document.querySelector('.js-button6').addEventListener('click', () => {
    calculation += '5'
    console.log(calculation);
});

document.querySelector('.js-button7').addEventListener('click', () => {
    calculation += '6'
    console.log(calculation);
});

document.querySelector('.js-button8').addEventListener('click', () => {
    calculation += ' - '
    console.log(calculation);
});

document.querySelector('.js-button9').addEventListener('click', () => {
    calculation += '7'
    console.log(calculation);
});

document.querySelector('.js-button10').addEventListener('click', () => {
    calculation += '8'
    console.log(calculation);
});


document.querySelector('.js-button11').addEventListener('click', () => {
    calculation += '9'
    console.log(calculation);
});

document.querySelector('.js-button12').addEventListener('click', () => {
    calculation += ' * '
    console.log(calculation);
});

document.querySelector('.js-button13').addEventListener('click', () => {
    calculation += '0'
    console.log(calculation);
});

document.querySelector('.js-button14').addEventListener('click', () => {
    calculation += '.'
    console.log(calculation);
});

document.querySelector('.js-button15').addEventListener('click', () => {
    calculation += '='
    console.log(calculation);
});

document.querySelector('.js-button16').addEventListener('click', () => {
    calculation += ' / '
    console.log(calculation);
});

document.querySelector('.js-button9').addEventListener('click', () => {
    calculation += '7'
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



