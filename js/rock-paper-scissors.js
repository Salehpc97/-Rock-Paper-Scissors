// Get DOM elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper'); 
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');
const result = document.getElementById('result');
const score = document.getElementById('score'); 
const round = document.getElementById('round');
const computerChoice = document.getElementById('computer-choice'); 
const backButton = document.getElementById('backbutton');
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0; 
var buttonnum=0;// set buttonnum to 1 and return to main menu when the user clicks 2 times on the button.
var maxRounds = 5; 
rock.addEventListener('click', () => { playRound('rock'); }); 
paper.addEventListener('click', () => { playRound('paper'); }); 
scissors.addEventListener('click', () => { playRound('scissors'); }); 
reset.addEventListener('click', () => { resetGame(); }); 
backButton.addEventListener('click', () => { checkGamePlayed(buttonnum); }); 

    result.textContent = "* Roke Paper Scissors is a fun Game *";

    // Play a single round of the game
function playRound(playerSelection) { 
        roundNumber++; 
      if (roundNumber === maxRounds) {
        updatescreen();
        endGame();
        return;
        } 
        updatescreen(playerSelection);
    }
    // Update screen with round result and scores
    function updatescreen(playerSelection){
        backButton.textContent ="Back to Main Menu";
        buttonnum= 0;
        const computerSelection = getComputerChoice(); 
        computerChoice.innerHTML = `Computer chose: <span>${computerSelection}</span>`; 
        const roundResult = getRoundResult(playerSelection, computerSelection); 
        result.innerHTML = `Round ${roundNumber}: <span>${roundResult}</span>`;
        result.classList.add(roundResult.includes('win') ? 'win-animation' : roundResult.includes('lose') ? 'lose-animation' : 'tie-animation');
        setTimeout(() => result.classList.remove('win-animation', 'lose-animation', 'tie-animation'), 500);
        result.classList.add(roundResult.includes('win') ? 'win-animation' : roundResult.includes('lose') ? 'lose-animation' : 'tie-animation');
        setTimeout(() => result.classList.remove('win-animation', 'lose-animation', 'tie-animation'), 500); updateScore(roundResult); 
        round.innerHTML = `Round: <span>${roundNumber}</span>`; 
        score.innerHTML = `Player: <span>${humanScore}</span> - Computer: <span>${computerScore}</span>`;
        score.classList.add('score-update');
        setTimeout(() => score.classList.remove('score-update'), 300);
       }

    // Generate random computer choice
    function getComputerChoice() { 
       const choices = ["rock", "paper", "scissors"]; 
       const randomIndex = Math.floor(Math.random() * choices.length);
       return choices[randomIndex]; 
    }    
    function updateScore(roundResult)  { 
      score.innerHTML = `Player: <span>${humanScore}</span> - Computer: <span>${computerScore}</span>`;
      score.classList.add('score-update');
      setTimeout(() => score.classList.remove('score-update'), 300); 
    } 
    // Determine round result based on player and computer choices
    function getRoundResult(playerSelection, computerSelection) {  
      if (playerSelection === computerSelection) { 
         return "It's a tie!"; 
        } 
       else if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ) {
         humanScore++;
        return "You win!"; 
        } 
        else { 
            computerScore++;
         return "You lose!";
        }
    } 
    // Reset game state to initial values
    function resetGame() {
      if (roundNumber === 0) {
         result.textContent = "Noting to reaset";
         return;
        }
      humanScore = 0; computerScore = 0; roundNumber = 0; 
      result.textContent = ""; 
      score.textContent = "Player: 0 - Computer: 0"; 
      round.textContent = "Round: 0"; 
      computerChoice.textContent = ""; 
    }
    // Handle end game logic and display final result
    function endGame() { 
        if (humanScore > computerScore){
           result.textContent = "Congratulations! You win the game!";
           showCelebration('win');
           }
           else if (humanScore < computerScore) { 
               result.textContent = "Sorry, you lose the game!";
               showCelebration('lose');
           }
           else if (humanScore === computerScore) {
               result.textContent = "It's a tie! The game ends in a draw.";
               showCelebration('tie');
           }
    }
    // Show celebration overlay based on game outcome.
    function showCelebration(outcome) {
       const overlay = document.createElement('div'); // Create the overlay element.
       overlay.className = 'celebration-overlay'; // Add the class name.
       const content = document.createElement('div'); // Create the content element.
       content.className = 'celebration-content'; // Add the class name.
       content.textContent = outcome === 'win' ? '🎉 You Win! 🎉' : outcome === 'lose' ? '😢 You Lose 😢' : "🤝 I'ts a Tie! 🤝"; // set the outcome =  content.textContent to display the celebration.
       overlay.appendChild(content); // Append the content to the overlay.
       document.body.appendChild(overlay); // Append the overlay to the body.
       overlay.addEventListener('click', () => {
         overlay.remove(); // Remove the overlay when clicked
         resetGame(); // then reset the game.
        });
     setTimeout(() => { // Remove the overlay after 15 seconds
      overlay.remove();
        }, 15000);
    } 
    // Navigate back to the main menu
    function back () {
     window.location.href = 'index.html';
    }
    // Check game state and handle back button logic
    function checkGamePlayed(check) {
        if(check === 0) { // buttonnum ->chek= 0 && roundNumber=0 display lets go.
            if (roundNumber === 0) { // if roundNumber = 0 display lets go.
                buttonnum= 1; // change buttonnum to 1 do return to main menu.
                result.textContent = "Lets go!";
                backButton.textContent ="Bake any way";
                backButton.addEventListener('click', () => { checkGamePlayed(buttonnum); }); 
            }
            else if (roundNumber > 0 && roundNumber<6) { // if roundNumber > 0 && roundNumber<6 display oops.
                buttonnum= 1;
                result.textContent = "oops!";
                backButton.textContent ="Bake any way";
                backButton.addEventListener('click', () => { checkGamePlayed(buttonnum); }); 
                   }
                else if (roundNumber === 5) { // return to main menu.
                    back (); // we call this function to return to main menu.
                    }
                     else {
                        back ();
                        }
        }
        else {
            back ();
         }
        }

     
  

