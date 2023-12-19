import readlineSync from 'readline-sync';

console.log('Hello there! And welcome to the game of Rock, Paper, Scissors!');
const yourChoice = () => {
    const options = ['rock', 'paper', 'scissors', 'random'],
    index = readlineSync.keyInSelect(options, "Now then, what will you choose?: ");
    let randomNumber = Math.floor(Math.random() * 3);
    if (options[index] === 'random') {
        switch(randomNumber) {
            case 0:
                options[index] = 'rock';
                break;
            case 1:
                options[index] = 'paper';
                break;
            case 2:
                options[index] = 'scissors';
                break;
        }
    } 
    return options[index];
}

const cpuChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const playGame = () => {
    const yourThrow = yourChoice();
    const cpuThrow = cpuChoice();
    if (yourThrow != undefined) {
        console.log(`You choose ${yourThrow} & the computer chooses ${cpuThrow}.`);
    } else {
        console.log('Change your mind? Come back again!');
    }
    let result = '';

    
    if (yourThrow === cpuThrow) {
        result =`What a surprise! You both tie! `;
    } 

    if (yourThrow === 'rock') {
        if (cpuThrow === 'paper') {
            result = "Today's not your lucky day, the CPU folds your paper. The CPU wins!";
        } else if (cpuThrow === 'scissors') {
            result = "Incredible force with that rock! You absolutely broke the CPU's scissors! You win!";
        }
    }
    
    if (yourThrow === 'paper') {
        if (cpuThrow === 'scissors') {
            result = "Oh, I can't watch...! The CPU cuts your paper in pieces! The CPU wins!";
        } else if (cpuThrow === 'rock') {
            result = "It's as if your paper folds itself onto the rock itself. You Win!";
        }
    }

    if (yourThrow === 'scissors') {
        if (cpuThrow === 'rock') {
            result = "Oh no! The CPU slams their rock against your scissors, breaking them! The CPU wins!";
        } else if (cpuThrow === 'paper') {
            result = "Incredible! You're outright making origami out of the CPU's paper! You Win!";
        }
    }
    console.log(result);
    return result;
}
playGame();
