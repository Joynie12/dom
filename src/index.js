import './style.css';

const character = document.createElement('img');
character.classList.add('character');

character.src = require('./character.png').default;

const cells = document.querySelectorAll('.cell');

let randomIndex = Math.floor(Math.random() * cells.length);

cells[randomIndex].appendChild(character);

function getRandomIndex() {
  return Math.floor(Math.random() * 16);
}

function moveCharacter() {
  const oldCharacters = document.querySelectorAll('.character');
  oldCharacters.forEach((character) => {
    character.parentElement.removeChild(character);
  });

  const randomIndex = getRandomIndex();
  const cell = document.getElementById(`cell-${randomIndex}`);
  const characterElement = document.createElement('img');
  characterElement.src = require('./character.png').default;
  characterElement.classList.add('character');
  cell.appendChild(characterElement);
}
moveCharacter();
  
setInterval(moveCharacter, 2000);

setTimeout(() => {
  moveCharacter();
}, 1000);