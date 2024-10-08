let images = [
    { img: "horse.png", correctChoice: 1 },
    { img: "Falcon.jpg", correctChoice: 2 },
    { img: "orca.webp", correctChoice: 3 }
];

let score = 0;
let plays = 0;
let currentImage = 0;
let cardFlipped = false;

function loadImage() {
    // select a random image
    currentImage = Math.floor(Math.random() * images.length); 
    // clear the image 
    document.getElementById('hiddenImage').src = "";
    // Reset to front
    document.getElementById('flashcard').classList.remove('flipped');  
}

function checkAnswer(choice) {
    if (cardFlipped) return; 

    plays++;
    cardFlipped = true;

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
            loadImage(); 
            cardFlipped = false; 
        }
    }, 1000); 
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
// start the game
window.onload = loadImage;

function flipCard() {
}
