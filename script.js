let flashcards = [
  { image: "images/1.webp", answer: "Tyrannosaurus rex" },
  { image: "images/2.webp", answer: "Triceratops" },
  { image: "images/3.jpeg", answer: "Velociraptor" },
  { image: "images/4.webp", answer: "Stegosaurus" },
  { image: "images/5.avif", answer: "Brachiosaurus" },
  { image: "images/6.avif", answer: "Allosaurus" },
  { image: "images/7.jpeg", answer: "Spinosaurus" },
  { image: "images/8.webp", answer: "Ankylosaurus" },
  { image: "images/9.jpg", answer: "Diplodocus" },
  { image: "images/10.webp", answer: "Parasaurolophus" },
  { image: "images/11.jpg", answer: "Iguanodon" },
  { image: "images/12.jpg", answer: "Pteranodon" },
  { image: "images/13.jpg", answer: "Apatosaurus" },
  { image: "images/14.jpeg", answer: "Carnotaurus" },
  { image: "images/15.jpg", answer: "Megalosaurus" },
  { image: "images/16.webp", answer: "Therizinosaurus" },
  { image: "images/17.webp", answer: "Styracosaurus" },
  { image: "images/18.png", answer: "Hadrosaurus" },
  { image: "images/19.png", answer: "Oviraptor" },
  { image: "images/20.jpeg", answer: "Microraptor" },
  { image: "images/21.png", answer: "Giganotosaurus" },
  { image: "images/22.webp", answer: "Suchomimus" },
  { image: "images/23.webp", answer: "Eoraptor" },
  { image: "images/24.webp", answer: "Pachycephalosaurus" },
  { image: "images/25.jpg", answer: "Cryolophosaurus" },
  { image: "images/26.webp", answer: "Baryonyx" },
  { image: "images/27.webp", answer: "Utahraptor" },
  { image: "images/28.jpg", answer: "Protoceratops" },
  { image: "images/29.jpg", answer: "Dunkleosteus" },
  { image: "images/30.jpg", answer: "Theropoda" },
  { image: "images/31.png", answer: "Argentinosaurus" },
  { image: "images/32.jpg", answer: "Hesperornis" },
  { image: "images/33.webp", answer: "Sinornithosaurus" },
  { image: "images/34.jpg", answer: "Nodosaurus" },
  { image: "images/35.jpg", answer: "Matheronodon" },
  { image: "images/36.webp", answer: "Lurdusaurus" },
  { image: "images/37.jpg", answer: "Eotrachodon" },
  { image: "images/38.jpg", answer: "Rhabdodon" },
  { image: "images/39.jpg", answer: "Jobaria" },
  { image: "images/40.jpg", answer: "Hipsilophodon" },
  { image: "images/41.webp", answer: "Choyrodon" },
  { image: "images/42.webp", answer: "Dreadnoughtus" },
  { image: "images/43.jpg", answer: "Elaphrosaurus" },
  { image: "images/44.jpg", answer: "Fukuisaurus" },
  { image: "images/45.png", answer: "Hypsilophodon" },
  { image: "images/46.jpeg", answer: "Incisivosaurus" },
  { image: "images/47.webp", answer: "Jeholornis" },
  { image: "images/48.avif", answer: "Morelladon" },
  { image: "images/49.webp", answer: "Notohypsilophodon" },
  { image: "images/50.jpeg", answer: "Zalmoxes" },
];

let currentIndex = 0;
let wrongGuessCount = 0; 
let maxWrongGuesses = 3; 

let flashcardElement = document.getElementById("flashcard");
let imageElement = document.getElementById("image");
let nameInput = document.getElementById("NametheDinosaur");
let resultMessage = document.getElementById("resultMessage");
let submitGuessButton = document.getElementById("submitGuess");

imageElement.src = flashcards[currentIndex].image;
imageElement.classList.remove("hidden");

submitGuessButton.addEventListener("click", () => {
  let userAnswer = nameInput.value.trim().toLowerCase();
  let correctAnswer = flashcards[currentIndex].answer.toLowerCase();

  if (userAnswer === "") {
    resultMessage.textContent = "Please enter a dinosaur name.";
    resultMessage.classList.add("error");
    setTimeout(() => (resultMessage.textContent = ""), 3000);
    return; 
  }

  if (userAnswer === correctAnswer) {
    resultMessage.textContent = "Correct!";
    resultMessage.classList.add("correct");
    setTimeout(() => resultMessage.classList.remove("correct"), 5000);

    wrongGuessCount = 0; 
    currentIndex++;

    if (currentIndex < flashcards.length) {
      flashcardElement.classList.add("flashcard-flip");
      setTimeout(() => {
        nameInput.value = "";
        imageElement.src = flashcards[currentIndex].image;
        flashcardElement.classList.remove("flashcard-flip");
        resultMessage.textContent = "";
      }, 350);
    } else {
      resultMessage.textContent =
        "Congratulations 🎉🎉🎉 You are a dinosaur genius!";
      flashcardElement.classList.add("hidden");
      nameInput.classList.add("hidden");
      submitGuessButton.classList.add("hidden");
    }
  } else {
    resultMessage.textContent = "Sorry, wrong answer.😔 Try again!";
    wrongGuessCount++;

    if (wrongGuessCount >= maxWrongGuesses) {
        let firstThreeLetters = flashcards[currentIndex].answer.substring(0, 3).toUpperCase();
        let lastTwoLetters = flashcards[currentIndex].answer.slice(-2).toUpperCase(); 
        resultMessage.textContent = `Here's a hint: The dinosaur's name starts with "${firstThreeLetters}" and ends with "${lastTwoLetters}".`;
    }
  }
});
