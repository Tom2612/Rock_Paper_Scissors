function game() {
    function computerPlay() {
        let obj = {
            1: 'rock',
            2: 'paper',
            3: 'scissors'
        };
        let num = Math.floor((Math.random() * 3) + 1);
        return obj[num];
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            roundNum++;
            return 'You win!';
        } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            roundNum++;
            return 'You lose!';
        } else {
            roundNum++;
            return 'It\'s a draw!';

        }
    };

    let playerScore = 0, computerScore = 0, roundNum = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt('Make your choice...').toLowerCase(), computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score: ${playerScore}. Computer Score: ${computerScore}`);
    };
    if (roundNum == 5) {
        return `Final Score: player: ${playerScore}. Computer ${computerScore}`;
    }
};