const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');

const roundResult = document.querySelector('.score-2 h5');
const finalResult = document.querySelector('.popup');
const finalMessage = document.querySelector('.final-message');
const finalResultButton = document.querySelector('.popup button');


rockButton.addEventListener('click', e => game('rock'));

paperButton.addEventListener('click', e => game('paper'));

scissorsButton.addEventListener('click', e => game('scissors'));
finalResultButton.addEventListener('click', e => resetGame());


function computerPlay()
{
    let randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber)
    {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function compareAnswers(playerSelection, computerSelection)
{
    if (playerSelection == 'rock')
    {
        switch (computerSelection)
        {
            case "Rock":
                return 'Tie!';
                break;
            case "Paper":
                return "You Lose! Paper beats Rock";
                break;
            case "Scissors":
                return "You Win! Rock beats Scissors"
                break;
        }
    }
    else if (playerSelection == 'paper')
    {
        switch (computerSelection)
        {
            case "Rock":
                return "You Win! Paper beats Rock";
                break;
            case "Paper":
                return "Tie!";
                break;
            case "Scissors":
                return "You Lose! Scissors beats Paper"
                break;
        }
    }
    else if (playerSelection == 'scissors')
    {
        switch (computerSelection)
        {
            case "Rock":
                return "You Lose! Rock beats Scissors";
                break;
            case "Paper":
                return "You Win! Scissors beats Paper";
                break;
            case "Scissors":
                return "Tie!"
                break;
        }
    }
}

function playRound(playerSelection, computerSelection)
{
    let result = compareAnswers(playerSelection, computerSelection);
    return result;
}

// function checkForValidAnswer(playerSelection)
// {
//     // do
//     // {
//     //     if (playerSelection != null)
//     //     {
//     //         alert('Please give a Valid answer!');
//     //     }
//     //     playerSelection = prompt("Rock/Paper/Scissors").toLocaleLowerCase();

//     // } while (playerSelection != 'rock' &&
//     // playerSelection != 'paper' &&
//     //     playerSelection != 'scissors')

//     return playerSelection;
// }

function countWins(result, playerWins, computerWins)
{
    let objectWins = {};

    if (result.includes("Win"))
    {
        playerWins++;
    }
    else if (result.includes("Lose"))
    {
        computerWins++;
    }
    objectWins.playerWins = playerWins;
    objectWins.computerWins = computerWins;
    return objectWins;
}

function declareWinner(playerWins, computerWins)
{
    if (playerWins > computerWins)
    {
        return ('You win the Game!');
        console.log('You win the Game!');
    }
    else if (computerWins > playerWins)
    {
        return ('Computer wins the Game!');
        console.log('Computer wins the Game!');
    }
    else
    {
        return ('The game is a Tie!');
        console.log('The game is a Tie!');
    }
}

let playerWins = 0;
let computerWins = 0;
let winsCount = {};

function game(playerSelection)
{
    console.log('Best out of 5 Wins!')
    // for (let i = 0; i < 5; i++)
    // {
    // let playerSelection;
    // playerSelection = checkForValidAnswer(playerSelection);
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    roundResult.textContent = result;

    console.log(result);

    winsCount = countWins(result, playerWins, computerWins);
    playerWins = winsCount.playerWins;
    computerWins = winsCount.computerWins;

    playerScore.textContent = `Player: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
    // }
    console.log('Player: ' + playerWins + ' - ' + 'Computer: ' + computerWins);

    if (playerWins >= 5 || computerWins >= 5)
    {
        popup(declareWinner(playerWins, computerWins));
    }
}

function popup(message)
{
    finalResult.style.visibility = 'visible';
    finalMessage.textContent = message;
}

function resetGame()
{
    playerWins = 0;
    computerWins = 0;
    playerScore.textContent = `Player: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
    finalResult.style.visibility = 'hidden';
}

// game();
