let randomNumber = Math.random();
let result;

if (randomNumber < 0.5) {
  result = 'heads';
} else {
  result = 'tails';
}

let guess = prompt('What is your guess?');
if (guess === result) {
  console.log('You Win!');
} else {
  console.log('You lose.');
}
