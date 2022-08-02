
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var timer;
var timerCount;
var arrayQuestion = {questionArray: 'Arrays are commonly found in', ansArray1: 'JS', ansArray2: 'HTML', ansArray3: 'CSS'}




// starts the game
function startGame() {
  isWin = false;
  timerCount = 25;
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}



  // Sets timer

function startTimer() {

  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}




function getWins() {

  var highScores= localStorage.getItem("highScores");

  if (highScores === null) {
    scores = 0;
  } else {
    highscores = storedScores;
  }
  //Render win count to page
  win.textContent = highScores;
}

// event listener function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it open when page opened
init();


