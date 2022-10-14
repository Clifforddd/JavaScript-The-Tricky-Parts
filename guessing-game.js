function guessingGame() {
    const randNum = Math.floor(Math.random() * 100);
    let guessNum = 0;
    let gameWin = false;

    return function guess(num) {
        if (gameWin) 
            return "The game is over, you already won!"
        guessNum++;

        if (num === randNum) {
            isOver = true;
            const guess = gameWin === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${gameWin} ${guess}.`;
        }
        if (num < randNum) 
            return `${num} is too low!`;
        if (num > randNum) 
            return `${num} is too high!`;
    }
}

module.exports = { guessingGame };
