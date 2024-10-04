let images = [
    { img: "Horse.jpg", correctChoice: 1 },
    { img: "Falcon.jpg", correctChoice: 2 },
    { img: "Killer-Whale.jpg", correctChoice: 3 }
];

let score = 0;
let plays = 0;
let currentImage = 0;
let cardFlipped = false;

function loadImage() {
    currentImage = Math.floor(Math.random() * images.length); // Select a random image index
    document.getElementById('hiddenImage').src = ""; // Clear the image initially
    document.getElementById('flashcard').classList.remove('flipped');  // Reset to front
}

function checkAnswer(choice) {
    if (cardFlipped) return; // Prevent multiple clicks before flip completes

    plays++;
    cardFlipped = true;

    // Flip the card to show the image
    document.getElementById('flashcard').classList.add('flipped');
    document.getElementById('hiddenImage').src = images[currentImage].img; // Show the image

    setTimeout(() => {
        if (choice === images[currentImage].correctChoice) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
        updateScoreboard();

        if (plays === 3) {
            setTimeout(() => {
                alert(`Game Over! Your final score is: ${score}`);
                resetGame();
            }, 500);
        } else {
            loadImage(); // Load the next image for the next turn
            cardFlipped = false; // Allow further interaction
        }
    }, 1000); // Keep the card flipped for a moment before showing the result
}

function updateScoreboard() {
    document.getElementById('score').textContent = score;
    document.getElementById('plays').textContent = plays;
}

function resetGame() {
    score = 0;
    plays = 0;
    cardFlipped = false;
    updateScoreboard();
    loadImage();
}

// Start the game when the page loads
window.onload = loadImage;

function flipCard() {
    // No need to manually flip. The checkAnswer will trigger the flip.
}
