const rock = document.getElementById('rock');
const paper = document.getElementById('paper'); 
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');
const result = document.getElementById('result');
const score = document.getElementById('score'); 
const round = document.getElementById('round');
const computerChoice = document.getElementById('computer-choice'); 
const backButton = document.getElementById('backbutton');
var buttonnum=0;
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0; 
var maxRounds = 5; 
rock.addEventListener('click', () => { playRound('rock'); }); 
paper.addEventListener('click', () => { playRound('paper'); }); 
scissors.addEventListener('click', () => { playRound('scissors'); }); 
reset.addEventListener('click', () => { resetGame(); }); 
backButton.addEventListener('click', () => { checkGamePlayed(buttonnum); }); 

    result.textContent = "* Roke Paper Scissors is a fun Game *";

    function playRound(playerSelection) { 
        roundNumber++; 
      if (roundNumber === maxRounds) {
        updatescreen();
        endGame();
        return;
        } 
        updatescreen(playerSelection);
    }
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
    function resetGame() {
        if (roundNumber === 0){
            result.textContent = "Noting to reaset";
            return;
        }
     humanScore = 0; computerScore = 0; roundNumber = 0; 
     result.textContent = ""; 
     score.textContent = "Player: 0 - Computer: 0"; 
     round.textContent = "Round: 0"; 
     computerChoice.textContent = ""; 
    }
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
    function showCelebration(outcome) {
     const overlay = document.createElement('div');
     overlay.className = 'celebration-overlay';
     const content = document.createElement('div');
     content.className = 'celebration-content';
     content.textContent = outcome === 'win' ? '🎉 You Win! 🎉' : outcome === 'lose' ? '😢 You Lose 😢' : "🤝 I'ts a Tie! 🤝";
     overlay.appendChild(content);
     document.body.appendChild(overlay);
     overlay.addEventListener('click', () => {
         overlay.remove();
         resetGame();
        });
     setTimeout(() => {
      overlay.remove();
        }, 15000);
    } 
    function bake () {
     window.location.href = 'Rock Paper Scissors.html';
    }
    function checkGamePlayed(check) {
        if(check === 0) {
            if (roundNumber === 0) {
                buttonnum= 1;
                result.textContent = "Lets go!";
                backButton.textContent ="Bake any way";
                backButton.addEventListener('click', () => { checkGamePlayed(buttonnum); }); 
            }
            else if (roundNumber > 0 && roundNumber<6) {
                buttonnum= 1;
                result.textContent = "oops!";
                backButton.textContent ="Bake any way";
                backButton.addEventListener('click', () => { checkGamePlayed(buttonnum); }); 
                   }
                else if (roundNumber === 6) {
                      bake ();
                         }
                     else {
                       bake ();
                        }
        }
        else {
            bake ();
         }
        }

     
  

