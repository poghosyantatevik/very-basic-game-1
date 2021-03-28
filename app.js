/*
const getUserChoice = () => console.log("Hello World");
getUserChoice();
*/
let userWins = 0;
let computerWins = 0;
const getUserChoice = (userInput) => {
    let choice = userInput.toLowerCase();

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors' || choice === 'bomb' || choice === 'lizard' || choice === 'spock')
        return choice;
    else
        return 'error!';
};

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 5);
    let myChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    return myChoices[choice];
};

const determineWinner = (player, ai) => {
    //validation
    if (player === 'error!') {
        console.log('error!');
        return;
    } else if (player === 'bomb') {
        console.log("User wins, cheater...");
        return;
    }


    if (player === ai) {

    }
    //  console.log(`Tie, computer did ${ai}, player did ${player}`);
    else
    if ((player === 'rock' && ai === 'scissors') || (player === 'scissors' && ai === 'paper') || (player === 'paper' && ai === 'rock') || (player === 'lizard' && ai === 'spock') || (player === 'rock' && ai === 'lizard') || (player === 'spock' && ai === 'scissors') || (player === 'scissors' && ai === 'lizard') || (player === 'lizard' && ai === 'paper') || (player === 'paper' && ai === 'spock') || (player === 'spock' && ai === 'rock')) {
        //console.log(`User wins by ${player} computer did ${ai}`);
        userWins += 1;
    } else {
        computerWins += 1;
        //console.log(`Computer wins by ${ai} player did ${player}`);
    }

};


const playGame = (myChoice) => { //abstraction
    determineWinner(getUserChoice(myChoice), getComputerChoice())
}

const displayScore = () => {
    console.log(`player : ${userWins} - computer : ${computerWins}`);

    if (userWins > computerWins) {
        console.log(`the winner is the player`);
    } else if (userWins < computerWins) {
        console.log(`the winner is the computer`);
    } else if (userWins === computerWins) {
        console.log('it is a tie');
    }

}

playGame('rock');
playGame('paper');
playGame('scissors');
playGame('spock');
playGame('lizard');

displayScore();
//playGame(getComputerChoice());
//playGame('bomb');
//playGame('bomb');
