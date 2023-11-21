/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

var word = document.querySelector("#word");
var text = document.querySelector("#text");
var scoreEl = document.querySelector("#score");
var timeEl = document.querySelector("#time");
var endgameEl = document.querySelector("#end-game-container");
var settingsBtn = document.querySelector("#settings-btn");
var settings = document.querySelector("#settings");
var settingsForm = document.querySelector("#settings-form");
var difficultySelect = document.querySelector("#difficulty");

// List of words for game
var words = [
  "aryan_maurya",
  "AmsR",
  "kkr-amsr",
  "b praak",
  "a@di",
  "br0keN",
  "sigh",
  "tense",
  "adieu",
  "tares",
  "soare",
  "ducat",
  "ouija",
  "carom",
  "ergot",
  "craic",
  "squab",
  "enoki",
  "azure",
  "remuda",
  "coulee",
  "chador",
  "ihotse",
  "ajijic",
  "twibil",
  "wapiti",
  "snazzy",
  "north",
  "quince",
  "airplane",
  "warlike",
  "feeble",
  "crime",
  "drag",
  "loving",
  "dependent",
  "steer",
  "silver",
  "richard",
  "speeding",
  "independent",
  "caring",
  "javascript",
  "highfalutin",
  "superficial",
  "accommodation",
  "verborois",
  "difficulty",
  "onomatopoeia",
  "maltulsian",
  "totalitarianism",
  "synedoche",
  "oxymoron",
  "peculiar",
];
var scores = [];
// Init score
var score = 0;
function neutralize() {
  scoreEl.innerHTML = 0;
  score = 0;
}
var audio = new Audio();
audio.src = "https://www.soundjay.com/clock/clock-ticking-2.mp3";
window.onclick = function () {
  audio.play();
  audio.loop = true;
};
let startgame = () => {
  var randomWord;

  var time = 15;

  // Set difficulty to value in ls or medium
  var difficulty = "medium";

  // Set difficulty select value
  difficultySelect.value = "medium";

  // Focus on text on start
  text.focus();

  endgameEl.style.display = "none";
  // Start counting down
  var timeInterval = setInterval(updateTime, 1000);

  // Generate random word from array
  function getRandomWord() {
    if (difficulty === "easy") {
      return words[Math.floor(Math.random() * 16)];
    } else if (difficulty === "medium") {
      return words[Math.floor(Math.random() * 16) + 16];
    } else {
      return words[Math.floor(Math.random() * 16) + 32];
    }
  }

  // Add word to DOM
  function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
  }

  /* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

  // Update score
  function updateScore() {
    if (time != 0) {
      score++;
      scoreEl.innerHTML = score;
    } else if (time === 0) {
    } else {
    }
  }

  // Update time
  function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";

    if (time === 0) {
      clearInterval(timeInterval);
      score = 0;
      // end game
      gameOver();
    }
  }

  addWordToDOM();

  // Event listeners

  // Typing

  text.addEventListener("input", (e) => {
    var insertedText = e.target.value;

    if (insertedText === randomWord) {
      addWordToDOM();
      updateScore();
      responsiveVoice.speak("Great", "US English Female", {
        rate: 1.1,
        volume: 90,
        pitch: 0.6,
      });
      // Clear
      e.target.value = "";

      if (difficulty === "hard") {
        time += 1;
      } else if (difficulty === "medium") {
        time += 2;
      } else {
        time += 3;
      }

      updateTime();
    }
  });
};
setTimeout(() => {
  document.querySelector("#loader").style.display = "none";
  startgame();
}, 5000);
// Settings btn click
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

// Settings select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  gameOver();
});
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${scoreEl.textContent}</p>
    <button onclick="startgame()">Restart</button>`;
  responsiveVoice.speak("Game Over", "US English Female", {
    rate: 1.1,
    volume: 90,
    pitch: 0.6,
  });

  scores.push(scoreEl.textContent);

  scores.push(scoreEl.textContent);
  audio.pause();
  neutralize();
  neutralize();
  document.querySelector("#high").innerHTML =
    "Your high score is " + Math.max(...scores);
  endgameEl.style.display = "flex";
}
document.querySelector("#loader").style = `
height:${window.innerHeight};
width:${window.innerWidth};
align-items:center;
justify-content:center;

`;

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/
