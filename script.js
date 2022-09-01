'use strict';
// 5) вместо highscore писать лучший покус отгада числа

let pokus = 1;
let nejlepsiPokus = 20;
let skryteCislo = Math.trunc(Math.random() * 20) + 1;

console.log(skryteCislo);

// funkce pro zjednodušení
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // není input
  if (!guess) {
    displayMessage(`⛔ Napište prosím číslo⛔ `);

    // hráč má pravdu
  } else if (guess === skryteCislo) {
    displayNumber(skryteCislo);
    displayMessage(`🎉 Máte pravdu 🎉`);
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (pokus < nejlepsiPokus) {
      nejlepsiPokus = pokus;
      document.querySelector('.highscore').textContent = nejlepsiPokus;
    }

    // hráč nemá pravdu
  } else if (guess !== skryteCislo) {
    if (pokus >= 1) {
      displayMessage(
        guess > skryteCislo
          ? `Vaše číslo je příliš vysoké`
          : `Vaše číslo je příliš nízké`
      );
      pokus++;
      document.querySelector('.score').textContent = pokus;
      document.querySelector('body').style.backgroundColor = '#FF5300';
    } else {
      displayMessage(`Vy jste prohrál/a, zkuste ještě jednou`);
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF5300';
    }
  }
});

// když mačkáme Znovu
document.querySelector('.again').addEventListener('click', function () {
  pokus = 1;
  skryteCislo = Math.trunc(Math.random() * 20) + 1;
  console.log(skryteCislo);

  displayMessage('Začít hádat...');
  displayNumber('?');
  document.querySelector('.score').textContent = pokus;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.help');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
