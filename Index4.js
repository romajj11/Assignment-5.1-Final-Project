let moveInterval; // Variable to store the interval ID for moving the meme

// Function to generate random positions within viewport
function getRandomPosition(element) {
    const maxX = window.innerWidth - element.clientWidth;
    const maxY = window.innerHeight - element.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
}

// Function to move the meme image to random position
function moveMeme() {
    const meme = document.getElementById('meme');
    const { x, y } = getRandomPosition(meme);
    meme.style.left = `${x}px`;
    meme.style.top = `${y}px`;
}

// Initially position the meme at a random location when window loads
window.onload = function() {
    moveMeme();
};

// Event listener for Button 1 to move meme image
document.getElementById('button1').addEventListener('click', function() {
    // Clear any existing interval to prevent multiple intervals running simultaneously
    clearInterval(moveInterval);
    
    // Move the meme image to a new random position every second
    moveInterval = setInterval(moveMeme, 1000); // Move every 1000 milliseconds (1 second)
});

// Event listener for Button 2 to stop meme image from moving
document.getElementById('button2').addEventListener('click', function() {
    // Clear the interval to stop meme image from moving
    clearInterval(moveInterval);
});
