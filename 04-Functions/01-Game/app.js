const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_VALUE = ROCK;
const PLAYER_WINS = 'PLAYER_WINS'
const COMPUTER_WINS = 'COMPUTER_WINS';
const DRAW = 'DRAW';

const playerInput = () => {
  let input = prompt('Enter your Choice!','').toUpperCase();

  if(input != ROCK && input != PAPER && input != SCISSORS){
      alert(`Entered choice is invalid! we choose ${DEFAULT_VALUE} for you`)
      //input = DEFAULT_VALUE;
      return;
  }

  return input;
};

const computerInput = () => {
  const number = Math.random();
  let choice;
  if(number < 0.34)
      choice = ROCK
  else if(number < 0.64)
      choice = SCISSORS
  else
      choice = PAPER

  return choice;
};

const predictWinner = (cChoice, pChoice = DEFAULT_VALUE) => {
  if(cChoice === pChoice)
    return DRAW;
  else if(pChoice === PAPER && cChoice === ROCK || 
    pChoice === SCISSORS && cChoice === PAPER || 
    pChoice === ROCK && cChoice === SCISSORS)
        return PLAYER_WINS;
  else 
      return COMPUTER_WINS;
}

let gameStarted = false;

 startGameBtn.addEventListener('click', () => {
   if(gameStarted)
      return;

   gameStarted = true;
   console.log('Game is starting!');
   const playerChoice = playerInput();
   const computerChoice = computerInput();
   let gameResult;

   if(playerChoice)
      gameResult = predictWinner(computerChoice, playerChoice);
   else
      gameResult = predictWinner(computerChoice);
   
   
   let message = `you choose ${playerChoice || DEFAULT_VALUE}, computer choose ${computerChoice} therefore you have `;
   if(gameResult === DRAW)
      message = message + 'has a draw.';
    else if(gameResult === PLAYER_WINS)
      message = message + 'won.';
    else
      message = message + 'lost.';
   alert(message);
   gameStarted = false;
 });

//not related to game

const sumUp = (...numbers) => {
  let sum = 0;
  for(const num of numbers){
    sum += num;
  }
  return sum;
};

const subtract = function(){
  let sum = 0;
  for(const num of arguments){ //dont use it
    sum -= num;
  }
  return sum;
};

console.log(sumUp(10,20,-5,30,40,50));
console.log(subtract(10,20,-5,30,40,50));
