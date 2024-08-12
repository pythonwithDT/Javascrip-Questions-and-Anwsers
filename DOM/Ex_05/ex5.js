// Modify EX_04 so that when you press 'Enter' in the <input>, it will also display the same 
// message on the page(hint: use onkeydown and the event object)


// Solution 



function inputText () {
    const text = document.querySelector('.input-text').value;
    
    let reveal = '';

    if (text) {
        reveal = `Your name is: ${text}`;
    } else  {
        reveal = `No input provided`;
    };
   
  document.querySelector('.text-reveal').innerHTML = reveal;

   
};
