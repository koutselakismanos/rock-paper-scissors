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
    switch (playerSelection)
    {
        case "rock":
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
            break;
        case "paper":
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
            break;
        case "scissors":
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
            break;
    }
}

function playRound(playerSelection, computerSelection)
{
    return compareAnswers(playerSelection, computerSelection);
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

function checkWinnter()
{


}

function game()
{
    console.log('Best out of 5 Wins!')
    let count = 0;
    for (let i = 0; i < 5; i++)
    {
        count++;
        let playerSelection;
        playerSelection = checkForValidAnswer(playerSelection);
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}




game();