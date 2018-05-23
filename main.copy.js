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

function checkForValidAnswer(playerSelection)
{
    do
    {
        if (playerSelection != null)
        {
            alert('Please give a Valid answer!');
        }
        playerSelection = prompt("Rock/Paper/Scissors").toLocaleLowerCase();

    } while (playerSelection != 'rock' &&
    playerSelection != 'paper' &&
        playerSelection != 'scissors')

    return playerSelection;
}

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
        console.log('You win the Game!');
    }
    else if (computerWins > playerWins)
    {
        console.log('Computer wins the Game!');
    }
    else
    {
        console.log('The game is a Tie!');
    }
    return
}

function game()
{
    console.log('Best out of 5 Wins!')
    let playerWins = 0;
    let computerWins = 0;
    let winsCount = {};
    for (let i = 0; i < 5; i++)
    {
        let playerSelection;
        playerSelection = checkForValidAnswer(playerSelection);
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log(playRound(playerSelection, computerSelection));

        winsCount = countWins(result, playerWins, computerWins);
        playerWins = winsCount.playerWins;
        computerWins = winsCount.computerWins;
    }
    console.log('Player: ' + playerWins + ' - ' + 'Computer: ' + computerWins);
    declareWinner(playerWins, computerWins);
}

game();
