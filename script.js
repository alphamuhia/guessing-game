const flashcards = [
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

      const countryFlashcards = [
  {image:"images/c1.jpeg",answer:"Tanzania"},
  {image:"images/c2.png",answer:"Uganda"},
  {image:"images/c3.png",answer:"Kenya"},
  {image:"images/c4.png",answer:"Burundi"},
  {image:"images/c5.png",answer:"Rwanda"},
  {image:"images/c6.png",answer:"Somali"},
  {image:"images/c7.png",answer:"Djibuti"},
  {image:"images/c8.png",answer:"Malawi"},
  {image:"images/c9.png",answer:"Mozambique"},
  {image:"images/c10.png",answer:"Eritrea"},
  {image:"images/c11.jpeg",answer:"Congo"},
  {image:"images/c12.png",answer:"Sudan"},
  {image:"images/c13.png",answer:"Nigeria"},
  {image:"images/c14.png",answer:"Niger"},
  {image:"images/c15.png",answer:"South Africa"},
  {image:"images/c16.png",answer:"Lesotho"},
  {image:"images/c17.png",answer:"Madagascar"},
  {image:"images/c18.png",answer:"Egypt"},
  {image:"images/c19.png",answer:"Tunisia"},
  {image:"images/c20.png",answer:"Mauritania"},
  {image:"images/c21.png",answer:"Ghana"},
  {image:"images/c22.png",answer:"Benin"},
  {image:"images/c23.png",answer:"Guinea Bissau"},
  {image:"images/c24.png",answer:"Senegal"},
  {image:"images/c25.png",answer:"Burkina Faso"},
  {image:"images/c26.png",answer:"Cameroon"},
  {image:"images/c27.png",answer:"Ethiopia"},
  {image:"images/c28.png",answer:"South Sudan"},
  {image:"images/c29.png",answer:"Togo"},
  {image:"images/c30.png",answer:"Guinea"},
  {image:"images/c31.png",answer:"Sao Tome and Principe"},
  {image:"images/c32.png",answer:"Mali"},
  {image:"images/c33.png",answer:"Russia"},
  {image:"images/c34.png",answer:"kazakhstan"},
  {image:"images/c35.png",answer:"Mongolia"},
  {image:"images/c36.png",answer:"North Korea"},
  {image:"images/c37.png",answer:"Iran"},
  {image:"images/c38.png",answer:"Turkey"},
  {image:"images/c39.png",answer:"Nepal"},
  {image:"images/c40.png",answer:"Qatar"},
  {image:"images/c41.png",answer:"Pakistan"},
  {image:"images/c42.png",answer:"Philippines"},
  {image:"images/c43.png",answer:"Sri Lanka"},
  {image:"images/c44.png",answer:"Ecuador"},
  {image:"images/c45.png",answer:"Suriname"},
  {image:"images/c46.png",answer:"Peru"},
  {image:"images/c47.png",answer:"Guyana"},
  {image:"images/c48.png",answer:"Bolivia"},
  {image:"images/c49.png",answer:"Greenland"},
  {image:"images/c50.png",answer:"Bermuda"},
      ];

      const insectsFlashcards = [
        { image: "images/i1.webp", answer: "" },
        { image: "images/i2.png", answer: "" },
        { image: "images/i3.jpeg", answer: "" },
        { image: "images/i4.avif", answer: "" },
        { image: "images/i5.png", answer: "" },
        { image: "images/i6.png", answer: "" },
        { image: "images/i7.png", answer: "" },
        { image: "images/i8.jpeg", answer: "" },
        { image: "images/i9.png", answer: "" },
        { image: "images/i10.png", answer: "" },
        { image: "images/i11.png", answer: "" },
        { image: "images/i12.jpeg", answer: "" },
        { image: "images/i13.jpg", answer: "" },
        { image: "images/i14.png", answer: "" },
        { image: "images/i15.png", answer: "" },
        { image: "images/i16.png", answer: "" },
        { image: "images/i17.png", answer: "" },
        { image: "images/i18.png", answer: "" },
        { image: "images/i19.png", answer: "" },
        { image: "images/i20.jpeg", answer: "" },
        { image: "images/i21.jpeg", answer: "" },
        { image: "images/i22.png", answer: "" },
        { image: "images/i23.png", answer: "" },
        { image: "images/i24.png", answer: "" },
        { image: "images/i25.jpeg", answer: "" },
        { image: "images/i26.png", answer: "" },
        { image: "images/i27.png", answer: "" },
        { image: "images/i28.png", answer: "" },
        { image: "images/i29.jpeg", answer: "" },
        { image: "images/i30.jpg", answer: "" },
        { image: "images/i31.jpg", answer: "" },
        { image: "images/i32.jpeg", answer: "" },
        { image: "images/i33.png", answer: "" },
        { image: "images/i34.png", answer: "" },
        { image: "images/i35.png", answer: "" },
        { image: "images/i36.jpeg", answer: "" },
        { image: "images/i37.jpeg", answer: "" },
        { image: "images/i38.webp", answer: "" },
        { image: "images/i39.jpeg", answer: "" },
        { image: "images/i40.jpeg", answer: "" },
        { image: "images/i41.jpg", answer: "" },
        { image: "images/i42.png", answer: "" },
        { image: "images/i43.png", answer: "" },
        { image: "images/i44.jpg", answer: "" },
        { image: "images/i45.png", answer: "" },
        { image: "images/i46.jpg", answer: "" },
        { image: "images/i47.jpg", answer: "" },
        { image: "images/i48.webp", answer: "" },
        { image: "images/i49.webp", answer: "" },
        { image: "images/i50.webp", answer: "" },
      ];

      let currentFlashcards = [];
      let currentIndex = 0;
      let wrongAnswerCount = 0;
      const maxWrongAnswer = 3;

      const homepage = document.getElementById("homepage");
      const categoryMenu = document.getElementById("categoryMenu");
      const gamePlay = document.getElementById("game-play");
      const imageElement = document.getElementById("image");
      const nameInput = document.getElementById("Nametheimage");
      const submitAnswerButton = document.getElementById("submitAnswer");
      const resultMessage = document.getElementById("resultMessage");

      function showPage(pageId) {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => (section.style.display = "none"));
        document.getElementById(pageId).style.display = "flex";
      }

      function showCategoryMenu() {
        showPage("categorypage");
      }

      function quitToHomePage() {
        showPage("homepage");
      }

      document.getElementById("Dinosaur").addEventListener("click", () => {
        currentFlashcards = flashcards;
        startGame("How well do you know the Dinosaurs?");
      });

      document.getElementById("Country").addEventListener("click", () => {
        currentFlashcards = countryFlashcards;
        startGame("How well do you know the Countries?");
      });

      document.getElementById("Insects").addEventListener("click", () => {
        currentFlashcards = insectsFlashcards;
        startGame("How well do you know the Insects?");
      });

      function startGame(title) {
        document.getElementById("gameTitle").textContent = title;
        currentIndex = 0;
        wrongAnswerCount = 0;
        loadFlashcard();
        showPage("playgamepage");
      }

      function loadFlashcard() {
        imageElement.src = currentFlashcards[currentIndex].image;
        imageElement.classList.remove("hidden");
        resultMessage.textContent = "";
        nameInput.value = "";
      }

      submitAnswerButton.addEventListener("click", () => {
        const userAnswer = nameInput.value.trim().toLowerCase();
        const correctAnswer =
          currentFlashcards[currentIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
          resultMessage.textContent = "Correct!";
          currentIndex++;

          if (currentIndex < currentFlashcards.length) {
            setTimeout(loadFlashcard, 1000);
          } else {
            resultMessage.textContent =
              "Congratulations! You completed the game!";
            nameInput.classList.add("hidden");
            submitAnswerButton.classList.add("hidden");
          }
        } else {
          resultMessage.textContent = "Sorry, wrong answer. Try again!";
          wrongAnswerCount++;

          if (wrongAnswerCount >= maxWrongAnswer) {
            resultMessage.textContent += ` Hint: Starts with "${correctAnswer
              .charAt(0)
              .toUpperCase()}" and ends with "${correctAnswer
              .charAt(correctAnswer.length - 1)
              .toLowerCase()}".`;
          }
        }
      });