// I wrote this code but with lots of help from codecademy

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*10);
};

const compareGuesses = (userGuess, computerGuess, target) => {
  let userDistance = Math.abs(userGuess - target);
  let computerDistance = Math.abs(computerGuess - target);
  if (userDistance <= computerDistance) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  switch (winner) {
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;
  }
}

const advanceRound = () => {
  return currentRoundNumber++;
}