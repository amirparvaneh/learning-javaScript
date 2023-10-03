'use strict';

let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing number...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('the number is empty');
  } else if (guess === secretNumber) {
    displayMessage('correct Number');
    document.querySelector('.number').textContent = guess;
  } else if (guess > secretNumber) {
    displayMessage('it is too high');
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
