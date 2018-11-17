const getUserChoice = userInput => 
{
 	userInput = userInput.toLowerCase();
 	if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
    return userInput;
  else
    console.log('Error: Your wrong text');
}

const Computer = name =>
{
  this.name = name;
}

Computer.prototype.getComputerChoice = function()
{
  let choiceNumber = Math.floor(Math.random() * 3);
  switch(choiceNumber)
    {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        break;
    }
}

const determineWinner = (userChoice, computerChoice) =>
{
	if(userChoice === computerChoice)
    {
      return 'The game was a tie';
    }
  else
    {
      if(userChoice === 'rock')
        {
          if(computerChoice === 'paper')
            return 'You are lose.';
          else if(computerChoice === 'scissors')
            return 'You are win!';
        }
      else if(userChoice === 'paper')
        {
          if(computerChoice === 'rock')
            return 'You are win!';
          else if(computerChoice === 'scissors')
            return 'You are lose.';
        }
      else if(userChoice === 'scissors')
        {
          if(computerChoice === 'rock')
            return 'You are lose.';
          else if(computerChoice === 'paper')
            return 'You are win!';
        }
    }
}


const playGame = () =>
{
  let userChoice = getUserChoice('rock');
  let computer1 = new Computer('Computer1');
  let computer2 = new Computer('Computer2');
  
  console.log(`User : ${userChoice} VS Computer : ${computer1.getComputerChoice()} \nGame Result : ${determineWinner(userChoice, computer1.getComputerChoice())}`);
  
  console.log(`Computer1 : ${computer1.getComputerChoice()} VS Computer2 : ${computer2.getComputerChoice()} \nGame Result : ${determineWinner(computer1.getComputerChoice(), computer2.getComputerChoice())}`);
}


playGame();