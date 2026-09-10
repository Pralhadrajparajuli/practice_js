let age = prompt('age?');

let message = (age < 3) ? 'Hi' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

  console.log(message);