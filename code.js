// Initialize the variable to store the current point
let point = null;

// function to simulate rolling the dice
function rollDice() {
    // Generates random numbers for 2 dice
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;

    //Displays results of dice roll
    document.getElementById('dice').textContent = `${dice1} + ${dice2} = ${sum}`;
    
    // Checks if a point has been set
    if (point === null) {
        // this section is come-out roll
        if (sum === 7 || sum === 11) {
            document.getElementById('result').textContent = 'CRAPS! you lose.';
        } else if (sum === 2 || sum === 3 || sum === 12) {
            document.getElementById('result').textContent = 'you win.';
        } 
    } 
}
