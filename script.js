let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  const feedbackElement = document.getElementById("feedback");
  const attemptsCountElement = document.getElementById("attemptsCount");



  if (userGuess === secretNumber) {
    feedbackElement.textContent = `Congratulations! You guessed the correct number (${secretNumber}).`;
    resetGame();
 } else{
    if (userGuess > secretNumber) {
        feedbackElement.textContent = `Your guess is  high `;
        } 
        else {
    feedbackElement.textContent = `Your guess is too low (${userGuess}).`;
    }
 }
  
    if (attempts >= 3) {   
      feedbackElement.textContent = `Sorry, you've run out of attempts. The correct number was ${secretNumber}.`;
      resetGame();
    }
  

  // Update the displayed number of attempts
  attemptsCountElement.textContent = attempts;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";

  // Reset the displayed number of attempts
  document.getElementById("attemptsCount").textContent = attempts;
}
