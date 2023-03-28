const generater = document.querySelector(".generate-number");
const generaterInput = document.querySelector(".generate-number input");
const guess = document.querySelector(".guess-number");
const guessInput = document.querySelector(".guess-number input");
const chose = document.querySelector(".chose");
const result = document.querySelector(".result");

function select(submit) {
  submit.preventDefault();
  const setNumber = parseInt(generaterInput.value);
  const randomNumber = Math.ceil(Math.random() * setNumber);
  const selectNumber = parseInt(guessInput.value);

  if (isNaN(setNumber)) {
    chose.innerText = `Please Input Generate a number`;
  } else {
    chose.innerText = `You chose: ${selectNumber}, the machine chose: ${randomNumber}.`;
    if (selectNumber === randomNumber) {
      result.innerText = `You won!`;
    } else if (selectNumber !== randomNumber) {
      result.innerText = `You lost!`;
    }
  }
}

function random(submit) {
  submit.preventDefault();
  const setNumber = parseInt(generaterInput.value);
  const randomNumber = Math.ceil(Math.random() * setNumber);
  const selectNumber = parseInt(guessInput.value);

  if (isNaN(selectNumber)) {
    chose.innerText = `Please Input Guess the number`;
  } else {
    chose.innerText = `You chose: ${selectNumber}, the machine chose: ${randomNumber}.`;
    if (selectNumber === randomNumber) {
      result.innerText = `You won!`;
    } else if (selectNumber !== randomNumber) {
      result.innerText = `You lost!`;
    }
  }
}

generater.addEventListener("submit", random);
guess.addEventListener("submit", select);
