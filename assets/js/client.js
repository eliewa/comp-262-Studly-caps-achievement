let form = document.querySelector('form');
let output = document.querySelector('.output');
let newWord = '';

let convert = function(event) {
  event.preventDefault();
  let word = form.word.value;
  for (let i = 0; i < word.length; i++) {
    if (i % 3 === 0 || i % 2 === 0) {
      newWord += word.charAt(i).toUpperCase();
    }
    else {
      newWord += word.charAt(i).toLowerCase();
    }  
  }
  output.innerHTML = 'New word: ' + newWord;
  newWord = '';
}

form.addEventListener('submit', convert);