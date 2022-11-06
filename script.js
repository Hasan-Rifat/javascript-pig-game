'use strict';

//NOTE all element
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const currentPlayer0 = document.getElementById('current--0');
const currentPlayer1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const DiceImg = document.querySelector('.dice');

//NOTE btn

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

// TODO all functionality

let currentScore, player, scores, active;

const init = () => {
  score0.innerText = 0;
  score1.innerText = 0;
  current0El.innerText = 0;
  current1El.innerText = 0;
  currentScore = 0;
  player = 0;
  scores = [0, 0];
  active = true;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
// switchPlayer
const switchPlayer = () => {
  currentScore = 0;
  currentPlayer0.innerText = 0;
  player = player === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// ! roll Dice Btn
rollDiceBtn.addEventListener('click', () => {
  if (active) {
    let randomNumber = parseInt(Math.random() * 6) + 1;

    // img
    DiceImg.classList.remove('hidden');
    DiceImg.src = `dice-${randomNumber}.png`;
    currentPlayer1.innerText = 0;

    // todo: condition
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${player}`).innerText = currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (active) {
    scores[player] += currentScore;
    document.getElementById(`score--${player}`).innerText = scores[player];

    if (scores[player] >= 100) {
      active = false;
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active');
    }

    switchPlayer();
  }
});

newGameBtn.addEventListener('click', init);
