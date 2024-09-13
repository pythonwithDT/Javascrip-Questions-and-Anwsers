// Generate a random number with Math.random(). Save it in a variable 
// create an if-statement and check:
// -if the number is less than 0.5, then display 'heads' in the console.
// -else display 'tails' in the console. 


// Solution

// const Number = Math.random()

// if ( Number => 0.5) {
//     console.log('heads')
// } else {
//     console.log('tail')
// }


// instead of dsiplaying 'headss or 'tails' in the console, svae the result in a variable called 'result'

const Number = Math.random();

let result;

if ( Number < 0.5) {
    result = 'heads'
} else {
    result = 'tails'
}
console.log(result)