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