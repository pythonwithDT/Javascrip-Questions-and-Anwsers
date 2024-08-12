// Create a text box (<input>) and submit button. When clicking 'submit', display 
//'Your name is: ${text};' on the page (${text} = the text inside the box) (hint: use.value
// to get the text inside an <input>).


// Solution 



//  let input = document.value

// console.log(document.querySelector('.input-text'));

function inputText () {
    text = document.querySelector('.input-text').value;

    if (inputText = text) {
        reveal = `Your name is: ${text}`;
    } else  {
        console.log('No input')
    };
   
  document.querySelector('.text-reveal').innerHTML = reveal;

   
};